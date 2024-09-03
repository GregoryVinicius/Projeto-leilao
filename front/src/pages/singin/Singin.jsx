import React, { useState } from "react";
import "./Singin.css"
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Divider } from 'primereact/divider';

const Singin = () =>{
    const [user, setUser] = useState({ email: "", senha: "" });
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const header = <div className="font-bold mb-3">Escreva uma senha</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Requer que tenha</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>Uma letra minuscula</li>
                <li>Uma letra maiuscula</li>
                <li>Um numero</li>
                <li>Um caracter especial</li>
                <li>Minimo de 6 caracteres</li>
            </ul>
        </>
    );

    const register = () => {
            localStorage.setItem("senha", user.senha);
            localStorage.setItem("email", user.email);
            navigate("/");
    }

    let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{6,20}$/; //Faz todas as verificações nescesarias lookaheads
    
    const VerifyStrongPassword = () => {
        localStorage.setItem("senha", user.senha);
        const senha = localStorage.getItem("senha")
        if (regex.test(senha)){
        register();
        }else{
            alert("A senha precisar conter\nUma letra minuscula\nUma letra maiuscula\nUm numero\nUm caractere especial\nMinimo de 6 caracteres");
        }
    }

    const handChange = (input) => {
        setUser({ ...user, [input.target.name]: input.target.value });
    }

    const handleCombinedChange = (e) => {
        // Chama o handler existente
        handChange(e);

        // Atualiza o estado com o novo valor
        setValue(e.target.value);
    }

    const changeLanguage = (Language) => {
        i18n.changeLanguage(Language);
    }

    const navigateHome = () =>{
        navigate("/");
    }

    return (
        <Card title={t('singin')}>
            <div className="flex flex-column gap-2">
                <label htmlFor="email">{t('email')}</label>
                <InputText onChange={handChange} name="email" id="email" type="email" aria-describedby="email-help" />
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="senha">{t('password')}</label>
                <Password onChange={handleCombinedChange} header={header} footer={footer} name="senha" id="senha" type="senha" aria-describedby="senha-help" value={value} toggleMask/>
            </div>
            <div>
                <Button onClick={navigateHome}>{t("cancel")}</Button>
                <Button onClick={VerifyStrongPassword}>{t("singin")}</Button>
            </div>
            <div>
                <lang>
                    <Button onClick={() => changeLanguage('en')}>
                        English
                    </Button>
                    <Button onClick={() => changeLanguage('pt')}>
                        Português
                    </Button>
                </lang>
            </div>
        </Card>
    );
}

export default Singin;