import { fireEvent, render, screen } from '@testing-library/react';
import { LoginInput } from '../pages/authorization/components/Login-input.tsx';
import type { LoginInputProps } from '../pages/authorization/components/Login-input.tsx';
import { UseFormRegisterReturn } from 'react-hook-form';
import { LoginForm } from '../pages/authorization/components/Login-form.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

vi.mock('./assets/eye.svg', (): string => 'eye-icon');
vi.mock('./assets/eye-off.svg', (): string => 'eye-off-icon');

describe('Login Email input', (): void => {
  const mockRegister: UseFormRegisterReturn = {
    name: 'test-input',
    onBlur: vi.fn(),
    onChange: vi.fn(),
    ref: vi.fn(),
  };

  const baseProps: LoginInputProps = {
    register: mockRegister,
    type: 'email',
    label: 'Test Label',
    placeholder: 'Test placeholder',
  };
  it('renders email input correctly', (): void => {
    render(<LoginInput {...baseProps} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test placeholder')).toHaveAttribute('type', 'email');
  });
  it('Error: email not contain "@"', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>{' '}
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText('Enter you email');
    fireEvent.change(input, { target: { value: 'dfda' } });
    await screen.findByText("Email must contain an '@' symbol");
  });
  it('Error: Email not contain a domain name (e.g., example.com)', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>{' '}
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText('Enter you email');
    fireEvent.change(input, { target: { value: 'dfda@' } });
    await screen.findByText('Email must contain a domain name (e.g., example.com)');
  });
  it('Error: Email have leading or trailing spaces', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>{' '}
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText('Enter you email');
    fireEvent.change(input, { target: { value: 'dfda@dfo.com ' } });
    await screen.findByText('Email must not have leading or trailing spaces');
    fireEvent.change(input, { target: { value: ' dfda@dfo.com' } });
    await screen.findByText('Email must not have leading or trailing spaces');
  });
  it('renders password input with toggle button', (): void => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginInput {...baseProps} type="password" label="password" placeholder="password" />
            }
          />
        </Routes>{' '}
      </BrowserRouter>
    );
    const input: HTMLElement = screen.getByPlaceholderText('password');
    expect(input).toHaveAttribute('type', 'password');
    const button: HTMLElement = screen.getByText(/🙈|🙉/);
    expect(button).toBeInTheDocument();
  });
  it('Error: Password not contains at least one digit', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>{' '}
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText('Enter you password');
    fireEvent.change(input, { target: { value: 'dfda' } });
    await screen.findByText('Password must contain at least one digit');
  });
  it('Error: Password must contain at least one uppercase letter', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>{' '}
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText('Enter you password');
    fireEvent.change(input, { target: { value: '1dfda' } });
    await screen.findByText('Password must contain at least one uppercase letter');
  });
  it('Error: Password must contain at least one lowercase letter', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>{' '}
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText('Enter you password');
    fireEvent.change(input, { target: { value: '1D' } });
    await screen.findByText('Password must contain at least one lowercase letter');
  });
  it('Error: Password must be longer than 8 characters', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>{' '}
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText('Enter you password');
    fireEvent.change(input, { target: { value: '1Dds' } });
    await screen.findByText('Password must be longer than 8 characters');
  });
  it('toggles password button', (): void => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginInput {...baseProps} type="password" label="password" placeholder="password" />
            }
          />
        </Routes>{' '}
      </BrowserRouter>
    );
    const input: HTMLElement = screen.getByPlaceholderText('password');
    const button: HTMLElement = screen.getByText(/🙈|🙉/);
    const buttonElem = button;
    const buttonVisibility = buttonElem.textContent;
    fireEvent.click(button);
    expect(input).toHaveAttribute('type', 'text');
    expect(button.textContent).not.toBe(buttonVisibility);
    fireEvent.click(button);
    expect(input).toHaveAttribute('type', 'password');
    expect(buttonElem.textContent).toBe(buttonVisibility);
  });
});
