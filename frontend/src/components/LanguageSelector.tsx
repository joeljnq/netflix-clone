import React from "react";
import { useTranslation } from "react-i18next";
const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLan = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <select
      className="bg-black text-white p-2 rounded-lg"
      onChange={(e) => changeLan(e.currentTarget.value)}
    >
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSelector;
