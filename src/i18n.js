import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import hy from './locales/hy.json';

const messages = {
    en,
    ru,
    hy
};
const savedLanguage = localStorage.getItem('language') || 'hy';

const i18n = createI18n({
    locale: savedLanguage, // Use saved language or default to 'en'
    fallbackLocale: 'hy', // Set fallback locale
    messages
});

export default i18n;
