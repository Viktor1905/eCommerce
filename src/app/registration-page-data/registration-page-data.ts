export const registrationPageData = {
  userInfo: {
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
    ],
  },
  userLogin: {
    title: 'user information',
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
    ],
  },
  petInfo: {
    title: 'pet information',
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
        id: 'pets-date-of-birth',
        type: 'date',
      },
    ],
  },
  userAddress: {
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
        pattern: '[0-9]*',
      },
    ],
  },
};
