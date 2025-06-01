import { useEffect, useState } from 'react';
import { CountryCode, customerResponse, userAddress } from '../../../api/sign-up/sign-up';
import { z } from 'zod';
import {
  CountryCodeSchema,
  postalCodeRegex,
} from '../../register/registration-page-data/registrationSchema';
import { useForm } from 'react-hook-form';
import FieldsetBlock, { FieldDescriptor } from '../../../components/FieldsetBlock/FieldsetBlock';
import { zodResolver } from '@hookform/resolvers/zod';

type AddressModalDialogProps = {
  address?: userAddress;
  customer: customerResponse;
  closeModal: () => void;
} & React.DialogHTMLAttributes<HTMLDialogElement>;

const addressSchema = z.object({
  streetName: z.string().min(1, 'Street name must be at least 1 character'),
  city: z.string().min(1, 'City name must be at least 1 character'),
  postalCode: z
    .string()
    .regex(postalCodeRegex, 'Please enter postal code in valid format (ex. 123-456, ME12 123)'),
  country: CountryCodeSchema,
});

type AddressFields = z.infer<typeof addressSchema>;

export default function AddressModalDialog({
  address,
  customer,
  closeModal,
}: AddressModalDialogProps) {
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

  const addressContent = [
    {
      id: 'streetName',
      title: 'Street',
      type: 'text',
      required: true,
      value: address?.streetName,
    },
    { id: 'city', title: 'City', type: 'text', required: true, value: address?.city },
    {
      id: 'postalCode',
      title: 'Postal Code',
      type: 'text',
      required: true,
      value: address?.postalCode,
    },
    {
      id: 'country',
      title: 'Country',
      type: 'select',
      required: true,
      value: address?.country,
    },
  ] satisfies FieldDescriptor<keyof AddressFields, AddressFields>[];

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleValidSubmit = (data: AddressFields) => {
    const newAddress = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      streetName: data.streetName,
      city: data.city,
      postalCode: data.postalCode,
      country: data.country as CountryCode,
    };

    try {
      console.log('Addresses successful:', newAddress);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      console.log(error);
      setSubmitError(message);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<AddressFields>({
    mode: 'all',
    resolver: zodResolver(addressSchema),
  });
  return (
    <div
      className="fixed backdrop-blur-[2px] inset-0 backdrop-brightness-[.7] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md flex flex-col gap-4 items-center text-center">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-2 right-4 text-3xl text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(handleValidSubmit)(e);
          }}
        >
          <FieldsetBlock
            title={address ? 'Edit Address' : 'New Address'}
            content={addressContent}
            register={register}
            control={control}
            errors={errors}
          />
          <button
            disabled={!isValid || isSubmitting}
            type="submit"
            onClick={closeModal}
            className="w-fit min-w-3xs bg-jungle text-white px-4 p-2 m-4  rounded-xl text-lg font-main hover:cursor-pointer hover:bg-jungle/90"
          >
            {isSubmitting ? 'Loading...' : address ? 'Submit changes' : 'Save new address'}
          </button>
          <p className="text-coral text-sm w-full text-center">{submitError ?? '\u00A0'}</p>{' '}
        </form>
      </div>
    </div>
  );
}
