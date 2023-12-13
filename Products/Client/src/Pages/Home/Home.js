import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import imgNode from '../../image/NODE.png'
import imgSQL from '../../image/MySQL.png'
import imgReact from '../../image/React.png'

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
          </div>
        </div>
        <div className='secondary-container'>
          <div className='secondary-infos'>
          </div>
        </div>

      </div>
      <Footer />

    </div>
  );
}

