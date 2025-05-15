import { Path, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  optionalSchema,
  FormFields,
} from '../../registration-page-data/registrationSchema';
import FieldsetBlock from '../../../../components/FieldsetBlock/FieldsetBlock';
import InputElement from '../../../../components/InputElement/InputElement';
import { useEffect } from 'react';
import {
  CountryCode,
  getAccessToken,
  SignUpData,
  signUpUser,
} from '../../../../api/api';
import { COUNTRIES_DATA } from '../../../../components/CountrySelector/countries-data/countries-data';

export default function RegistrationForm() {
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

  const sameAsShipping = useWatch({ name: 'sameAsShipping', control });

  useEffect(() => {
    if (sameAsShipping) {
      setValue('defaultAddress', false, {
        shouldValidate: true,
      });
      setValue('billingStreetName', undefined, {
        shouldValidate: false,
      });
      setValue('billingCity', undefined, {
        shouldValidate: false,
      });
      setValue('billingPostalCode', undefined, {
        shouldValidate: false,
      });
      setValue('billingCountry', undefined, {
        shouldValidate: false,
      });
      void trigger([
        'sameAsShipping',
        'billingStreetName',
        'billingCity',
        'billingPostalCode',
        'billingCountry',
      ]);
    } else {
      setValue('defaultAddress', false, {
        shouldValidate: true,
      });
    }
    void trigger(['sameAsShipping', 'defaultAddress']);
  }, [sameAsShipping, setValue, trigger]);

  const handleValidSubmit = async (data: FormFields) => {
    const validCountryCodes = new Set(COUNTRIES_DATA.map((c) => c.code));

    const isValid = (code: string): code is CountryCode =>
      validCountryCodes.has(code as CountryCode);

    if (!isValid(data.shippingCountry)) {
      console.error('Invalid shipping country:', data.shippingCountry);
      return;
    }

    if (data.billingCountry && !isValid(data.billingCountry)) {
      console.error('Invalid billing country:', data.billingCountry);
      return;
    }

    const shippingAddress = {
      streetName: data.shippingStreetName,
      city: data.shippingCity,
      postalCode: data.shippingPostalCode,
      country: data.shippingCountry,
    };

    const billingAddress = data.sameAsShipping
      ? shippingAddress
      : {
          streetName: data.billingStreetName ?? '',
          city: data.billingCity ?? '',
          postalCode: data.billingPostalCode ?? '',
          country: (data.billingCountry ?? '') as CountryCode,
        };

    const addresses = data.sameAsShipping
      ? [shippingAddress]
      : [shippingAddress, billingAddress];

    const apiPayload: SignUpData = {
      ...data,
      addresses,
      shippingAddressIds: [0],
      billingAddressIds: data.sameAsShipping ? [0] : [1],
      custom: {
        type: { key: 'customerCustomFields' },
        fields: { petName: data.petName, petBirthDate: data.petBirthDate },
      },
    };

    try {
      const token = await getAccessToken();
      const result = await signUpUser(apiPayload, token);
      console.log('Sign-up successful:', result);
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void handleSubmit(handleValidSubmit)(event);
  };

  const userInfo = [
    { title: 'first name', id: 'firstName', type: 'text' },
    { title: 'last name', id: 'lastName', type: 'text' },
    { title: 'date of birth', id: 'dateOfBirth', type: 'date' },
  ] satisfies { id: Path<FormFields>; title: string; type: string }[];

  const userLogin = [
    { title: 'email', id: 'email', type: 'email' },
    { title: 'password', id: 'password', type: 'password' },
  ] satisfies { id: Path<FormFields>; title: string; type: string }[];

  const petInfo = [
    { title: 'Pet name', id: 'petName', type: 'text' },
    { title: "pet's date of birth", id: 'petBirthDate', type: 'date' },
  ] satisfies { id: Path<FormFields>; title: string; type: string }[];

  const shippingAddressInfo = [
    { title: 'Street', id: 'shippingStreetName', type: 'text' },
    { title: 'City', id: 'shippingCity', type: 'text' },
    { title: 'Postal Code', id: 'shippingPostalCode', type: 'text' },
  ] satisfies { id: Path<FormFields>; title: string; type: string }[];

  const billingAddressInfo = [
    { title: 'Street', id: 'billingStreetName', type: 'text' },
    { title: 'City', id: 'billingCity', type: 'text' },
    { title: 'Postal Code', id: 'billingPostalCode', type: 'text' },
  ] satisfies { id: Path<FormFields>; title: string; type: string }[];

  return (
    <section className="bg-white flex flex-col items-center justify-center font-additional ">
      <h2 className="text-3xl p-2 text-center text-jungle font-main-bd ">
        Registration
      </h2>
      <form
        className="flex flex-col gap-2 p-2 items-center"
        onSubmit={onSubmit}
      >
        <FieldsetBlock
          title="user information"
          content={userInfo}
          register={register}
          errors={errors}
          control={control}
        />

        <FieldsetBlock
          title="login information"
          content={userLogin}
          register={register}
          errors={errors}
        />

        <FieldsetBlock
          title="pet information"
          content={petInfo}
          hint={"Fill the pet info to get a discount for your pet's birthday!"}
          register={register}
          errors={errors}
          control={control}
        />

        <FieldsetBlock
          title="shipping address"
          content={shippingAddressInfo}
          register={register}
          errors={errors}
        />

        <InputElement
          type="checkbox"
          title="Billing address same as shipping"
          id="sameAsShipping"
          register={register('sameAsShipping')}
          error={errors.sameAsShipping?.message}
        />

        {sameAsShipping && (
          <InputElement
            type="checkbox"
            title="Set as default address"
            id="defaultAddress"
            register={register('defaultAddress')}
          />
        )}

        {!sameAsShipping && (
          <FieldsetBlock
            title="billing address"
            content={billingAddressInfo}
            register={register}
            errors={errors}
          />
        )}

        <button
          disabled={!isValid || isSubmitting}
          type="submit"
          className={
            'w-fit p-1 pl-3 pr-3 text-white bg-jungle rounded-xl m-2 text-2xl capitalize font-main font-medium ' +
            'disabled:opacity-60'
          }
        >
          {isSubmitting ? 'Loading...' : 'Submit!'}
        </button>
      </form>
    </section>
  );
}

/*
  export const handleValidSubmit = async (data: FormFields) => {
    console.log(data);
    async function testSignUp() {
      try {
        const token = await getAccessToken();
        const now = Date.now();
        const mockData: SignUpData = {
          email: `user${now.toString()}@test.com`, // Unique to avoid conflicts
          firstName: 'John',
          lastName: 'Doe',
          password: 'StrongPass123!',
          dateOfBirth: '1990-01-01',
          custom: {
            type: {
              key: 'customerCustomFields',
            },
            fields: {
              petName: 'Kitty',
              petBirthDate: '2025-05-14',
            },
          },
          addresses: [
            {
              streetName: '123 Main St',
              city: 'Testville',
              postalCode: '12345',
              country: 'DE',
            },
          ],
          shippingAddressIds: [0],
          billingAddressIds: [0],
        };

        const result = await signUpUser(mockData, token);
        console.log('✅ Sign-up successful:', result);
      } catch (error) {
        console.error('❌ Sign-up failed:', error);
      }
    }

    await testSignUp();
  };
*/
