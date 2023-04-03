import { Fragment } from "react";
import MenuButton from "../components/MenuButton";
import GlobalStyles from "../styles/global";
import ContainerFlex from "../components/ContainerFlex";

export default function Home(){
 
    return (
        <Fragment>
            <GlobalStyles/>

            
                
            <ContainerFlex>
                <MenuButton text='Jogar' first></MenuButton>
                <MenuButton text='Personalizar'></MenuButton>
            </ContainerFlex>
            
            
        </Fragment>
        
    );
};