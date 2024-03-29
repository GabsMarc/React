import React, { useState, useEffect } from "react";
import './Modal.css'


export function ModalSave(props) {

    const [textModal, setTextModal] = useState({})

    function TextModal() {
        if (props.Operation === 1) {
            setTextModal({
                title: 'Alterar Registro',
                question: 'Deseja fazer uma alteração?',
                textButton: 'Confirmar'
            })
        } else if (props.Operation === 2) {
            setTextModal({
                title: 'Excluir Registro',
                question: 'Deseja confirmar a exclusão?',
                textButton: 'Excluir'
            })
        } else if (props.Operation === 3) {
            setTextModal({
                title: 'Alterar Registro',
                question: 'Deseja confirmar a alteração?',
                textButton: 'Salvar'
            })
        }
    }

    useEffect(() => {
        TextModal()
    }, [props.Operation])


    const onSaveModal = () => {
        if (props.Operation === 1) {
            props.save(1, props.id)
        } else if (props.Operation === 2) {
            props.save(2, props.id)
        }
        props.closeModal()
    }

    function cancelEdit() {
        props.closeModal()
    }


    if (props.openModalMessage) {
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


export function ModalMessage(props) {

    return (
        <div className="save-container">
            <div className="message-container">
                <div className="title-message">
                    <div id="title">
                        <a>{props.title}</a>
                    </div>
                </div>
                <div className="content-modal">
                    <div className="message">
                        <div>
                            <a>{props.message}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}