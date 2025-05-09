import { FieldKey } from './registrationSchema';

export const registrationPageData = [
  // user Info
  {
    title: 'user information',
    content: [
      {
        title: 'first name',
        placeholder: 'enter your first name',
        id: 'user-first-name',
        type: 'text',
      },
      {
        title: 'last name',
        placeholder: 'enter your last name',
        id: 'user-last-name',
        type: 'text',
      },
      {
        title: 'date of birth',
        placeholder: '',
        id: 'user-date-of-birth',
        type: 'date',
      },
    ] satisfies {
      id: FieldKey;
      title: string;
      placeholder: string;
      type: string;
    }[],
  },
  // user Login
  {
    title: 'login information',
    content: [
      {
        title: 'email',
        placeholder: 'example@gmail.com',
        id: 'user-email',
        type: 'email',
      },
      {
        title: 'password',
        placeholder: 'enter your password',
        id: 'user-password',
        type: 'password',
      },
    ] satisfies {
      id: FieldKey;
      title: string;
      placeholder: string;
      type: string;
    }[],
  },
  // pet Info
  {
    title: 'pet information',
    hint: "Fill the pet info to get a special discount for your pet's birthday!",
    content: [
      {
        title: 'Pet name',
        placeholder: 'enter pet name',
        id: 'pet-name',
        type: 'text',
      },
      {
        title: "pet's date of birth",
        placeholder: '',
        id: 'pet-date-of-birth',
        type: 'date',
      },
    ] satisfies {
      id: FieldKey;
      title: string;
      placeholder: string;
      type: string;
    }[],
  },
  // user Address
  {
    title: 'user address',
    content: [
      {
        title: 'street',
        placeholder: 'enter street address',
        id: 'user-street',
        type: 'text',
      },
      {
        title: 'city',
        placeholder: 'enter city name',
        id: 'user-city',
        type: 'text',
      },
      {
        title: 'postal code',
        placeholder: 'enter postal code',
        id: 'user-postal-code',
        type: 'text',
      },
      {
        title: 'country',
        placeholder: '',
        id: 'country',
        type: 'select',
      },
    ] satisfies {
      id: FieldKey;
      title: string;
      placeholder: string;
      type: string;
    }[],
  },
];
