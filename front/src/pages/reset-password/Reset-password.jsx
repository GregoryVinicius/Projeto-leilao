import React, { useState } from "react";
import "./Reset-password.css";
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Divider } from 'primereact/divider';
import { InputText } from "primereact/inputtext";

const ResetPassword = () => {
    const [user, setUser] = useState({ email: "", senha: "" });
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [validationResults, setValidationResults] = useState({
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false
    });
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const validatePassword = (password) => {
        const minLength = password.length >= 6;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return {
            minLength,
            hasUpperCase,
            hasLowerCase,
            hasNumber,
            hasSpecialChar,
            isValid: minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
        };
    };

    const ResetPassword = () => {
        localStorage.setItem("senha", user.senha);
        navigate("/");
    };

    const VerifyStrongPassword = () => {
        if (isValid) {
            ResetPassword();
        } else {
            alert("A senha não atende aos requisitos de segurança.");
        }
    };

    const handlePasswordChange = (password) => {
        const results = validatePassword(password);
        setValidationResults(results);
        setIsValid(results.isValid);
    };

    const handleCombinedChange = (e) => {
        const newValue = e.target.value;
        setUser({ ...user, [e.target.name]: newValue });
        setValue(newValue);
        handlePasswordChange(newValue);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const navigateHome = () => {
        navigate("/login");
    };

    const header = <div className="font-bold mb-3">Escreva uma senha</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Requer que tenha</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li className={validationResults.hasLowerCase ? 'valid' : 'invalid'}>Uma letra minúscula</li>
                <li className={validationResults.hasUpperCase ? 'valid' : 'invalid'}>Uma letra maiúscula</li>
                <li className={validationResults.hasNumber ? 'valid' : 'invalid'}>Um número</li>
                <li className={validationResults.hasSpecialChar ? 'valid' : 'invalid'}>Um caractere especial</li>
                <li className={validationResults.minLength ? 'valid' : 'invalid'}>Mínimo de 6 caracteres</li>
            </ul>
        </>
    );

    return (
        <Card title={t('resetPassword')}>
            <div className="flex flex-column gap-2">
                <label htmlFor="email">{t('email')}</label>
                <InputText onChange={handleCombinedChange} name="email" id="email" type="email" aria-describedby="email-help" />
            </div> 
            <div className="flex flex-column gap-2">
                <label htmlFor="codigo">Codigo</label>
                <InputText onChange={handleCombinedChange} name="codigo" id="codigo" type="codigo" aria-describedby="codigo-help" />
            </div> 
            <div className="flex flex-column gap-2">
                <label htmlFor="senha">{t('newPassword')}</label>
                <Password onChange={handleCombinedChange} header={header} footer={footer} name="senha" id="senha" value={value} toggleMask />
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="senha">{t('confirmPassword')}</label>
                <Password onChange={handleCombinedChange} header={header} footer={footer} name="senha" id="senha" value={value} toggleMask />
            </div>
            <div>
                <Button onClick={navigateHome}>{t("cancel")}</Button>
                <Button onClick={VerifyStrongPassword}>{t("resetPassword")}</Button>
            </div>
            <div className="lang">
                <Button onClick={() => changeLanguage('en')}>English</Button>
                <Button onClick={() => changeLanguage('pt')}>Português</Button>
            </div>
        </Card>
    );
}

export default ResetPassword;
