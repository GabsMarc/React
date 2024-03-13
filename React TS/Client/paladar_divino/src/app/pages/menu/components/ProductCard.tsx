import React, { FC, PropsWithChildren } from "react"
import styled from "styled-components"
import Hamburguer from '../../../../image/hamburguer-teste.jpg'
import Bebida from '../../../../image/bebida.jpg'
import Salgado from '../../../../image/Salgado.jpg'

interface IProductCard{
    name?: string,
    value?: string,
    img?: string
}

export const ProductCard: React.FC<PropsWithChildren<IProductCard>> = ({
    name,
    value,
    img
}) => {
 
    return (
        <CardContainer>
            <ImageProduct image={Salgado}/>
            <ProductInfo>
                <Product>
                    <p>{name}</p>
                </Product>
                <Price>
                    <p>R${value}</p>
                </Price>
            </ProductInfo>
            <ButtonContainner onClick={() => { console.log('clicou') }}>
                <span>Adicionar</span>
            </ButtonContainner>
        </CardContainer>
    )
}


const CardContainer = styled.div`
    background-color: #eeeeee;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px 5px #00000057;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: overpass;
`

const ImageProduct = styled.div<{ image: any}>`
    background-image: url(${props => props.image});
    background-size: cover;
    width: 270px;
    height: 160px;
    display: flex;
    border-radius: 10px;
    flex-grow: 1;
    margin: 10px 10px 10px 10px;
    box-shadow: 0px 2px 5px 3px #00000057;
`

const ProductInfo = styled.div`
    width: 95%;
    display: flex;
    flex-grow: 5;
    flex-direction: column;
    margin: 0px 0px 10px 0px;
`

const Product = styled.div`
    display: flex;
    flex-grow: 1;

    p {
        padding: 5px 5px 0px 5px;
        font-size: 23px;
    }
    
`

const Price = styled.div`
    /* background-color: yellow; */
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: end;
    flex-grow: 1;

    p {
        font-size: 23px;
        font-weight: bold;
    }
`


const ButtonContainner = styled.div`
    background-color: #C00038;
    width: 100%;
    flex-grow: 2;
    display: flex;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    span{
        color: white;
        font-size: 20px;
    }


    &:hover{
        background-color: #99002b;
    }
`






