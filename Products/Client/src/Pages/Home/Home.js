import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'

export default function App() {
  return (
    <div className="App">
      <Header />

      <body>

        <div className='primary-infos'>
          <div id='primary'>
            <a>Projeto CRUD</a>
          </div>
          <div className='image'>
            <div className='node'/>
            <div className='sql'/>
            <div className='react'/>
          </div>
        </div>

        <div className='box-infos'>
          <div id='secondary'>
            <a id='title'>Projeto</a>
            <a id='about'>Cadastro de produtos</a>
            <a>Projeto criado para o estudo do React em conjunto do NODE.js</a>
          </div>
        </div>

      </body>

    </div>
  );
}

