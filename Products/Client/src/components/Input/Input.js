import React from "react";
import './Input.css'

export default function Input() {

    return (

        <div className="input-container">
            <div className="input-style">

                <div className="input">
                    <div className="input-box">
                        <a>Produto:</a>
                        <input type="text" placeholder="Informe o Nome do Produto" />
                    </div>
                    <div className="input-box">
                        <a>Tipo:</a>
                        <input type="Text" placeholder="Informe o Tipo do Produto" />
                    </div>
                    <div className="input-box">
                        <a>Valor:</a>
                        <input type="number" placeholder="Informe o Valor do Produto" />
                    </div>
                </div>

                <div className="input-checkbox">
                    <a>Produto ativo:</a>
                    <input type="checkbox" placeholder="Ativo" />
                </div>

                <input type="image" />

                <div className="button-style">
                    <button className="button-cancel">Cancelar</button>
                    <button className="button-confirm">Confirmar</button>
                </div>
            </div>
        </div>

    )
}