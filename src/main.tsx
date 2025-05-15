import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import { ToastContainer } from 'react-toastify';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query.ts';
import { format, parseISO } from 'date-fns';
import './i18n.ts';
import RegistrationPage from './pages/register/RegistrationPage.tsx';
import { LoginPage } from './pages/authorization/Login-page.tsx';


export function renderApp(container: HTMLElement) {
  createRoot(container).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        </Provider>
      </QueryClientProvider>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  renderApp(rootElement);
}
