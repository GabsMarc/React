import React from 'react'
import Home from '../../Pages/Home/Home'
import Register from '../../Pages/Register/Register'
import Product from '../../Pages/Product/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function appRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Register' element={<Register />}></Route>
                <Route path='/Product' element={<Product />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default appRoutes