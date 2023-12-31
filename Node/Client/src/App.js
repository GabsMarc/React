import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Card from './components/cards/card';

function App() {
  const [values, setValues] = useState()
  const [listGames, setListGames] = useState()

  useEffect(() => {
    Axios.get('http://localhost:3001/getCards').then((response) => {
      setListGames(response.data)
    })
  }, [listGames])

  console.log(listGames)
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }


  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      name: values.name,
      cost: values.cost,
      category: values.category
    }).then((response) => {
      console.log(response)
    })
  }



  return (
    <div className="App-container">
      <div className='register-container'>
        <div class='input-container'>
          <h1>Scrim Shop</h1>

          <input
            type='text'
            name='name'
            placeholder='Nome'
            className='register-input'
            onChange={handleChangeValues}
          />

          <input
            type='text'
            name='cost'
            placeholder='Preço'
            className='register-input'
            onChange={handleChangeValues}
          />

          <input
            type='text'
            name='category'
            placeholder='Categoria'
            className='register-input'
            onChange={handleChangeValues}
          />
        </div>

        <button className='register-button' onClick={() => handleClickButton()}>Cadastrar</button>

        <div className='display-results'>
          {typeof listGames != 'undefined' &&
            listGames.map((value) => {

              return (
                <Card
                  key={value.id}
                  listCard={listGames}
                  setListCard={setListGames}
                  id={value.idgames}
                  name={value.name}
                  cost={value.cost}
                  category={value.category}
                />
              )

            })}
        </div>
      </div>


    </div>
  );
}

export default App;
