import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';



export default function Header(props) {

    
    return (
        <>
            <div className='header-component'>
                <div className='header-logo' >
                    <div style={{width: 10}}>
                        <Link to='/' className='Logo'><h1>GabsMarc</h1></Link>
                    </div>
                </div>
                <div className='header-options'>
                    <ul>
                        <Link to='/Register' className='Logo'><li>Cadastro</li></Link>
                        <li>Seus Itens</li>
                    </ul>
                </div>
            </div>
        </>
    )
}