import React from "react";
import './Register.css'
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Footer from '../../components/Footer/Footer'


export default function Register() {

    return (
        <div className="Register-Page">
            <Header />
            <div>
                <div className="title">
                    <h2>Cadastro de Produtos</h2>
                </div>
                <div>
                    <Input />
                </div>
            </div>
            <Footer />
        </div>
    )
}