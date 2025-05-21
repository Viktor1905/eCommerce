import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import RegistrationForm from '../pages/register/components/RegistrationForm/RegistrationForm';
import { CountryCodeSchema } from '../pages/register/registration-page-data/registrationSchema';
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

export const getLabeledInput = (label: string) => {
  const regex = new RegExp(`\\*\\s*${label}`, 'i');
  return screen.getByLabelText(regex);
};

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('RegistrationForm', () => {
  //form renders
  it('renders registration form and heading', () => {
    render(<RegistrationForm />);
    expect(screen.getByRole('heading', { name: /registration/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
  //submit disabled
  it('disables submit button if form is invalid', () => {
    render(<RegistrationForm />);
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    expect(submitBtn).toBeDisabled();
  });
  // hides billing address
  it('hides billing address inputs if "same as shipping" is checked', async () => {
    render(<RegistrationForm />);
    const initialMatches = await screen.findAllByText(/billing address/i);
    expect(initialMatches).toHaveLength(3);
    const billingCheckbox = screen.getByLabelText(/billing address same as shipping/i);
    fireEvent.click(billingCheckbox);
    const remainingMatches = screen.queryAllByText(/billing address/i);
    expect(remainingMatches).toHaveLength(1);
  });
  //set as default appears
  it('shows default address checkbox if "same as shipping" is checked', async () => {
    render(<RegistrationForm />);
    const billingCheckbox = screen.getByLabelText(/billing address same as shipping/i);
    fireEvent.click(billingCheckbox);
    expect(
      await screen.findByLabelText(/Set as default billing and shipping address/i)
    ).toBeInTheDocument();
  });
  //fist name
  it('Error: first name at least 1 character', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('first name');
    fireEvent.focus(input);
    fireEvent.blur(input);
    await screen.findByText('First name must be at least 1 character');
  });
  it('Error: first name no leading or trailing spaces', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('first name');
    fireEvent.change(input, { target: { value: '123' } });
    await screen.findByText(
      'First name can only contain letters and spaces, without leading or trailing spaces'
    );
  });
  //last name
  it('Error: last name at least 1 character', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('last name');
    fireEvent.focus(input);
    fireEvent.blur(input);
    await screen.findByText('Last name must be at least 1 character');
  });
  it('Error: last name at least 1 character', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('last name');
    fireEvent.change(input, { target: { value: 'aaa  ' } });
    await screen.findByText(
      'Last name can only contain letters and spaces, without leading or trailing spaces'
    );
  });
  //age
  it('Error: age above 13', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = screen.getAllByLabelText(/date of birth/i)[0];
    fireEvent.change(input, { target: { value: '2025-01-01' } });
    await screen.findByText('You must be at least 13 years old');
  });
  // street
  it('Error: street at least 1 character', async (): Promise<void> => {
    render(<RegistrationForm />);
    const streetInput = screen.getAllByLabelText(/street/i)[0];
    fireEvent.focus(streetInput);
    fireEvent.blur(streetInput);
    await screen.findByText('Street name must be at least 1 character');
  });
  //city
  it('Error: city is at least 1 character', async (): Promise<void> => {
    render(<RegistrationForm />);
    const cityInput = screen.getAllByLabelText(/city/i)[0];
    fireEvent.focus(cityInput);
    fireEvent.blur(cityInput);
    await screen.findByText('City name must be at least 1 character');
  });
  //postal code
  it('Error: postal code validation for selected country', async (): Promise<void> => {
    render(<RegistrationForm />);
    const validCode = 'US';
    const countrySelect = screen.getAllByLabelText(/country/i)[0];
    fireEvent.change(countrySelect, { target: { value: validCode } });
    const input = screen.getAllByLabelText(/postal code/i)[0];
    fireEvent.change(input, { target: { value: 'a' } });
    await screen.findByText('Invalid postal code for selected country');
  });
  it('Error: postal code validation for spaces', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = screen.getAllByLabelText(/postal code/i)[0];
    fireEvent.change(input, { target: { value: ' ' } });
    await screen.findByText('Please enter postal code in valid format (ex. 123-456, ME12 123)');
  });
  //country
  it('accepts a valid country code', () => {
    const validCode = 'US';
    expect(() => CountryCodeSchema.parse(validCode)).not.toThrow();
  });
  it('rejects an invalid country code', () => {
    const invalidCode = 'XX';
    expect(() => CountryCodeSchema.parse(invalidCode)).toThrowError('Please select a country');
  });
  //email
  it('Error: email not contain "@"', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('email');
    fireEvent.change(input, { target: { value: 'dfda' } });
    await screen.findByText("Email must contain an '@' symbol");
  });

  it('Error: Email not contain a domain name (e.g., example.com)', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('email');
    fireEvent.change(input, { target: { value: 'dfda@' } });
    await screen.findByText('Email must contain a domain name (e.g., example.com)');
  });

  it('Error: Email have leading or trailing spaces', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('email');
    fireEvent.change(input, { target: { value: 'dfda@dfo.com ' } });
    await screen.findByText('Email must not have leading or trailing spaces');
    fireEvent.change(input, { target: { value: ' dfda@dfo.com' } });
    await screen.findByText('Email must not have leading or trailing spaces');
  });
  //password
  it('Error: Password not contains at least one digit', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('password');
    fireEvent.change(input, { target: { value: 'dfda' } });
    await screen.findByText('Password must be at least 8 characters');
  });
  it('Error: Password must contain at least one uppercase letter', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('password');
    fireEvent.change(input, { target: { value: 'dfdadfda' } });
    await screen.findByText('Password must include an uppercase letter');
  });
  it('Error: Password must contain at least one lowercase letter', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('password');
    fireEvent.change(input, { target: { value: 'ASADADAD' } });
    await screen.findByText('Password must include a lowercase letter');
  });
  it('Error: Password must be longer than 8 characters', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('password');
    fireEvent.change(input, { target: { value: 'ASADADADa' } });
    await screen.findByText('Password must include a number');
  });
  it('Error: Password must be longer than 8 characters', async (): Promise<void> => {
    render(<RegistrationForm />);
    const input = getLabeledInput('password');
    fireEvent.change(input, { target: { value: 'ASADADADa7 ' } });
    await screen.findByText('Password must not contain spaces');
  });

  it('toggles submit button after filling form fields with valid data', async () => {
    render(<RegistrationForm />);
    const firstNameInput = getLabeledInput('first name');
    const lastNameInput = getLabeledInput('last name');
    const emailInput = getLabeledInput('email');
    const passwordInput = getLabeledInput('password');
    const petNameInput = getLabeledInput('pet name');
    const dateOfBirthInput = screen.getAllByLabelText(/date of birth/i)[0];
    const petDateOfBirthInput = getLabeledInput("pet's date of birth");
    const streetInput = screen.getAllByLabelText(/street/i)[0];
    const cityInput = screen.getAllByLabelText(/city/i)[0];
    const zipInput = screen.getAllByLabelText(/postal code/i)[0];
    const countryInput = screen.getAllByLabelText(/country/i)[0];
    const sameAsShipping = screen.getByLabelText(/billing address same as shipping/i);

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Password1' } });
    fireEvent.change(petNameInput, { target: { value: 'Fluffy' } });
    fireEvent.change(dateOfBirthInput, { target: { value: '2000-01-01' } });
    fireEvent.change(petDateOfBirthInput, { target: { value: '2020-01-01' } });
    fireEvent.change(streetInput, { target: { value: '123 Main Street' } });
    fireEvent.change(cityInput, { target: { value: 'Anytown' } });
    fireEvent.change(zipInput, { target: { value: '12345' } });
    fireEvent.change(countryInput, { target: { value: 'US' } });
    fireEvent.click(sameAsShipping);

    const submitBtn = screen.getByRole('button', { name: /submit/i });
    await waitFor(() => {
      expect(submitBtn).toBeEnabled();
    });
  });
});
