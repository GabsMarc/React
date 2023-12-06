import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';



export default function Header(props) {


    return (
        <>
            <div className='header-component'>
                <div className='logo'>
                    <Link to='/'><li>GabsMarc</li></Link>
                </div>
                <div className='nav-options'>
                    <ul>
                        <li>
                            <Link to='/Register' className='options' ><li>Cadastro</li></Link>
                        </li>
                        <li className='dropdown'>
                            <a id='title'>Produtos</a>
                            <div className='dropdown-menu'>
                                <Link to='/Product' className='options' ><li>Seus Produtos</li></Link>
                                <Link to='/Product' className='options' ><li>Alterar Produtos</li></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}