import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () =>{

    return (
        <div>
            <Card title="Login">
                <InputText/>
                <Password feedback={false}/>
                <Button label="Fazer Login" />
                <Button label="Criar conta" link onClick={() => window.open('../singin')} />
                <Button label="Esqueceu a senha" link onClick={() => window.open('../reset-password', '_blank')} />
            </Card>
        </div>
    )
}

export default Login;