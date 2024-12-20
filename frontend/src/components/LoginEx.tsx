import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { checkEmail, checkPassword } from "../forms/functions";
import { login } from "../service/userService";
import { useNavigate } from "react-router-dom";
export const LoginEx: React.FC = () => {
  const navigation = useNavigate();
  const { t,i18n } = useTranslation();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(true);

  const submit = async () => {
    if (isEmailValid && isPasswordValid && email && password) {
      const result = await login({email,password})
      if(result){
        console.log('Logged in', result);
    }else{
      console.log('Error');
      
    }
  }
}
  useEffect(() => {
    if (email !== null) {
      if (!checkEmail(email ? email : "")) {
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
    }
  }, [email]);

  useEffect(() => {
    if (password !== null) {
      if (!checkPassword(password ? password : "")) {
        setIsPasswordValid(false);
      } else {
        setIsPasswordValid(true);
      }
    }
  }, [password]);

  const navigateToSignUp = () => {
    navigation(`/${i18n.language}/register`)
  }

  return (
    <div className="relative h-screen w-full bg-[url('../assets/images/bg-landingPg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50 px-12 py-5">
        <header className="mx-auto max-w-6xl ">
          <img src={logo} alt="logo-signIn" className="w-2/12" />
        </header>
        <form onSubmit={(e)=> e.preventDefault()} className="mt-20 px-20 py-10 lg:max-w-lg bg-black/70 mx-auto flex flex-col gap-10">
          <h2 className="text-4xl">{t("signIn.signIn")}</h2>
          <div>
            <input
              type="email"
              id="email"
              placeholder={t("signIn.email")}
              onBlur={(e) => setEmail(e.currentTarget.value)}
              className="w-full p-4  bg-black bg-opacity-50 focus:border-4 border-gray-300 border-2 focus:border-white rounded-md text-white  "
            />
            {!isEmailValid && (
              <p className="text-red-500">{t("signIn.invalidEmail")}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder={t("signIn.password")}
              onBlur={(e) => setPassword(e.currentTarget.value)}
              className="w-full p-4  bg-black bg-opacity-50 focus:border-4 border-gray-300 border-2 focus:border-white rounded-md text-white  "
            />
            {!isPasswordValid && (
              <p className="text-red-500">{t("signIn.invalidPassword")}</p>
            )}
            <div className="max-w-full mt-4">
              <button onClick={()=> submit()} type="button" className="w-full py-2 text-xl  bg-primary-default hover:bg-primary-dark rounded-l">
                {t("signIn.signIn")}
              </button>
              <p className="text-3xl text-center">{t("signIn.or")}</p>
              <button onClick={navigateToSignUp} type="button" className="w-full py-2 text-xl  bg-primary-default hover:bg-primary-dark rounded-l">
                {t("signIn.signUp")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
