import React, { useState, useEffect } from "react";
import './List.css'
import Axios from 'axios'
import { InputEdit } from "../Input/Input";
import { Link } from 'react-router-dom';
import { UpdateModal } from "../../Pages/UpdateModal/UpdateModal";


export default function ListItens() {

    const [listProducts, setListProducts] = useState([])
    const [refreshItens, setRefreshItens] = useState()
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [updateID, setUpdateId] = useState()


    useEffect(() => {
        refreshList()
    }, [refreshItens, listProducts])


    function refreshList() {
        Axios.get('http://localhost:3001/getProduct').then((response) => {
            setListProducts(response.data)
        })
    }

    function openModal(open, id) {
        if (open == true) {
            setOpenModalUpdate(!openModalUpdate)
            setUpdateId(id)
        } else {
            setOpenModalUpdate(!openModalUpdate)
        }
    }

    function ModalUpdate() {
        if (openModalUpdate) {
            return (
                <UpdateModal
                    openModalUpdate={openModal}
                    id={updateID}
                    start={true}
                />
            )
        }
    }

    function deleteItem(value, id) {
        if (value == 1) {
            Axios
                .delete(`http://localhost:3001/delete/${id}`)
                .then(({ data }) => {
                    const newArray = listProducts.filter((list) => list.id !== id)

                    setListProducts(newArray)
                })
            console.log('Deletado com sucesso!')
            setRefreshItens(!refreshItens)
        } else if (value == 2) {
            setRefreshItens(!refreshItens)
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
                                    deleteItem={deleteItem}
                                    openModal={openModal}
                                />
                            </div>
                        )
                    }
                    )
                }
                {
                    ModalUpdate()
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