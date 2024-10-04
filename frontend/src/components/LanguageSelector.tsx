import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
const LanguageSelector: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const {lang} = useParams();
  const changeLan = (lng: string) => {
    i18n.changeLanguage(lng);
    navigate(`/${lng}`);
  };

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);  // Cambiamos el idioma según el parámetro de la URL
    }
  }, [lang, i18n]);

  
  return (
    <select
      className="bg-black text-white p-2 rounded-lg"
      onChange={(e) => changeLan(e.currentTarget.value)}
    >
      <option value="es"  selected={lang === 'es' ? true : false} >Español</option>
      <option value="en" selected={lang === 'en' ? true : false} >English</option>
    </select>
  );
};

export default LanguageSelector;
