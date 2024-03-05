import { FaHome, FaShoppingCart } from "react-icons/fa"
import { IoLogOut } from "react-icons/io5";
import styled from "styled-components"



export function Sidebar() {
    return (
        <Sidebar_Container>
            <Sidebar_Options>
                <Sidebar_Buttons>

                    <a href=""><FaHome /></a>
                    <span>Página inicial</span>
                </Sidebar_Buttons>

                <Sidebar_Buttons>
                    <a href=""><FaShoppingCart /></a>
                    <span>Carrinho</span>
                </Sidebar_Buttons>

                <Sidebar_Buttons>
                    <a href=""><IoLogOut />desconectar</a>
                </Sidebar_Buttons>
            </Sidebar_Options>
        </Sidebar_Container>
    )
}


const Sidebar_Container = styled.div`
    background-color: rebeccapurple;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 900px;
    width: 200px;
    transition: 0.5s;
    position: absolute;
    
    &:hover{
        width: 200px;
        
    }
    
    `

const Sidebar_Options = styled.div`
    display: flex;
    flex-direction: column;

    a{
        text-decoration: none;
        color: black;
        font-size: 30px;
        font-family: overpass;
    }
`

const Sidebar_Buttons = styled.div`

`

