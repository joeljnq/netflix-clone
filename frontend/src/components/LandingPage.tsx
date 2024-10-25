import React from "react";
import logo from "../assets/images/logo.svg";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { t,i18n } = useTranslation();
  const handleToLogin = () =>{
  navigate(`/${i18n.language}/login`)
  }
  return (
    <>
      <div
        className={`absolute min-h-full pt-6 w-full bg-[url(../assets/images/bg-landingPg.jpg)] from-black/80 to-transparent bg-cover bg-center`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-0"></div>

        <header className="relative w-full mx-auto lg:max-w-7xl bg-transparent flex justify-between text-white z-10">
          <img src={logo} alt="logo netflix" className="w-36" />
          <div >
            <LanguageSelector />
            <button className="bg-primary-default w-30 rounded-md p-2 ml-3 hover:bg-primary-dark"
            onClick={()=>handleToLogin()}>
              {t("landing-page.login")}
            </button>
          </div>
        </header>
        <div className="relative m-auto lg:w-2/6 mt-60">
          <h1 className="text-6xl font-bold">{t("landing-page.title")}</h1>
          <h2 className="text-xl mt-7 text-center font-bold">
            {t("landing-page.subtitle")}
          </h2>
        </div>
        <div className="relative m-auto lg:w-2/6 flex flex-col items-center mt-3">
          <p className="mt-5 text-center">{t("landing-page.ready")}</p>
          <div className="relative w-full h-16 mr-2 flex gap-3 items-center ">
            <input
              type="email"
              id="email"
              placeholder={t("landing-page.email")}
              className="w-4/6 p-4  bg-black bg-opacity-50 focus:border-4 border-gray-300 border-2 focus:border-white rounded-md text-white  "
            />
              <button className="bg-primary-default hover:bg-primary-dark hover:ring-red-700  w-4/12 h-[95%] rounded-md ">
            {t("landing-page.getStarted")}
          </button>
          </div>
        
        </div>
      </div>
    {/*separator*/}

    </>
  );
};

export default LandingPage;
