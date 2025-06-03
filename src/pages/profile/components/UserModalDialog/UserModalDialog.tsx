import { useEffect, useState } from 'react';
import { z } from 'zod';
import { Path, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { customerResponse } from '../../../../api/sign-up/sign-up';
import { userSchema } from '../../../register/registration-page-data/registrationSchema';
import FieldsetBlock from '../../../../components/FieldsetBlock/FieldsetBlock';
import { getTokenFromCookie } from '../../ProfilePage';
import { updateUserInfo } from '../../../../api/profile/profile';
import { toast } from 'react-toastify';

type UserModalDialogProps = {
  user: customerResponse;
  closeModal: () => void;
  refreshCustomer: () => Promise<void>;
} & React.DialogHTMLAttributes<HTMLDialogElement>;

export default function UserModalDialog({
  user,
  closeModal,
  refreshCustomer,
}: UserModalDialogProps) {
  const userInfo = [
    { title: 'first name', id: 'firstName', type: 'text', required: false },
    { title: 'last name', id: 'lastName', type: 'text', required: false },
    {
      title: 'date of birth',
      id: 'dateOfBirth',
      type: 'date',
      required: false,
      value: user.dateOfBirth,
    },
    { title: 'email', id: 'email', type: 'text', required: false },
  ] satisfies {
    id: Path<UserFields>;
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

  const handleValidSubmit = async (data: UserFields) => {
    const hasChanges =
      data.firstName !== user.firstName ||
      data.lastName !== user.lastName ||
      data.dateOfBirth !== user.dateOfBirth ||
      data.email !== user.email;
    if (!hasChanges) {
      closeModal();
      return;
    }

    try {
      setSubmitError('');
      const updates: Partial<UserFields> = {};

      if (data.firstName !== user.firstName) updates.firstName = data.firstName;
      if (data.lastName !== user.lastName) updates.lastName = data.lastName;
      if (data.dateOfBirth !== user.dateOfBirth) updates.dateOfBirth = data.dateOfBirth;
      if (data.email !== user.email) updates.email = data.email;

      const token = getTokenFromCookie();
      if (!token) throw new Error('Something went wrong, please try again later'); // no token
      await updateUserInfo({
        customer: user,
        token: token,
        ...updates,
      });
      await refreshCustomer();
      toast.success('Information updated!', {
        position: 'top-right',
      });

      window.dispatchEvent(new CustomEvent('auth-update'));
      closeModal();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setSubmitError(message);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UserFields>({
    mode: 'all',
    resolver: zodResolver(fullUserSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      email: user.email,
    },
  });
  return (
    <div
      className="fixed backdrop-blur-[2px] inset-0 backdrop-brightness-[.7] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        className={
          'relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md flex flex-col ' +
          'gap-4 items-center text-center max-h-[90vh] overflow-y-auto  overflow-x-hidden'
        }
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-2 right-4 text-3xl text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>
        <form
          className="flex flex-col gap-2 p-2 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(handleValidSubmit)(e);
          }}
        >
          <FieldsetBlock
            title={'Edit user information'}
            content={userInfo}
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

const newLoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .superRefine((val, ctx) => {
      if (val !== val.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Email must not have leading or trailing spaces',
        });
      }
      if (!val.includes('@')) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email must contain an '@' symbol",
        });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Email must contain a domain name (e.g., example.com)',
        });
      }
    }),
});

const fullUserSchema = userSchema.merge(newLoginSchema);

type UserFields = z.infer<typeof fullUserSchema>;
