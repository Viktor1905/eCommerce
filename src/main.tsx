import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import { ToastContainer } from 'react-toastify';

import './index.css';
//import App from './App.tsx';
//import Form from './form-test';
//import SimpleSwiper from './swiper-test.tsx';
//import ToastTester from './toast-test.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
//import Counter from './counter-test.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query.ts';
//import UserList from './features/users/users-list';
//import AnimatedBox from './animation-test';
import { format, parseISO } from 'date-fns';
//import Calendar from './calendar-test.tsx';
//import Translated from './translation-test.tsx';
import './i18n.ts';
import RegistrationPage from './pages/register/RegistrationPage.tsx';
//import LanguageSwitcher from './language-switcher.tsx';

export function renderApp(container: HTMLElement) {
  createRoot(container).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {/*<Form />*/}
          <RegistrationPage />
          {/*
          <App />
          <AnimatedBox />
          <SimpleSwiper />
          <ToastTester />
          <Counter />
          <UserList />
          <Calendar />
          <LanguageSwitcher />
          <Translated />
          <ToastContainer position="top-right" autoClose={3000} />*/}
        </Provider>
      </QueryClientProvider>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  renderApp(rootElement);
}

// checking date

const date = '2025-05-03T14:00:00Z';
const parsedDate = parseISO(date);
const formattedDate = format(parsedDate, 'MMMM dd, yyyy MMMM, dd');

console.log(formattedDate);
