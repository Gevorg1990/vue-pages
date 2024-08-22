import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import hy from './locales/hy.json';
import { watch } from 'vue';

const messages = {
    en,
    ru,
    hy
};

const savedLanguage = localStorage.getItem('language') || 'hy';

const i18n = createI18n({
    locale: savedLanguage, // Use saved language or default to 'hy'
    fallbackLocale: 'hy', // Set fallback locale
    messages
});

function updateBodyClass(locale) {
    document.body.className = `lang-${locale}`;
}

// Update the <body> class on initialization
updateBodyClass(savedLanguage);

// Watch for locale changes
watch(
    () => i18n.global.locale.value,
    (newLocale) => {
        localStorage.setItem('language', newLocale); // Save the new language to localStorage
        updateBodyClass(newLocale); // Update the <body> class
    }
);

export default i18n;
