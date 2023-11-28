import React from 'react'
import Home from '../../Pages/Home/Home'
import Register from '../../Pages/Register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function appRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Register' element={<Register />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default appRoutes