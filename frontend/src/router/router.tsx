import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { useTranslation } from "react-i18next";
import LandingWrapper from "../components/LandingWrapper";
import { LoginEx } from "../components/LoginEx";
import { Feed } from "../components/Feed";
import { FeedWrapper } from "../components/FeedWrapper";
import { Watch } from "../components/Watch";
import { Signup } from "../components/Signup";

const Router = () => {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
        <Route path="/:lang" element={<LandingWrapper />}>
          <Route index element={<LandingPage />} />
          <Route path="/:lang/login" element={<LoginEx />} />
          <Route path="/:lang/register" element={<Signup />} />
        <Route path="*" element={<h1>404</h1>} />
        </Route>
        <Route path="/:lang/feed" element={<FeedWrapper />}>
        <Route index element={<Feed />} />
        <Route path="/:lang/feed/:id" element={<h1>Details</h1>} />
        </Route>
        <Route path="/:lang/watch/:id" element={<Watch />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
