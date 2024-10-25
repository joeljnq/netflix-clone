import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
export const Login = () => {
  const {i18n} = useTranslation();
    return (
    <div className="relative h-screen w-full bg-[url('../assets/images/bg-landingPg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50 px-12 py-5">
      <header className="mx-auto max-w-6xl ">
          <img src={logo} alt="logo-signIn" className="w-2/12" />
        </header>
        <div className="mt-20 px-20 py-10 lg:max-w-lg bg-black/70 mx-auto">
        <Link className="w-full py-2 text-xl  bg-primary-default hover:bg-primary-dark rounded-l" to={`/${i18n.language}/feed`}>Sign In</Link>    
        </div>
        </div>
    </div>
    )
}