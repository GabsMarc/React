import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import { ToastContainer, toast, } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from "react";
import axios from "axios";


const Container = styled.div`
  
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const Title = styled.h2`


`


function App() {

  const [users, setUsers] = useState()
  const [onEdit, setOnEdit] = useState(null)

  const GetUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800')
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    GetUsers()
  }, [setUsers])

  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form />
        <Grid 
        users={users} 
        />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
      <GlobalStyle />
    </>
  );
}

export default App




