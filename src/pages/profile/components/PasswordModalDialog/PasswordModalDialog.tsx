import { useEffect, useState } from 'react';
import { z } from 'zod';
import { Path, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { customerResponse } from '../../../../api/sign-up/sign-up';
import FieldsetBlock from '../../../../components/FieldsetBlock/FieldsetBlock';
import { getTokenFromCookie } from '../../ProfilePage';
import { changePassword } from '../../../../api/profile/profile';
import { toast } from 'react-toastify';

type PasswordModalDialogProps = {
  user: customerResponse;
  closeModal: () => void;
  refreshCustomer: () => Promise<void>;
} & React.DialogHTMLAttributes<HTMLDialogElement>;

export default function PasswordModalDialog({
  user,
  closeModal,
  refreshCustomer,
}: PasswordModalDialogProps) {
  const userPassword = [
    { title: 'current password', id: 'currentPassword', type: 'password', required: true },
    { title: 'new password', id: 'newPassword', type: 'password', required: true },
    { title: 'confirm new password', id: 'confirmPassword', type: 'password', required: true },
  ] satisfies {
    id: Path<PasswordFields>;
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

  const handleValidSubmit = async (data: PasswordFields) => {
    const hasChanges = data.newPassword !== '' && data.currentPassword !== '';
    if (!hasChanges) {
      closeModal();
      return;
    }

    try {
      setSubmitError('');

      const token = getTokenFromCookie();
      if (!token) throw new Error('Something went wrong, please try again later'); // no token
      await changePassword({
        customer: user,
        token: token,
        newPassword: data.newPassword,
        currentPassword: data.currentPassword,
      });
      await refreshCustomer();
      toast.success('Password changed!', {
        position: 'top-right',
      });
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
  } = useForm<PasswordFields>({
    mode: 'all',
    resolver: zodResolver(newPasswordSchema),
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
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(handleValidSubmit)(e);
          }}
        >
          <FieldsetBlock
            title={'Change password'}
            content={userPassword}
            register={register}
            control={control}
            errors={errors}
            hint={'please enter your current password'}
          />
          <button
            disabled={!isValid || isSubmitting}
            type="submit"
            className={
              'w-fit min-w-3xs bg-jungle text-white px-4 p-2 m-4 rounded-xl text-lg font-main' +
              ' hover:cursor-pointer hover:bg-jungle/90 disabled:opacity-60 disabled:cursor-not-allowed'
            }
          >
            {isSubmitting ? 'Loading...' : 'Change password'}
          </button>
          <p className="text-coral text-sm w-full text-center">{submitError ?? '\u00A0'}</p>
        </form>
      </div>
    </div>
  );
}

export const newPasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .refine((val) => !val || !/\s/.test(val), 'Please remove all spaces'),
    newPassword: z
      .string()
      .refine((val) => !val || val.length >= 8, 'New password must be at least 8 characters')
      .refine((val) => !val || /[A-Z]/.test(val), 'New password must include an uppercase letter')
      .refine((val) => !val || /[a-z]/.test(val), 'New password must include a lowercase letter')
      .refine((val) => !val || /[0-9]/.test(val), 'New password must include a number')
      .refine((val) => !val || !/\s/.test(val), 'New password must not contain spaces'),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword && !data.currentPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['currentPassword'],
        message: 'Current password is required to set a new password',
      });
    }
    if (data.newPassword && data.confirmPassword !== data.newPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'Passwords do not match',
      });
    }
  });

type PasswordFields = z.infer<typeof newPasswordSchema>;
