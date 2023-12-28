import React, { useState, useEffect } from "react";
import './Modal.css'


export function ModalSave(props) {

    const [textModal, setTextModal] = useState({})

    function TextModal() {
        if (props.Operation === 1) {
            setTextModal({
                title: 'Alterar Registro',
                question: 'Deseja confirmar a alteração?',
                textButton: 'Salvar'
            })
        } else if (props.Operation === 2) {
            setTextModal({
                title: 'Excluir Registro',
                question: 'Deseja confirmar a exclusão?',
                textButton: 'Excluir'
            })
        }
    }

    useEffect(() => {
        TextModal()
    }, [props.Operation])


    const onSaveModal = () => {
        if (props.Operation === 1) {
            props.save(true)
        } else if (props.Operation === 2) {
            props.save(false)
        }
        props.closeModal()
    }

    function cancelEdit() {
        props.closeModal()
    }

    if (props.openModal) {
        return (
            <div className="save-container">
                <div className="save-message">
                    <div className="close-modal">
                        <div id="title">
                            <a>{textModal.title}</a>
                        </div>
                        <div id="close" onClick={cancelEdit}>
                            <a>X</a>
                        </div>
                    </div>
                    <div className="content-modal">
                        <div className="message">
                            <div>
                                <a>{textModal.question}</a>
                            </div>
                        </div>
                        <div className="button-modal" >
                            <div className="button" onClick={onSaveModal}>
                                <a>{textModal.textButton}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}