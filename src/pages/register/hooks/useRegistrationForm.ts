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
    trigger,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormFields>({
    mode: 'all',
    resolver: zodResolver(optionalSchema),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const sameAsShipping = useWatch({ name: 'sameAsShipping', control });

  const billingCountry = useWatch({ name: 'billingCountry', control });
  const billingPostalCode = useWatch({ name: 'billingPostalCode', control });

  const shippingCountry = useWatch({ name: 'shippingCountry', control });
  const shippingPostalCode = useWatch({ name: 'shippingPostalCode', control });

  useEffect(() => {
    setValue('allDefaultAddress', false, { shouldValidate: true });
    if (sameAsShipping) {
      setValue('billingDefaultAddress', false, { shouldValidate: true });
      setValue('shippingDefaultAddress', false, { shouldValidate: true });
      setValue('billingStreetName', undefined, { shouldValidate: false });
      setValue('billingCity', undefined, { shouldValidate: false });
      setValue('billingPostalCode', undefined, { shouldValidate: false });
      setValue('billingCountry', undefined, { shouldValidate: false });

      void trigger(['billingStreetName', 'billingCity', 'billingPostalCode', 'billingCountry']);
    }
  }, [sameAsShipping, setValue, trigger]);

  useEffect(() => {
    if (billingPostalCode) {
      void trigger(['billingPostalCode']);
    }
  }, [billingCountry, billingPostalCode, trigger]);

  useEffect(() => {
    if (shippingPostalCode) {
      void trigger(['shippingPostalCode']);
    }
  }, [shippingCountry, shippingPostalCode, trigger]);

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

    const shippingAddressIndex = '0';
    const billingAddressIndex = data.sameAsShipping ? '0' : '1';

    const apiPayload: SignUpData = {
      ...data,
      addresses,
      shippingAddressIds: [shippingAddressIndex],
      billingAddressIds: [billingAddressIndex],
      ...(data.shippingDefaultAddress || data.allDefaultAddress
        ? { defaultShippingAddressId: shippingAddressIndex }
        : {}),
      ...(data.billingDefaultAddress || data.allDefaultAddress
        ? { defaultBillingAddressId: billingAddressIndex }
        : {}),
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
      console.log('def: ', data.allDefaultAddress);

      console.log('ship: ', data.shippingDefaultAddress);

      console.log('bill: ', data.billingDefaultAddress);
      const setAddressesResult = await setShippingAddress({
        successUserResponse: signUpResult,
        token: token,
        allDefaultAddress: data.allDefaultAddress ?? false,
        shippingDefaultAddress: data.shippingDefaultAddress ?? false,
        billingDefaultAddress: data.billingDefaultAddress ?? false,
      });
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
    trigger,
    errors,
    isValid,
    isSubmitting,
    sameAsShipping,
    submitError,
  };
}
