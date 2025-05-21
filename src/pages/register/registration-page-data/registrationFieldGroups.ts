import { Path } from 'react-hook-form';
import { FormFields } from './registrationSchema';

const userInfo = [
  { title: 'first name', id: 'firstName', type: 'text', required: true },
  { title: 'last name', id: 'lastName', type: 'text', required: true },
  { title: 'date of birth', id: 'dateOfBirth', type: 'date', required: true },
] satisfies { id: Path<FormFields>; title: string; type: string; required?: boolean }[];

const userLogin = [
  { title: 'email', id: 'email', type: 'text', required: true },
  { title: 'password', id: 'password', type: 'password', required: true },
] satisfies { id: Path<FormFields>; title: string; type: string; required?: boolean }[];

const petInfo = [
  { title: 'Pet name', id: 'petName', type: 'text', required: true },
  { title: "pet's date of birth", id: 'petBirthDate', type: 'date', required: true },
] satisfies { id: Path<FormFields>; title: string; type: string; required?: boolean }[];

const shippingAddressInfo = [
  { title: 'Street', id: 'shippingStreetName', type: 'text', required: true },
  { title: 'City', id: 'shippingCity', type: 'text', required: true },
  { title: 'Postal Code', id: 'shippingPostalCode', type: 'text', required: true },
] satisfies { id: Path<FormFields>; title: string; type: string; required?: boolean }[];

export const billingAddressInfo = [
  { title: 'Street', id: 'billingStreetName', type: 'text', required: true },
  { title: 'City', id: 'billingCity', type: 'text', required: true },
  { title: 'Postal Code', id: 'billingPostalCode', type: 'text', required: true },
] satisfies { id: Path<FormFields>; title: string; type: string; required?: boolean }[];

export const registrationFormSections = [
  { title: 'user information', content: userInfo },
  { title: 'login information', content: userLogin },
  {
    title: 'pet information',
    content: petInfo,
    hint: "Fill the pet info to get a discount for your pet's birthday!",
  },
  { title: 'shipping address', content: shippingAddressInfo },
];
