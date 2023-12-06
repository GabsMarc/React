import React, { useState } from "react";
import './Input.css'
import Axios from 'axios'


export default function Input() {
    const [values, setValues] = useState()

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const handleClickButton = () => {
        Axios.post('http://localhost:3001/register', {
            name: values.name,
            category: values.category,
            value: values.value,
            active: values.active
        }).then((response) => {
            console.log(response)
        })
        
    }
    console.log(values)


    return (

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
                        />
                    </div>
                    <div className="input-box">
                        <a>Tipo:</a>
                        <input
                            type="Text"
                            name="category"
                            placeholder="Informe o Tipo do Produto"
                            onChange={handleChangeValues}
                        />
                    </div>
                    <div className="input-box">
                        <a>Valor:</a>
                        <input
                            type="number"
                            name="value"
                            placeholder="Informe o Valor do Produto"
                            onChange={handleChangeValues}

                        />
                    </div>
                </div>

                <div className="input-checkbox">
                    <a>Produto ativo:</a>
                    <input
                        type="checkbox"
                        name="active"
                        placeholder="Ativo"
                        onChange={handleChangeValues}
                    />
                </div>

                <input type="image" />

                <div className="button-style">
                    <button className="button-cancel">Cancelar</button>
                    <button
                        className="button-confirm"
                        onClick={handleClickButton}
                        >Confirmar</button>
                </div>
            </div>
        </div>

    )
}