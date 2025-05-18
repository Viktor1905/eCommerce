import { useNavigate } from 'react-router-dom';
import FieldsetBlock from '../../../../components/FieldsetBlock/FieldsetBlock';
import InputElement from '../../../../components/InputElement/InputElement';
import { useRegistrationForm } from '../../hooks/useRegistrationForm';
import {
  billingAddressInfo,
  registrationFormSections,
} from '../../registration-page-data/registrationFieldGroups';
import OKModalDialog from '../../../../components/OKModalDialog/OKModalDialog';
import { useState } from 'react';
import { toast } from 'react-toastify';

const firstNameLocalstorageKey = 'firstName';

export default function RegistrationForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();
  const {
    register,
    control,
    handleValidSubmit,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    sameAsShipping,
    submitError,
  } = useRegistrationForm((firstName) => {
    setFirstName(firstName);
    setIsModalOpen(true);
  });

  function closeModal() {
    setIsModalOpen(false);
    localStorage.setItem(firstNameLocalstorageKey, firstName);
    window.dispatchEvent(new Event('userChange'));
    toast.success('Account created!', {
      position: 'top-right',
    });
    void navigate('/');
  }

  const submitBtnClass =
    'w-fit p-1 px-3 text-white min-w-3xs bg-jungle rounded-xl m-2 text-2xl capitalize font-main font-medium hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed';
  return (
    <section className="w-fit h-full flex flex-col items-center justify-center font-additional ">
      <h2 className="text-3xl p-2 text-center text-jungle font-main-bd ">Registration</h2>
      {isModalOpen && (
        <OKModalDialog
          title="Account created"
          message={
            <>
              Welcome, {firstName}!
              <br />
              Your account has been created. You will be redirected to the main page.
            </>
          }
          buttonText="Confirm"
          closeModal={closeModal}
        />
      )}
      ;
      <form
        className="flex flex-col gap-2 p-2 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(handleValidSubmit)(e);
        }}
      >
        {registrationFormSections.map(({ title, content, hint }) => (
          <FieldsetBlock
            key={title}
            title={title}
            content={content}
            register={register}
            errors={errors}
            control={control}
            hint={hint}
          />
        ))}

        <InputElement
          type="checkbox"
          title="Billing address same as shipping"
          id="sameAsShipping"
          register={register('sameAsShipping')}
          error={errors.sameAsShipping?.message}
        />

        {sameAsShipping ? (
          <InputElement
            type="checkbox"
            title="Set as default address"
            id="defaultAddress"
            register={register('defaultAddress')}
          />
        ) : (
          <FieldsetBlock
            title="billing address"
            content={billingAddressInfo}
            register={register}
            errors={errors}
          />
        )}

        <button disabled={!isValid || isSubmitting} type="submit" className={submitBtnClass}>
          {isSubmitting ? 'Loading...' : 'Submit!'}
        </button>

        {submitError && (
          <p className="text-coral text-sm p-1 w-[300px] text-center">{submitError}</p>
        )}
      </form>
    </section>
  );
}
