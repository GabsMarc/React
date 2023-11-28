import React from "react";
import './Register.css'
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";


export default function Register() {

    return (
        <div className="Register-Page">
            <Header />
            <div className="title">
                <h2>Cadastro de Produtos</h2>
            </div>
            <body>
                <div>
                    <Input />
                </div>
            </body>
        </div>
    )
}