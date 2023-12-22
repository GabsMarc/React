import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import imgNode from '../../image/NODE.png'
import imgSQL from '../../image/MySQL.png'
import imgReact from '../../image/React.png'
import imgAxios from '../../image/Axios.png' 
import imgExpress from '../../image/Express.png' 

export default function App() {
  return (
    <div className="app">
      <Header />

      <div className='app-container'>
        <div className='primary-container'>
          <div className='image-container'>
            <div className='img-node'>
              <img id='node' src={imgNode} />
            </div>
            <div className='img-sql'>
              <img id='sql' src={imgSQL} />
            </div>
            <div className='img-react'>
              <img id='react' src={imgReact} />
            </div>
            <div className='img-axios'>
              <img id='axios' src={imgAxios} />
            </div>
            <div className='img-express'>
              <img id='express' src={imgExpress} />
            </div>
          </div>
        </div>
        <div className='secondary-container'>
          <div className='secondary-infos'>
            <a id='title'>Projeto</a>
            <a id='title2'>CRUD</a>
            <div className='about-container'>
              <a id='about'>Este projeto foi criado com o proposito de entender 
                a utilização do Node em conjunto com o React </a>
              <a id='about2'>E também para treinar algumas coisas que eu tinha dificuldade :)</a>  
            </div>
          </div>
        </div>

      </div>
      <Footer />

    </div>
  );
}

