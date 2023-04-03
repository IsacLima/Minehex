import { Fragment } from "react";
import MenuButton from "../components/MenuButton";
import GlobalStyles from "../styles/global";
import Container from "../components/ContainerFlex";
import { Link } from "react-router-dom";

export default function Home(){
 
    return (
        <Fragment>
            <GlobalStyles/>
 
            <Container>
                
                <Link to="/start">
                    <MenuButton text='Jogar' first></MenuButton>
                </Link>
                
                <Link to="/options">
                    <MenuButton text='Personalizar'></MenuButton>
                </Link>

            </Container>
            
        </Fragment>
        
    );
};