import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"
import Rosa from "../../image/Rosa.png"

interface CardProps {
    TypeOfAccess: boolean  
}


export const Card: React.FC<CardProps> = ({ TypeOfAccess }) => {

    const [access, setAccess] = useState<{ title: string, obs: string, link: string }>({
        title: '',
        obs: '',
        link: ''
    }
    );
    const [obs, setObs] = useState('');

    useEffect(() => {
        Access()
    }, [TypeOfAccess])


    function Access() {
        if (TypeOfAccess) {
            setAccess({
                title: 'Entrar',
                obs: 'Faça login para acessar o cardapio da Hamburgueria DIVINO',
                link: 'Não tem uma conta?'
            })
        } else {
            setAccess({
                title: 'Criar conta',
                obs: 'Crie uma conta para acessar o cardapio da Hamburgueria DIVINO',
                link: 'Já tem uma conta?'
            }
            )
        }

    }

    return (
        <Container>
            <Background>
                <Input_Container>
                    <Title>{access.title}</Title>
                    <Card_Access>
                        <Form>
                            <span>{access.obs}😊</span>
                            <Input placeholder="Endereço de Email" type="email" />
                            <Input placeholder="Senha" type="password" />
                            <Button type="button">Entrar</Button>
                        </Form>
                        <Pages to={'/Register'}>{access.link}</Pages>
                    </Card_Access>
                </Input_Container>

            </Background>

            <Footer />
        </Container>
    )
}





const Container = styled.div`
    display: flex;
    flex-direction: column;

`


const Background = styled.div`
    background-image: url(${Rosa});
    background-size: cover;
    width: 100vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



const Input_Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`


const Title = styled.h1`
    color: #000000;
    font-family: overpass;
    font-size: 40px;
`


const Card_Access = styled.div`
    width: 700px;
    height: 350px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 5px #00000016;
    display: flex;
    flex-direction: column;

`

const Pages = styled(Link)`
    font-family: overpass;
    color: #cfcfcf;
    text-decoration: none;
    align-self: flex-end;
    margin-right: 15px;
    font-weight: bold;

    &:hover {
        color: #fa6a8e;
    }
`


const Form = styled.form`
    /* background-color: purple; */
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    span{
        font-family: overpass;
        color: #cfcfcf;
    }
`

const Input = styled.input`
    height: 40px;
    width: 300px;
    border-radius: 5px;
    border: 0;
    background-color: #cfcfcf;
    margin: 5px;
    padding-left: 15px;
    padding-right: 15px;
    

    &::placeholder{
        color: #a3a3a3;
        font-weight: bold;
    }

`

const Button = styled.button`
    width: 130px;
    height: 35px;
    border: 0;
    border-radius: 5px;
    font-family: overpass;
    font-size: 17px;
    font-weight: bold;
    background-color: #ffc400;
    color: white;
    align-self: center;
    margin-left: 270px;

    &:hover{
        cursor: pointer;
        background-color: #ff9900;
        transition: 0.5s;
    }
`


