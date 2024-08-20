import React, { useState } from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Navigate, useNavigate } from "react-router-dom";

const Login = () =>{
    const [user, setUser] = useState({email: "", senha: ""});
    const navigate = useNavigate();

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

    return (
        <div>
            <Card title="Login" className="p-4" stuyle={{width: '400px'}}>
                <div className="flex flex-column gap-2">
                    <label htmlFor="email">Email</label>
                    <InputText onChange={handChange}name="email" id="email" type="email" aria-describedby="email-help"/>
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="senha">Senha</label>
                    <InputText onChange={handChange}name="senha" id="senha" type="senha" aria-describedby="senha-help"/>
                    {/* <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask /> tentar adicionar isso */}
                </div>
                <Button onClick={login} label="Fazer Login" />
                <Button label="Criar conta" link onClick={() => window.open('../singin')} />
                <Button label="Esqueceu a senha" link onClick={() => window.open('../reset-password', '_blank')} />
            </Card>
        </div>
    )
}

export default Login;