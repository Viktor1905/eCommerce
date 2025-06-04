import { useEffect, useState } from 'react';
import { CountryCode, customerResponse, userAddress } from '../../../api/sign-up/sign-up';
import { z } from 'zod';
import {
  cityRegex,
  CountryCodeSchema,
  postalCodeRegex,
} from '../../register/registration-page-data/registrationSchema';
import { Path, useForm } from 'react-hook-form';
import FieldsetBlock from '../../../components/FieldsetBlock/FieldsetBlock';
import { zodResolver } from '@hookform/resolvers/zod';
import { getTokenFromCookie } from '../../profile/ProfilePage';
import { addAddress, changeAddress } from '../../../api/profile/profile';
import PostalCodes from 'postal-codes-js';
import InputElement from '../../../components/InputElement/InputElement';
import OKModalDialog from '../../../components/OKModalDialog/OKModalDialog';
import { toast } from 'react-toastify';

type AddressModalDialogProps = {
  address?: userAddress;
  customer: customerResponse;
  closeModal: () => void;
  refreshCustomer: () => Promise<void>;
} & React.DialogHTMLAttributes<HTMLDialogElement>;

const addressSchema = z
  .object({
    streetName: z.string().min(1, 'Street name must be at least 1 character'),
    city: z
      .string()
      .min(1, 'City name must be at least 1 character')
      .regex(cityRegex, 'Please enter city in valid format (ex. Riga, New York, Rostov-na-Donu'),
    postalCode: z
      .string()
      .regex(postalCodeRegex, 'Please enter postal code in valid format (ex. 123-456, ME12 123)'),
    country: CountryCodeSchema,
    isBilling: z.boolean().optional(),
    isShipping: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.country) return;
    const result = PostalCodes.validate(data.country, data.postalCode);
    if (result !== true) {
      ctx.addIssue({
        path: ['postalCode'],
        message: 'Invalid postal code for selected country',
        code: z.ZodIssueCode.custom,
      });
    }
  });

type AddressFields = z.infer<typeof addressSchema>;

export default function AddressModalDialog({
  address,
  customer,
  closeModal,
  refreshCustomer,
}: AddressModalDialogProps) {
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
    },
    { id: 'city', title: 'City', type: 'text', required: true },
    {
      id: 'country',
      title: 'Country',
      type: 'country',
      required: true,
    },
    {
      id: 'postalCode',
      title: 'Postal Code',
      type: 'text',
      required: true,
    },
  ] satisfies {
    id: Path<AddressFields>;
    title: string;
    type: string;
    required?: boolean;
    value?: string;
  }[];

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleAddressChange = async (data: AddressFields) => {
    setSubmitError('');
    if (!data.isBilling && !data.isShipping) {
      setIsModalOpen(true);
      return;
    }
    if (!address) throw new Error('Something went wrong, please try again later');
    const newAddress = {
      id: address.id,
      key: new Date().toString(),
      firstName: customer.firstName,
      lastName: customer.lastName,
      streetName: data.streetName,
      city: data.city,
      postalCode: data.postalCode,
      country: data.country as CountryCode,
    };

    try {
      const token = getTokenFromCookie();
      if (!token) throw new Error('Something went wrong, please try again later'); // no token
      await changeAddress({
        customer: customer,
        token: token,
        address: newAddress,
        addressID: address.id,
        isShipping: data.isShipping ?? false,
        isBilling: data.isBilling ?? false,
      });
      await refreshCustomer();
      toast.success('Address updated!', {
        position: 'top-right',
      });
      closeModal();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setSubmitError(message);
    }
  };

  const handleNewAddress = async (data: AddressFields) => {
    setSubmitError('');
    if (!data.isBilling && !data.isShipping) {
      setIsModalOpen(true);
      return;
    }
    if (address) throw new Error('Something went wrong, please try again later');
    const newAddress = {
      id: '',
      key: new Date().toString(),
      firstName: customer.firstName,
      lastName: customer.lastName,
      streetName: data.streetName,
      city: data.city,
      postalCode: data.postalCode,
      country: data.country as CountryCode,
    };

    try {
      const token = getTokenFromCookie();
      if (!token) throw new Error('Something went wrong, please try again later'); // no token
      await addAddress({
        customer: customer,
        token: token,
        address: newAddress,
        isShipping: data.isShipping ?? false,
        isBilling: data.isBilling ?? false,
      });
      await refreshCustomer();
      toast.success('Address added!', {
        position: 'top-right',
      });
      closeModal();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setSubmitError(message);
    }
  };

  const onValidSubmit = async (data: AddressFields) => {
    if (address) {
      await handleAddressChange(data);
    } else {
      await handleNewAddress(data);
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
    defaultValues: {
      streetName: address?.streetName,
      city: address?.city,
      postalCode: address?.postalCode,
      country: address ? (address.country as CountryCode) : '',
      isBilling: customer.billingAddressIds.find((id) => id === address?.id) !== undefined,
      isShipping: customer.shippingAddressIds.find((id) => id === address?.id) !== undefined,
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  function closeOkModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scroll on unmount
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <div
      className="fixed backdrop-blur-[2px] inset-0 backdrop-brightness-[.7] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md flex flex-col gap-4 items-center text-center overflow-x-hidden max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-2 right-4 text-3xl text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>
        {isModalOpen && (
          <OKModalDialog
            title="Insufficient input"
            message={<>Please set the address as Billing or/and Shipping</>}
            buttonText="Confirm"
            closeModal={closeOkModal}
          />
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(onValidSubmit)(e);
          }}
        >
          <FieldsetBlock
            title={address ? 'Edit Address' : 'New Address'}
            content={addressContent}
            register={register}
            control={control}
            errors={errors}
          />
          <InputElement
            type="checkbox"
            title="Use as Shipping Address"
            id="isShipping"
            register={register('isShipping')}
            error={errors.isShipping?.message}
          />
          <InputElement
            type="checkbox"
            title="Use as Billing Address"
            id="isBilling"
            register={register('isBilling')}
            error={errors.isBilling?.message}
          />
          <button
            disabled={!isValid || isSubmitting}
            type="submit"
            className={
              'w-fit min-w-3xs bg-jungle text-white px-4 p-2 m-4 rounded-xl text-lg font-main' +
              ' hover:cursor-pointer hover:bg-jungle/90 disabled:opacity-60 disabled:cursor-not-allowed'
            }
          >
            {isSubmitting ? 'Loading...' : address ? 'Submit changes' : 'Save new address'}
          </button>
          <p className="text-coral text-sm w-full text-center">{submitError ?? '\u00A0'}</p>{' '}
        </form>
      </div>
    </div>
  );
}
