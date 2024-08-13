import React from "react";
import "./Singin.css"
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Singin = () =>{

    return (
        <Card title="Singin">
            <InputText />
            <InputText />
            <Button label="Cancelar"/>
            <Button label="Fazer cadastro"/>
        </Card>
    );
}

export default Singin;