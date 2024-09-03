import React from "react";
import "./Forgot-password.css";
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <Card title="Insira seu email">
                <div className="flex flex-column gap-2">
                    <label htmlFor="email">{t('email')}</label>
                    <InputText name="email" id="email" type="email" aria-describedby="email-help" />
                </div>
                <Button label={t('cancel')} />
                <Button label={t('resetPassword')} link onClick={() => window.open('../reset-password', '_blank')} />
            </Card>
        </div>
    );
}

export default ForgotPassword;