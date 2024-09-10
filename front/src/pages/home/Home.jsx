import React from "react";
import "./Home.css";
import { Button } from 'primereact/button';
// import Logout from "../../componnents/logout/Logout";
import { useTranslation } from "react-i18next";

const Home = () =>{
    const{t, i18n} = useTranslation();

    const changeLanguage = (Language)=>{
        i18n.changeLanguage(Language);
    }

    return (

        <>
            <div>
                <h1>{t('welcome')} Página Inicial</h1>
                <a href="../login" target="_blank" rel="noopener noreferrer" className="p-button font-bold">Login</a>
                <a href="../singin" target="_blank" rel="noopener noreferrer" className="p-button font-bold">Criar conta</a>
                <a href="../reset-password" target="_blank" rel="noopener noreferrer" className="p-button font-bold">Redefinir senha</a>
                <a href="../forgot-password" target="_blank" rel="noopener noreferrer" className="p-button font-bold">Esqueceu a senha</a>
                <lang>
                    <Button onClick={() => changeLanguage('en')}>
                        English
                    </Button>
                    <Button onClick={() => changeLanguage('pt')}>
                        Português
                    </Button>
                </lang>

            </div>
            {/* <Logout /> */}
        </>
    )
}

export default Home;