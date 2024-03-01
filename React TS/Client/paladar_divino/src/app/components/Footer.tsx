import styled from "styled-components"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { PiHamburgerBold } from "react-icons/pi";
import LogoApp from "../../image/Logo/Hamburgueria Divino.png"

export const Footer = () => {
    return (
        <Footer_Container>
            <Logo>
                <a href="/pagina-inicial"><PiHamburgerBold /></a>
                <img src={LogoApp} width={200} height={200} />
            </Logo>
            <Social>
                <a href=""><FaLinkedin /></a>
                <a href=""><FaGithubSquare /></a>
            </Social>
        </Footer_Container>
    )
}

const Footer_Container = styled.div`
    width: 100%;
    height: 250px;
    background-color: #ececec;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 

`

const Logo = styled.div`
    flex-grow: 10;

    a{
        color: #d82a47;
        font-size: 55px;
        margin-left: 30px;
    }

    span{
        color: #d82a47;
        font-size: 55px;
        margin-left: 30px;
        font-family: overpass;
        /* margin-bottom: 10px; */
    }

`

const Social = styled.div`
    display: flex;
    flex-grow: 1;
    gap: 10px;
    a{
        color: #d82a47;        
        font-size: 35px;
    }

`
