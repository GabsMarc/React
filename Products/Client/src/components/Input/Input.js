import React, { useState } from "react";
import './Input.css'
import Axios from 'axios'


export function Input() {
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
            value: values.value
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



export function InputEdit(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.name,
        value: props.value,
        category: props.category,
    });

    const handleChangeValues = (values) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }));
        console.log(editValues)

    };

    const handleEditGame = () => {
        Axios.put("http://localhost:3001/edit", {
            id: editValues.id,
            name: editValues.name,
            value: editValues.value,
            category: editValues.category,
        })
    };

    return (
        <div>
            <div style={{ display: "flex" }}>
                <input
                    type="text"
                    id="name"
                    defaultValue={props.name}
                    onChange={handleChangeValues}
                />
                <input
                    type="text"
                    id="category"
                    defaultValue={props.category}
                    onChange={handleChangeValues}

                />
                <input
                    type="number"
                    id="value"
                    defaultValue={props.value}
                    onChange={handleChangeValues}

                />
                <div
                    className="button-save"
                    onClick={handleEditGame}
                >
                    <a>Salvar</a>
                </div>
            </div>
        </div>

    )

}

