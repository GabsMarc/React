import React, { useState, useEffect } from "react";
import './Input.css'
import Axios from 'axios'
import { ModalSave } from "../Modal/Modal";


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

