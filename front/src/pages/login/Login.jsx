import React, { useState } from "react";
import styles from "./Login.module.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PersonService from "../../services/PersonService";


const Login = () =>{
    const [user, setUser] = useState({email: "", senha: ""});
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    const personService = new PersonService();

    const handChange = (input) =>{
        setUser({...user, [input.target.name]: input.target.value});
    }

    const login = async () =>{
        //chamada para o back-end para verificar as credenciasi
        try{
            const response = await personService.login(user);
            let token = response.token;
            localStorage.setItem("token", token);
            localStorage.setItem("email", user.email);
            navigate("/");
        }catch(err){
            console.log(err);
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
                    <InputText className={styles["input-box"]} onChange={handChange}name="email" id="email" type="email" aria-describedby="email-help"/>
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="senha">{t ('password')}</label>
                    <Password className={styles["input-box"]} onChange={handleCombinedChange} name="password" id="password" type="password" aria-describedby="senha-help" value={value} toggleMask feedback={false} />
                </div>
                <Button onClick={login} label={t('login')} />
                <Button label={t('createAcont')} link onClick={() => window.open('../singin')} />
                <Button label={t('forgotPassword')} link onClick={() => window.open('../forgot-password', '_blank')} />
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