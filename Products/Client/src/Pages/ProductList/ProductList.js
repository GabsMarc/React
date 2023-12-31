import React from "react";
import './ProductList.css'
import ListItens from "../../components/List/List.js";
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'

export default function ProductList() {
    return (
        <div>
            <div className="product-container">
                <Header />
                <div className="list-title">
                    <h2>Lista de registros</h2>
                </div>
                <div className="list-container">
                    <ListItens />
                </div>
            </div>
            <Footer />
        </div>
    )
}