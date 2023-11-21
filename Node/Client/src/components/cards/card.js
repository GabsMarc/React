import React, { useState } from "react";
import './card.css'
import FormDialog from "../dialog/Dialog";

export default function Card(props) {
    const [open, setOpen] = useState(false)

    const handleClickCard = () => {
        setOpen(true)
    }

    return (
        <>
            <FormDialog
                open={open}
                setOpen={setOpen}
                id={props.id}
                name={props.name}
                cost={props.cost}
                category={props.category}
                listCard={props.listCard}
                setListCard={props.setListCard}
            />
            <div className="card-container" onClick={() => handleClickCard()}>
                <div className="card-name">
                    <h1>{props.name}</h1>
                </div>

                <div className="card-cost">
                    <p><strong>Preço: </strong>R${props.cost}</p>
                </div>

                <div className="card-category">
                    <p><strong>Categoria: </strong>{props.category}</p>
                </div>
            </div>
        </>
    )
} 