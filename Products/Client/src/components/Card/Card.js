import React from "react";
import './Card.css'
import img from '../../image/teste.jpg'

export default function Card(props) {


    return (

        <div className="card">
            <div className="card-container">
                <div className="image">
                    <img src={props.image} className="img" />
                    <div className="card-infos">
                        <a id="category">{props.category}</a>
                        <div className="div-title">
                            <a id="title">{props.title}</a>
                        </div>
                        <div className="value">
                            <a id="value">R${props.value}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}