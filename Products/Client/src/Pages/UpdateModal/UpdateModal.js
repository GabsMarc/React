import React, { useEffect, useState } from "react";
import './UpdateModal.css'
import axios from "axios";

export function UpdateModal(props) {

    const [updateItem, setUpdateItem] = useState([])
    const [refreshSelect, setRefreshSelect] = useState(props.start)
    const [editValues, setEditValues] = useState({});


    useEffect(() => {
        axios.get('http://localhost:3001/getProductById/' + props.id,)
            .then((response) => {
                setUpdateItem(response.data)
            });

    }, [refreshSelect])


    const handleChangeValues = (values) => {

        updateItem.map((value) => {
            setEditValues({
                id: value.id,
                name: value.name,
                value: value.value,
                category: value.category,
            })
            console.log(editValues)
        })

        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }));

    };


    function saveEdit(value) {
        if (value === true) {

            axios.put("http://localhost:3001/edit", {
                id: editValues.id,
                name: editValues.name,
                value: editValues.value,
                category: editValues.category,
            })
            props.openModalUpdate()
            console.log('atualizado com sucesso!')
        }
    }

    if (props.openModalUpdate) {
        return (
            <div className="save-container">
                <div className="modal" style={{ width: 700, height: 200 }}>
                    <div className="container-input">
                        <div className="input-title">
                            <a id="name">Produto</a>
                            <a id="category">Categoria</a>
                            <a id="value">Valor</a>
                        </div>
                        <div className="teste">
                            {
                                updateItem.map((value) => {
                                    return (
                                        <div className="inputs-container">
                                            <input
                                                type="text"
                                                id="name"
                                                defaultValue={value.name}
                                                onChange={handleChangeValues}
                                            />
                                            <input
                                                type="text"
                                                id="category"
                                                defaultValue={value.category}
                                                onChange={handleChangeValues}

                                            />
                                            <input
                                                type="number"
                                                id="value"
                                                defaultValue={value.value}
                                                onChange={handleChangeValues}

                                            />
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="save-button" onClick={() => saveEdit(true)}>
                            <a>Salvar</a>
                        </div>
                        <div className="cancel-button" onClick={() => props.openModalUpdate()}>
                            <a>Cancelar</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}