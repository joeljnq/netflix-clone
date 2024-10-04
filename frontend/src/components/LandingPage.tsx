import React from "react";
import logo from '../images/logo.svg'
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const LandingPage: React.FC = () => {
    const { t } = useTranslation();
    return(
        <header className="w-full mx-auto lg:max-w-7xl bg-transparent flex justify-between">
            <img src={logo} alt="logo netflix" className="w-48"/>
            <div>
            <LanguageSelector />
            <button  className="bg-[#B20710] w-30 rounded-md p-2" >{t('landing-page.login')}</button>
            </div>
        </header>
    )
}

export default LandingPage;