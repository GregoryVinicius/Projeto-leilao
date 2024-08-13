import React from "react";
import "./Home.css";
import { Button } from 'primereact/button';

const Home = () =>{

    return (
        <div>
            <a href="../login" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                Login
            </a>
            <a href="../singin" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                Criar conta
            </a>
            <a href="../reset-password" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                Redefinir senha
            </a>
            <a href="../forgot-password" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                Esqueceu a senha
            </a>
        </div>
    )
}

export default Home;