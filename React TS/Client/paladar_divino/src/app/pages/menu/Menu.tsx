import styled from "styled-components"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "../../Shared/components/Footer"
import banner from '../../../image/Rosa.png'



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
                </Page>
            </MenuContainer>
            {/* <MenuFooter>
                <Footer />
            </MenuFooter> */}
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
    box-shadow: 10px 10px 10px 5px #00000057;
`

const Options = styled.div`
        display: flex;
        flex-direction: row;
        gap: 60px;
        background-color: #C00038;
        justify-content: center;
        box-shadow: 10px 10px 10px 5px #00000057;
        padding-top: 5px;
        border-radius: 10px;
        
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






const MenuFooter = styled.div`
    display: flex;
    background-color: #2673b6;
    
`