// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to the Home Page",
      about: "About Us",
      login:'Sign IN'
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a la Página de Inicio",
      about: "Acerca de Nosotros",
      login:'Iniciar Sesión'
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "es", 
    fallbackLng: "es",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
