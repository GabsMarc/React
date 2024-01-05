import React, { useState, useEffect } from "react";
import './List.css'
import Axios from 'axios'
import { ButtonDelete } from "../Button/Button";
import { InputEdit } from "../Input/Input";
import { Link } from 'react-router-dom';
import { ModalSave } from "../Modal/Modal";


export default function ListItens() {

    const [listProducts, setListProducts] = useState([])
    const [refreshItens, setRefreshItens] = useState()



    useEffect(() => {
        refreshList()
    }, [refreshItens])




    function refreshList() {
        Axios.get('http://localhost:3001/getProduct').then((response) => {
            setListProducts(response.data)
            console.log('refresh')
            console.log(listProducts)
        })
    }



    function updateList(value, id) {
        if (value == 1) {
            Axios
                .delete(`http://localhost:3001/delete/${id}`)
                .then(({ data }) => {
                    const newArray = listProducts.filter((list) => list.id !== id)

                    setListProducts(newArray)
                    console.log(listProducts)
                })

            console.log('Deletado com sucesso!')
            setTimeout(() => {
                setRefreshItens(1)
            }, 3000);
        } else if (value == 2) {
            setRefreshItens(2)
        }
    }

    return (
        <div>
            <div className="contaainer">
                <div className="infos">
                    <a id="prd">Produto</a>
                    <a id="cat">Categoria</a>
                    <a id="val">Valor</a>
                </div>
                {
                    typeof listProducts != 'undefined' &&
                    listProducts.map((value) => {
                        return (
                            <div className="input-conteiner">
                                <InputEdit
                                    id={value.id}
                                    name={value.name}
                                    category={value.category}
                                    value={value.value}
                                    updateList={updateList}
                                />
                            </div>
                        )
                    }
                    )

                }
            </div>
            <div className="add-container">
                <div className="add-button">
                    <Link to='/Register' className='add-register' >
                        <a>+</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}