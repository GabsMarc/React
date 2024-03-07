import { Navbar } from "../../Shared/components/Navbar"
import styled from "styled-components"
import { Footer } from "../../Shared/components/Footer"

import Rosa from "../../../image/a.png"




export const Dashboard = () => {

    return (
        <Dashboard_Container>
            <Navbar show={true}/>
            <Banner></Banner>
            <Footer/>
        </Dashboard_Container>
    )

}


const Dashboard_Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #C00038;
`

const Banner = styled.div`
    background-image: url(${Rosa});
    background-size: cover;
    height: 80vh;  
    margin-top: 10px;
    margin-bottom: 10px; 
`