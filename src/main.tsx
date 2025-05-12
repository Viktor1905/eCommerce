import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query.ts';
import './i18n.ts';
import { LoginPage } from './pages/authorization/Login-page.tsx';

export function renderApp(container: HTMLElement) {
  createRoot(container).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <LoginPage />
          {/*<App />*/}
          {/*<AnimatedBox />*/}
          {/*<Form />*/}
          {/*<SimpleSwiper />*/}
          {/*<ToastTester />*/}
          {/*<Counter />*/}
          {/*<UserList />*/}
          {/*<Calendar />*/}
          {/*<LanguageSwitcher />*/}
          {/*<Translated />*/}
          {/*<ToastContainer position="top-right" autoClose={3000} />*/}
        </Provider>
      </QueryClientProvider>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  renderApp(rootElement);
}
