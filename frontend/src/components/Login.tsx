import React from 'react';
import logo from '../assets/images/logo.svg'
import { useTranslation } from 'react-i18next';
const Login:React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="relative h-screen w-full bg-[url('../assets/images/bg-landingPg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className='bg-black w-full h-full lg:bg-opacity-50 px-12 py-5'>
            <header className='mx-auto max-w-6xl '>
                <img src={logo} alt='logo-signIn' className='w-2/12' />
            </header>
            <div className='px-20 py-10 flex justify-center'>
                <h2>{t('')}</h2>

            </div>
        </div>
        </div>
    );
}

export default Login;