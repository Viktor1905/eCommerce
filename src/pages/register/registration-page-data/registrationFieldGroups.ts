import { Path } from 'react-hook-form';
import { FormFields } from './registrationSchema';

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

export const billingAddressInfo = [
  { title: 'Street', id: 'billingStreetName', type: 'text' },
  { title: 'City', id: 'billingCity', type: 'text' },
  { title: 'Postal Code', id: 'billingPostalCode', type: 'text' },
] satisfies { id: Path<FormFields>; title: string; type: string }[];

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
