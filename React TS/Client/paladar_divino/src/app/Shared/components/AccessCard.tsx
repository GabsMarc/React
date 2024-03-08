import React, { useEffect, useState, PropsWithChildren } from "react"
import styled from "styled-components"
import { Footer } from "./Footer"
import { Link } from "react-router-dom"
import Rosa from "../../../image/Rosa.png"

interface ICardProps {
    TypeOfAccess: boolean
    name?: string
    lastname?: string
    email?: string
    password?: string
    confirmPassword?: string
    onChangeName?: (newValue: string) => void
    onChangeLastname?: (newValue: string) => void
    onChangeEmail?: (newValue: string) => void
    onChangePassword?: (newValue: string) => void
    onChangeConfirmPassword?: (newValue: string) => void
    onClick?: (value: boolean) => void
}


export const Card: React.FC<PropsWithChildren<ICardProps>> = ({
    TypeOfAccess,
    name,
    lastname,
    email,
    password,
    confirmPassword,
    onChangeName,
    onChangeLastname,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onClick,
}) => {





    const [access, setAccess] = useState({
        title: '',
        obs: '',
        link: '',
        toPage: '',
    }
    );



    useEffect(() => {
        Access()
    }, [TypeOfAccess])



    function handleConfirm() {
        onClick?.(true)
    }



    function Access() {
        if (TypeOfAccess) {
            setAccess({
                title: 'Entrar',
                obs: 'Faça login para acessar o cardapio da Hamburgueria DIVINO',
                link: 'Não tem uma conta?',
                toPage: '/register'
            })
        } else {
            setAccess({
                title: 'Criar conta',
                obs: 'Crie uma conta para acessar o cardapio da Hamburgueria DIVINO',
                link: 'Já tem uma conta?',
                toPage: '/login'
            }
            )
        }
    }


    function FormAccess() {
        if (TypeOfAccess === true) {
            return (
                <Card_Access $heigth={350}>
                    <Form>
                        <span>{access.obs}😊</span>

                        <Input
                            placeholder="Endereço de Email"
                            type="email"
                            value={email}
                            onChange={e => onChangeEmail?.(e.target.value)}
                        />

                        <Input
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={e => onChangePassword?.(e.target.value)}
                        />

                        <Button
                            type="button"
                            onClick={handleConfirm}
                        >Entrar</Button>
                    </Form>
                    <Pages to={`${access.toPage}`}>{access.link}</Pages>
                </Card_Access>
            )
        } else {
            return (
                <Card_Access $heigth={500}>
                    <Form>
                        <span>{access.obs}😊</span>
                        <Input
                            placeholder="Nome"
                            type="text"
                            value={name}
                            onChange={e => onChangeName?.(e.target.value)}
                        />

                        <Input
                            placeholder="Sobrenome"
                            type="text"
                            value={lastname}
                            onChange={e => onChangeLastname?.(e.target.value)}
                        />

                        <Input
                            placeholder="Endereço de Email"
                            type="email"
                            value={email}
                            onChange={e => onChangeEmail?.(e.target.value)}
                        />

                        <Input
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={e => onChangePassword?.(e.target.value)}
                        />

                        <Input
                            placeholder="Confirmar senha"
                            type="password"
                            value={confirmPassword}
                            onChange={e => onChangeConfirmPassword?.(e.target.value)}
                        />
                        <Button
                            type="button"
                            onClick={handleConfirm}
                        >Criar conta</Button>
                    </Form>
                    <Pages to={`${access.toPage}`}>{access.link}</Pages>
                </Card_Access>
            )
        }
    }


    return (
        <Container>
            <Background>
                <Input_Container>
                    <Title>{access.title}</Title>
                    {FormAccess()}
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


const Card_Access = styled.div<{ $heigth: number }>`
    width: 700px;
    height: ${props => `${props.$heigth}px`};
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
    margin-left: 270px;
    padding-top: 3px;
    transition: 0.5s;

    &:hover{
        cursor: pointer;
        background-color: #ff9900;
    }

`


