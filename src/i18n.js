import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import heroEn from './locales/en/hero.json';
import heroAr from './locales/ar/hero.json';

const savedLang = localStorage.getItem('lang') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                hero: heroEn,
            },
            ar: {
                hero: heroAr,
            },
        },
        lng: savedLang,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
