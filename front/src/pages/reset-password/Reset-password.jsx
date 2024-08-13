import React from "react";
import "./Reset-password.css";
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ResetPassword = () =>{

    return (
        <div>
            <Card title="Redefir senha">
                <InputText/>
                <Button label="Cancelar"/>
                <a href="../forgot-password" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                    Esqueceu a senha
                </a>
            </Card>
        </div>
    );
}

export default ResetPassword;