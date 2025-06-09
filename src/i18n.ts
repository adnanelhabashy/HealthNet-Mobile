import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
} as const;

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4', // ← Changed from 'v3' to 'v4'
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18next;