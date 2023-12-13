import React, { useState } from "react";
import './Button.css'
import Axios from "axios";


export function ButtonDelete(props) {

    const handleDeleteItem = () => {
        Axios.delete(`http://localhost:3001/delete/${props.id}`)
    };


    return (
        <>
            <div onClick={handleDeleteItem} className="button-delete">
                <a>Excluir</a>
            </div>
        </>
    )
}

