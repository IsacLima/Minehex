import { Fragment } from "react";
import MenuButton from "../components/MenuButton";
import GlobalStyles from "../styles/global";
import ContainerFlex from "../components/ContainerFlex";
import { Link } from "react-router-dom";

export default function Home(){
 
    return (
        <Fragment>
            <GlobalStyles/>
 
            <ContainerFlex color="#262626">
                
                <Link to="/start">
                    <MenuButton text='Jogar' first></MenuButton>
                </Link>
                
                <Link to="/options">
                    <MenuButton text='Personalizar'></MenuButton>
                </Link>

            </ContainerFlex>
            
        </Fragment>
        
    );
};