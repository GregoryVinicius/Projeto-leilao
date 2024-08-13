import React from "react";
import "./Forgot-password.css";
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';


const ForgotPassword = () => {

    return (
        <div>
            <Card title="trocar senha">
                <InputText />
                <Password feedback={false}/>
                <Button label="Cancelar" />
                <a href="../reset-password" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                    Redefinir senha
                </a>
            </Card>
        </div>
    );
}

export default ForgotPassword;