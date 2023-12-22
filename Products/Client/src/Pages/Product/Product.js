import React, { useState, useEffect } from 'react'
import './Product.css'
import Header from '../../components/Header/Header.js'
import Card from '../../components/Card/Card.js'
import Footer from '../../components/Footer/Footer.js'
import Axios from 'axios'

export default function Product() {
    const [listProducts, setListProducts] = useState()


    useEffect(() => {
        Axios.get('http://localhost:3001/getProduct').then((response) => {
            setListProducts(response.data)
        })

    }, [listProducts])


    return (
        <div className='container-product'>
            <Header />
            <div className='product-area'>
                {typeof listProducts != 'undefined' &&
                    listProducts.map((value) => {

                        return (
                            <Card
                                key={value.id}
                                name={value.name}
                                category={value.category}
                                value={value.value}
                                active={value.active}
                                image={value.image}
                            />
                        )
                    })}

            <Footer />
            </div>
        </div>
    )
} 