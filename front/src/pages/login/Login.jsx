import React, { useState } from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () =>{
    const [user, setUser] = useState({email: "", senha: ""});
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();

    const handChange = (input) =>{
        setUser({...user, [input.target.name]: input.target.value});
    }

    const login = () =>{
        //chamada para o back-end para verificar as credenciasi
        if(user.email == "gregoryviniciuscla@gmail.com" && user.senha == "123"){
            let token = "token do backend"
            localStorage.setItem("token", token);
            localStorage.setItem("email", user.email);
            navigate("/");
        }else{
            alert("usuario ou senha incorretos");
        }
    }

    // Função combinada para lidar com o evento onChange
    const handleCombinedChange = (e) => {
        // Chama o handler existente
        handChange(e);

        // Atualiza o estado com o novo valor
        setValue(e.target.value);
    };

    const changeLanguage = (Language) => {
        i18n.changeLanguage(Language);
    }

    return (
        <div>
            <Card title={t('login')} className="p-4" stuyle={{width: '400px'}}>
                <div className="flex flex-column gap-2">
                    <label htmlFor="email">{t('email')}</label>
                    <InputText onChange={handChange}name="email" id="email" type="email" aria-describedby="email-help"/>
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="senha">{t ('password')}</label>
                    {/* <InputText onChange={handChange}name="senha" id="senha" type="senha" aria-describedby="senha-help"/> */}
                    <Password onChange={handleCombinedChange} name="senha" id="senha" type="senha" aria-describedby="senha-help" value={value} toggleMask feedback={false} />
                </div>
                <Button onClick={login} label={t('login')} />
                <Button label={t('createAcont')} link onClick={() => window.open('../singin')} />
                <Button label={t('forgotPassword')} link onClick={() => window.open('../reset-password', '_blank')} />
                <lang>
                    <Button onClick={() => changeLanguage('en')}>
                        English
                    </Button>
                    <Button onClick={() => changeLanguage('pt')}>
                        Português
                    </Button>
                </lang>
            </Card>
        </div>
    )
}

export default Login;