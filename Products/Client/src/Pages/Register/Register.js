import React, { useEffect, useState } from "react";
import './Register.css'
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import axios from "axios";
import { ModalMessage } from "../../components/Modal/Modal";


export default function Register() {
    const [values, setValues] = useState([])
    const [openMessage, setOpenMessage] = useState(false)
    const [showMessage, setShowMessage] = useState(false)


    useEffect(() => {
        console.log(values)
        if (Object.values(values).includes('') === false && Object.values(values).length === 3) {
            setShowMessage(false)
        }
    }, [values])
    

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }


    function handleClickButton() {

        if (Object.values(values).includes('') === false && Object.values(values).length === 3) {
            axios
                .post('http://localhost:3001/register', {
                    name: values.name,
                    category: values.category,
                    value: values.value
                }).then((response) => {
                })
            setOpenMessage(true)
            setTimeout(() => {
                setValues({
                    name: '',
                    category: '',
                    value: ''
                })
            }, 1000);
            setTimeout(() => {
                setOpenMessage(false)
            }, 2500);
            console.log('salvou')
        } else {
            setShowMessage(true)
        }


    }

    function RegistrationCompleted() {
        if (openMessage) {
            return (
                <ModalMessage
                    title={'Cadastro'}
                    message={'Cadastro concluido com sucesso!'}
                />
            )
        }
    }

    function IncompleteRegistration() {
        if (showMessage) {
            return (
                <div className="incomplete-registration">
                    <a>* Todos os campos precisam ser preenchidos! *</a>
                </div>
            )
        } 
    }


    return (
        <div>
            <div className="Register-Page">
                <Header />
                <div>
                    <div className="title">
                        <h2>Cadastro de Produtos</h2>
                    </div>
                    <div>
                        <div className="input-container">
                            <div className="input-style">

                                <div className="input">
                                    <div className="input-box">
                                        <a>Produto:</a>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Informe o Nome do Produto"
                                            onChange={handleChangeValues}
                                            value={values.name}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <a>Tipo:</a>
                                        <input
                                            type="Text"
                                            name="category"
                                            placeholder="Informe o Tipo do Produto"
                                            onChange={handleChangeValues}
                                            value={values.category}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <a>Valor:</a>
                                        <input
                                            type="number"
                                            name="value"
                                            placeholder="Informe o Valor do Produto"
                                            onChange={handleChangeValues}
                                            value={values.value}
                                        />
                                    </div>
                                </div>
                                <div className="incomplete-registration">
                                    {IncompleteRegistration()}
                                </div>
                                <div className="button-style">
                                    <button
                                        className="button-confirm"
                                        onClick={() => handleClickButton()}>Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {RegistrationCompleted()}
        </div>
    )
}