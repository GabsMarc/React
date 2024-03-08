import styled from "styled-components"
import { Sidebar } from "./components/Sidebar"
import banner from '../../../image/Rosa.png'
import { ProductCard } from "./components/ProductCard"



export function Menu() {
    return (
        <MenuPage>
            <Sidebar />
            <MenuContainer>
                <Page>
                    <Banner />
                    <Options>
                        <span>Salgados</span>
                        <span>Hamburguers</span> 
                        <span>Bebidas</span>
                    </Options>
                    <CardContainer>
                        <Cards>
                            <ProductCard name="Tradicional da Casa" value={'27,90'}/>
                            <ProductCard name="Melted" value={'25,00'}/>
                            <ProductCard name="Classico" value={'22,90'}/>
                            <ProductCard name="Frando Empanado" value={'50,99'}/>
                        </Cards>
                    </CardContainer>
                </Page>
            </MenuContainer>
        </MenuPage>
    )
}






const MenuPage = styled.div`
    height: 2000px;
    background-color: #eeeeee;
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

const Page = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 130px;


`

const Banner = styled.div`
    margin: 30px 0px 30px 0px;
    width: 90vw;
    height: 35vh;
    background-image: url(${banner});
    border-radius: 10px;
    box-shadow: 0px 10px 10px 5px #00000057;
`

const Options = styled.div`
        display: flex;
        flex-direction: row;
        gap: 60px;
        background-color: #C00038;
        justify-content: center;
        padding-top: 5px;
        border-radius: 10px;
        margin-bottom: 30px;
        box-shadow: 0px 10px 10px 5px #00000057;
        
        span {
            transition: 0.3s;
            font-size: 23px;
            cursor: pointer;
            font-family: overpass;
            font-weight: bold;
            color: white;
        }

        span:hover{
            color: #F74D85;
        }
    
`


const CardContainer = styled.div`
    display: flex;
    width: 90vw;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;

`

const Cards = styled.div`
    display: flex;
    gap: 47px;
    flex-wrap: wrap;
    justify-content: flex-start;
`













