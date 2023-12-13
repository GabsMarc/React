import React from "react";
import './ProductList.css'
import ListItens from "../../components/List/List.js";
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'

export default function ProductList() {
    return (
        <div className="product-container">
            <Header />
            <div className="list-title">
                <h2>Titulo</h2>
            </div>
            <div className="list-container">
                <ListItens />
            </div>
            <Footer />
        </div>
    )
}