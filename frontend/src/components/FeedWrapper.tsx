import React, { useEffect } from "react";


import avatar from '../assets/images/avatar.webp'
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import {  useNavigate, useParams } from "react-router-dom";

import { SearchIcon } from "../icons/Icons";
import { BellIcon } from "../icons/BellIcon";
import { Outlet } from "react-router-dom";
import i18n from "./i18n";


export const FeedWrapper:React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  
  
  useEffect(() => {
    const supportedLanguages = ["es", "en"];
      if (lang && supportedLanguages.includes(lang)) {
        i18n.changeLanguage(lang);        
      }else{
        navigate(`/${i18n.language}/404`);
      }
    
  }, [lang, navigate]);
    return (
        <>
        <header className="fixed w-full max-w-full lg:px-10 flex justify-between z-10">
        <div className="flex items-center gap-5">
          <img src={logo} alt="logo-signIn" className="w-2/12" />
          <ul className="flex gap-10 text-lg">
            <li>{t("feed.nav.search")}</li>
            <li>{t("feed.nav.tvShows")}</li>
            <li>{t("feed.nav.movies")}</li>
            <li>{t("feed.nav.newReleases")}</li>
          </ul>
        </div>
        <div className="flex gap-6 w-auto justify-end ">
            <SearchIcon />
            <BellIcon />
            <img src={avatar} className="lg:w-1/12" alt="user-avatar" />
        </div>
      </header>
      <Outlet />
        </>
    );
}