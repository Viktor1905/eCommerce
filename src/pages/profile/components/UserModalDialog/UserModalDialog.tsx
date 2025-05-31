import { useEffect, useState } from 'react';
import { z } from 'zod';
import { Path, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { customerResponse } from '../../../../api/sign-up/sign-up';
import { userSchema } from '../../../register/registration-page-data/registrationSchema';
import FieldsetBlock from '../../../../components/FieldsetBlock/FieldsetBlock';
import { getTokenFromCookie } from '../../ProfilePage';

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
    { title: 'first name', id: 'firstName', type: 'text', required: false, value: user.firstName },
    { title: 'last name', id: 'lastName', type: 'text', required: false, value: user.lastName },
    {
      title: 'date of birth',
      id: 'dateOfBirth',
      type: 'date',
      required: false,
      value: user.dateOfBirth,
    },
  ] satisfies {
    id: Path<UserFields>;
    title: string;
    type: string;
    required?: boolean;
    value?: string;
  }[];

  const userLogin = [
    { title: 'email', id: 'email', type: 'text', required: false, value: user.email },
    { title: 'current password', id: 'currentPassword', type: 'password', required: false },
    { title: 'new password', id: 'newPassword', type: 'password', required: false },
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
    if (
      data.firstName !== user.firstName ||
      data.lastName !== user.lastName ||
      data.dateOfBirth !== user.dateOfBirth ||
      data.email !== user.email ||
      data.newPassword !== ''
    ) {
      try {
        setSubmitError('');
        const token = getTokenFromCookie();
        if (!token) throw new Error('Something went wrong, please try again later'); // no token
        console.log('ok:', data);
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
  } = useForm<UserFields>({
    mode: 'all',
    resolver: zodResolver(fullUserSchema),
  });
  return (
    <div
      className="fixed backdrop-blur-[2px] inset-0 backdrop-brightness-[.7] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        className={
          'relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md flex flex-col ' +
          'gap-4 items-center text-center max-h-[90vh] overflow-y-auto '
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
            title={'Edit user information'}
            content={userInfo}
            register={register}
            control={control}
            errors={errors}
          />

          <FieldsetBlock
            title={'Edit login information'}
            content={userLogin}
            register={register}
            control={control}
            errors={errors}
          />

          <button
            disabled={!isValid || isSubmitting}
            type="submit"
            onClick={closeModal}
            className="w-fit min-w-3xs bg-jungle text-white px-4 py-2 rounded-xl text-lg font-main hover:cursor-pointer hover:bg-jungle/90"
          >
            {isSubmitting ? 'Loading...' : 'Submit!'}
          </button>
          {submitError && (
            <p className="text-coral text-sm p-1 w-[300px] text-center">{submitError}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export const newLoginSchema = z.object({
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

  currentPassword: z.string().optional(),
  newPassword: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 8, 'New password must be at least 8 characters')
    .refine((val) => !val || /[A-Z]/.test(val), 'New password must include an uppercase letter')
    .refine((val) => !val || /[a-z]/.test(val), 'New password must include a lowercase letter')
    .refine((val) => !val || /[0-9]/.test(val), 'New password must include a number')
    .refine((val) => !val || !/\s/.test(val), 'New password must not contain spaces'),
});

const fullUserSchema = userSchema.merge(newLoginSchema).superRefine((data, ctx) => {
  if (data.newPassword && !data.currentPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['currentPassword'],
      message: 'Current password is required to set a new password',
    });
  }
});

type UserFields = z.infer<typeof fullUserSchema>;
