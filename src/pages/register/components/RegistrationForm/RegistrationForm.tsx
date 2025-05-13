import { Path, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  optionalSchema,
  FormFields,
} from '../../registration-page-data/registrationSchema';
import FieldsetBlock from '../../../../components/FieldsetBlock/FieldsetBlock';
import InputElement from '../../../../components/InputElement/InputElement';
import { useState } from 'react';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    mode: 'onChange',
    resolver: zodResolver(optionalSchema),
  });

  const [isCheckedSameAsShipping, setIsCheckedSameAsShipping] = useState(false);
  const handleSameAsShippingCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsCheckedSameAsShipping(event.target.checked);
    setIsCheckedDefaultAddress(false);
  };

  const [isCheckedDefaultAddress, setIsCheckedDefaultAddress] = useState(false);
  const handleDefaultAddressCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsCheckedDefaultAddress(event.target.checked);
  };

  const handleValidSubmit = (data: FormFields) => {
    console.log(data);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void handleSubmit(handleValidSubmit)(event);
  };

  const userInfo = [
    { title: 'first name', id: 'userFirstName', type: 'text' },
    { title: 'last name', id: 'userLastName', type: 'text' },
    { title: 'date of birth', id: 'userBirthDate', type: 'date' },
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
    { title: 'Street', id: 'shippingStreet', type: 'text' },
    { title: 'City', id: 'shippingCity', type: 'text' },
    { title: 'Postal Code', id: 'shippingZip', type: 'text' },
  ] satisfies { id: Path<FormFields>; title: string; type: string }[];

  const billingAddressInfo = [
    { title: 'Street', id: 'billingStreet', type: 'text' },
    { title: 'City', id: 'billingCity', type: 'text' },
    { title: 'Postal Code', id: 'billingZip', type: 'text' },
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
          checked={isCheckedSameAsShipping}
          onChange={handleSameAsShippingCheckboxChange}
        />

        {isCheckedSameAsShipping && (
          <InputElement
            type="checkbox"
            title="Set as default address"
            id="defaultAddress"
            register={register('defaultAddress')}
            checked={isCheckedDefaultAddress}
            onChange={handleDefaultAddressCheckboxChange}
          />
        )}

        {!isCheckedSameAsShipping && (
          <FieldsetBlock
            title="billing address"
            content={billingAddressInfo}
            register={register}
            errors={errors}
          />
        )}

        <button
          disabled={isSubmitting}
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
