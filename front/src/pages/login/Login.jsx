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

    const handleChange = (input) =>{
        setUser({...user, [input.target.name]: input.target.value});
    }

    const login = () =>{
        //chamada para o back-end para verificar as credenciasi
        if(user.email == "gregoryviniciuscla@gmail.com" && user.Password == "123"){
            let token = "token do backend"
            localStorage.setItem("token", token);
            localStorage.setItem("email", usuario.email);
            navigate("/");
        }else{
            alert("usuario ou senha incorretos");
        }
    }

    return (
        <div>
            <Card title="Login" className="p-4" stuyle={{width: '400px'}}>
                <InputText onChange={handleChange}name="email" id="email" className=""/>
                <InputText onChange={handleChange} name="senha" id="senha" className="" />
                <Button label="Fazer Login" />
                <Button label="Criar conta" link onClick={() => window.open('../singin')} />
                <Button label="Esqueceu a senha" link onClick={() => window.open('../reset-password', '_blank')} />
            </Card>
        </div>
    )
}

export default Login;