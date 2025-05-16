import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FormFields, optionalSchema } from '../registration-page-data/registrationSchema';
import {
  CountryCode,
  getAccessToken,
  setShippingAddress,
  SignUpData,
  signUpUser,
} from '../../../api/sign-up/api';

export function useRegistrationForm(onSuccess: (firstName: string) => void) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    trigger,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormFields>({
    mode: 'all',
    resolver: zodResolver(optionalSchema),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const sameAsShipping = useWatch({ name: 'sameAsShipping', control });

  useEffect(() => {
    setValue('defaultAddress', false, { shouldValidate: true });
    if (sameAsShipping) {
      setValue('defaultAddress', false, { shouldValidate: true });
      setValue('billingStreetName', undefined, { shouldValidate: false });
      setValue('billingCity', undefined, { shouldValidate: false });
      setValue('billingPostalCode', undefined, { shouldValidate: false });
      setValue('billingCountry', undefined, { shouldValidate: false });

      void trigger(['billingStreetName', 'billingCity', 'billingPostalCode', 'billingCountry']);
    }

    void trigger(['defaultAddress']);
  }, [sameAsShipping, setValue, trigger]);

  const handleValidSubmit = async (data: FormFields) => {
    const shippingAddress = {
      firstName: data.firstName,
      lastName: data.lastName,
      streetName: data.shippingStreetName,
      city: data.shippingCity,
      postalCode: data.shippingPostalCode,
      country: data.shippingCountry as CountryCode,
    };

    const billingAddress = data.sameAsShipping
      ? shippingAddress
      : {
          firstName: data.firstName,
          lastName: data.lastName,
          streetName: data.billingStreetName ?? '',
          city: data.billingCity ?? '',
          postalCode: data.billingPostalCode ?? '',
          country: data.billingCountry as CountryCode,
        };

    const addresses = data.sameAsShipping ? [shippingAddress] : [shippingAddress, billingAddress];

    const apiPayload: SignUpData = {
      ...data,
      addresses,
      custom: {
        type: { key: 'customerCustomFields' },
        fields: {
          petName: data.petName,
          petBirthDate: data.petBirthDate,
        },
      },
    };

    try {
      setSubmitError('');
      const token = await getAccessToken();
      const signUpResult = await signUpUser(apiPayload, token);
      console.log('Sign-up successful:', signUpResult);
      const setAddressesResult = await setShippingAddress(
        signUpResult,
        token,
        data.defaultAddress ?? false
      );
      console.log('Addresses successful:', setAddressesResult);
      onSuccess(data.firstName);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      console.log(error);
      setSubmitError(message);
    }
  };

  return {
    register,
    control,
    handleValidSubmit,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    sameAsShipping,
    submitError,
  };
}
