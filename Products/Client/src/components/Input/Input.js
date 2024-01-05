import React, { useState, useEffect } from "react";
import './Input.css'
import Axios from 'axios'
import { ModalSave } from "../Modal/Modal";


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
        })

    }


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
    const [openModalMessage, setOpenModalMessage] = useState(false)
    const [typeOfOperation, setTypeOfOperation] = useState()
    const [deleteID, setDeleteID] = useState()

    function OpenModal(value, id) {
        if (value === 1) {
            setTypeOfOperation(1)
            handleOpenModal()

        } else if (value === 2) {
            setTypeOfOperation(2)
            handleOpenModal()
            setDeleteID(id)

        }
    }

    const handleOpenModal = () => {
        setOpenModalMessage(!openModalMessage)
    };


    function saveEdit(value, id) {
        if (value == 1) {
            props.openModal(true, props.id)
        }
        else if (value == 2) {
            props.deleteItem(1, id)
        }
    }

    return (
        <div>

            <div style={{ display: "flex" }}>

                <div style={{ display: 'flex', gap: 5 }}>
                    <div className="text-component" style={{ width: 180 }}>
                        <a>{props.name}</a>
                    </div>
                    <div className="text-component">
                        <a>{props.category}</a>
                    </div>
                    <div className="text-component">
                        <a>R$ {props.value}</a>
                    </div>
                </div>


                <div className="button-save" onClick={() => OpenModal(1)}>
                    <a>Alterar</a>
                </div>
                <div className="button-delete" onClick={() => OpenModal(2, props.id)}>
                    <a>Excluir</a>
                </div>
            </div>

            <ModalSave
                openModalMessage={openModalMessage}
                closeModal={handleOpenModal}
                save={saveEdit}
                Operation={typeOfOperation}
                id={deleteID}
            />
        </div>

    )

}

