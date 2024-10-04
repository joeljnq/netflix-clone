import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { useTranslation } from "react-i18next";
import LandingWrapper from "../components/LandingWrapper";

const Router = () => {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
        <Route path="/:lang" element={<LandingWrapper />}>
          <Route index element={<LandingPage />} />
        <Route path="*" element={<h1>404</h1>} />

        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
