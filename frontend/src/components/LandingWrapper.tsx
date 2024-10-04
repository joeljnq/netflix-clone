import React from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet, useParams } from "react-router-dom";
const LandingWrapper: React.FC = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const supportedLanguages = ["es", "en"];

  if (lang && supportedLanguages.includes(lang)) {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    return <Outlet />;
  } else {
    return <Navigate to={`/en/404`} />;
  }
};
export default LandingWrapper;
