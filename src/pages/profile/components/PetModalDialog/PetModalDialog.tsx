import { useEffect, useState } from 'react';
import { z } from 'zod';
import { Path, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { customerResponse } from '../../../../api/sign-up/sign-up';
import { petSchema } from '../../../register/registration-page-data/registrationSchema';
import FieldsetBlock from '../../../../components/FieldsetBlock/FieldsetBlock';
import { updatePetInfo } from '../../../../api/profile/profile';
import { getTokenFromCookie } from '../../ProfilePage';

type PetModalDialogProps = {
  user: customerResponse;
  closeModal: () => void;
  refreshCustomer: () => Promise<void>;
} & React.DialogHTMLAttributes<HTMLDialogElement>;

export default function PetModalDialog({ user, closeModal, refreshCustomer }: PetModalDialogProps) {
  const petInfo = [
    {
      title: 'Pet name',
      id: 'petName',
      type: 'text',
      required: true,
      value: user.custom.fields.petName,
    },
    {
      title: "pet's date of birth",
      id: 'petBirthDate',
      type: 'date',
      required: true,
      value: user.custom.fields.petBirthDate,
    },
  ] satisfies {
    id: Path<PetFields>;
    title: string;
    type: string;
    required?: boolean;
    value?: string;
  }[];

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scroll on unmount
      document.body.style.overflow = '';
    };
  }, []);

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleValidSubmit = async (data: PetFields) => {
    if (
      data.petBirthDate !== user.custom.fields.petBirthDate ||
      data.petName !== user.custom.fields.petName
    ) {
      try {
        setSubmitError('');
        const token = getTokenFromCookie();
        if (!token) throw new Error('Something went wrong, please try again later'); // no token

        const updatePetResult = await updatePetInfo({
          customer: user,
          token: token,
          petBirthDate: data.petBirthDate,
          petName: data.petName,
        });
        console.log('ok: ', updatePetResult);
        await refreshCustomer();
        closeModal();
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Something went wrong. Please try again.';
        console.log(error);
        setSubmitError(message);
      }
    } else closeModal();
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PetFields>({
    mode: 'all',
    resolver: zodResolver(petSchema),
  });
  return (
    <div
      className="fixed backdrop-blur-[2px] inset-0 backdrop-brightness-[.7] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md flex flex-col gap-4 items-center text-center max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-2 right-4 text-3xl text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(handleValidSubmit)(e);
          }}
        >
          <FieldsetBlock
            title={'Edit pet information'}
            content={petInfo}
            register={register}
            control={control}
            errors={errors}
          />

          <button
            disabled={!isValid || isSubmitting}
            type="submit"
            className={
              'w-fit min-w-3xs bg-jungle text-white px-4 p-2 m-4 rounded-xl text-lg font-main' +
              ' hover:cursor-pointer hover:bg-jungle/90 disabled:opacity-60 disabled:cursor-not-allowed'
            }
          >
            {isSubmitting ? 'Loading...' : 'Save Changes'}
          </button>
          <p className="text-coral text-sm w-full text-center">{submitError ?? '\u00A0'}</p>
        </form>
      </div>
    </div>
  );
}

type PetFields = z.infer<typeof petSchema>;
