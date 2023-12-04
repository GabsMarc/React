import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import imgNode from '../../image/NODE.png'
import imgSQL from '../../image/MySQL.png'
import imgReact from '../../image/React.png'

export default function App() {
  return (
    <div className="App">
      <Header />

      <body>

        <div className='primary-infos'>
          <div id='primary'>
            <a>Projeto CRUD</a>
          </div>
          <div className='image-container'>
            <img src={imgNode} />
            <img src={imgSQL} />
            <img src={imgReact} />
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
      <Footer />

    </div>
  );
}

