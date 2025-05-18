// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

void i18n
  .use(initReactI18next) // Passes i18next to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language in case the key is not found
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
  });

export default i18n;
