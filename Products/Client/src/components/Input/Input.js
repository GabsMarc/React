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
            // console.log(response)
        })

    }
    // console.log(values)


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
    const [editValues, setEditValues] = useState({});

    useEffect(() => {
        setEditValues({
            id: props.id,
            name: props.name,
            value: props.value,
            category: props.category,
        })
    }, [])


    //ADICIONAR USE EFFECT PARA RENDERIZAR OS CAMPOS DOS INPUTS >:)


    const [openModal, setOpenModal] = useState(false)
    const [typeOfOperation, setTypeOfOperation] = useState()


    const handleChangeValues = (values) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }));

    };

    function OpenModal(value) {
        if (value === 1) {
            setTypeOfOperation(1)
            handleOpenModal()

        } else if (value === 2) {
            setTypeOfOperation(2)
            handleOpenModal()

        }
    }

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    };


    function saveEdit(value) {
        if (value === true) {
            Axios.put("http://localhost:3001/edit", {
                id: editValues.id,
                name: editValues.name,
                value: editValues.value,
                category: editValues.category,
            })
            props.updateList(2)
            console.log('atualizado com sucesso!')
        } else if (value === false) {
            props.updateList(1, editValues.id)

        }
    }

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
                <div className="button-save" onClick={() => OpenModal(1)}>
                    <a>Salvar</a>
                </div>
                <div className="button-delete" onClick={() => saveEdit(false)}>
                    <a>Excluir</a>
                </div>
            </div>

            {/* <ModalSave
                openModal={openModal}
                closeModal={handleOpenModal}
                save={saveEdit}
                Operation={typeOfOperation}
            /> */}
        </div>

    )

}

