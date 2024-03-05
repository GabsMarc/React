import styled from "styled-components"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "../../Shared/components/Footer"



export function Menu() {
    return (
        <>
            <MenuContainer>
                {/* <MenuSidebar> */}
                <Sidebar />
                {/* </MenuSidebar> */}
                <Page>
                    <h1>teste</h1>
                </Page>

            </MenuContainer>
            <MenuFooter>
                <Footer />
            </MenuFooter>
        </>
    )
}


const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 900px;
    background-color: #995833;
    /* background-color: #ececec; */

`

const Page = styled.div`
    display: flex;
    background-color: #ff1e00;
    width: 200vw;
    padding-left: 80px;
`

const MenuSidebar = styled.div`
    display: flex;
    height: 100px;
`

const MenuFooter = styled.div`
    display: flex;
    background-color: #2673b6;
    
`