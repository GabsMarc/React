import styled from "styled-components"
import { Sidebar } from "./components/Sidebar"
import { ProductCard } from "./components/ProductCard"
import { useContext, useEffect, useState } from "react"
import banner from '../../../image/Rosa.png'
import homeBanner from '../../../image/melhor.png'
import { Footer } from "../../Shared/components/Footer"
import { LoginContext } from "../../../context"



export function Menu() {

    const loginContext = useContext(LoginContext)

    const [homePage, setHomePage] = useState(false)
    const [productOption, setProductOption] = useState('')


    useEffect(() => {
        setHomePage(true)
    }, [])

    function CardContent() {
        if (homePage) {
            return (
                <HomeContainer>
                    <HomeBanner />
                    <h2>Promoções</h2>
                    <h2>{loginContext.customerName}</h2>
                    <HomePromo>
                        <ProductCard name="Melted" value={'25,00'} img="Hamburguer" />
                        <ProductCard name="Melted" value={'25,00'} />
                        <ProductCard name="Melted" value={'25,00'} />
                    </HomePromo>
                </HomeContainer>
            )
        } else {
            return (
                <Cards>
                    {CardOption()}
                </Cards>
            )
        }
    }


    function CardOption() {
        switch (productOption) {
            case 'S':
                return <ProductCard name="Salgado" value={'27,90'} />
                break;
            case 'B':
                return <ProductCard name="Bebida" value={'27,90'} />
                break;
            case 'H':
                return <ProductCard name="Hamburguer" value={'27,90'} />
                break;
        }
    }


    function ProductOption(option: string) {
        setHomePage(false)
        setProductOption(option)
    }



    return (
        <MenuPage>
            <Sidebar onClickHomePage={setHomePage} />
            <MenuContainer>
                <Page>
                    <Banner />
                    <Options>
                        <span onClick={() => ProductOption('S')}>Salgados</span>
                        <span onClick={() => ProductOption('H')}>Hamburguers</span>
                        <span onClick={() => ProductOption('B')}>Bebidas</span>
                    </Options>
                    <CardContainer>
                        {CardContent()}
                    </CardContainer>
                    <Footer />
                </Page>
            </MenuContainer>
        </MenuPage>
    )
}






const MenuPage = styled.div`
    height: 100%;
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
    height: 400px;
    background-image: url(${banner});
    border-radius: 10px;
    box-shadow: 0px 10px 10px 5px #00000057;
    align-self: center;
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
    padding: 20px 20px 50px 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 10px 10px 5px #00000057;
    margin-bottom: 40px;
`

const Cards = styled.div`
    display: flex;
    gap: 47px;
    flex-wrap: wrap;
    justify-content: flex-start;
`


const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    h2{
        align-self: center;
        font-family: overpass;
        margin: 15px 0px 15px 0px;
        color: #FF677E;
        font-size: 40px;
        
    }
`

const HomeBanner = styled.div`
    background-image: url(${homeBanner});
    width: 100%;
    height: 400px;
    border-radius: 10px;
    
`

const HomePromo = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`








