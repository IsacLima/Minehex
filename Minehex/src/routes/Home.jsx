import { Fragment } from "react";
import MenuButton from "../components/MenuButton";
import GlobalStyles from "../styles/global";

export default function Home(){
 
    return (
        <Fragment>
            <GlobalStyles/>
            <MenuButton text='Jogar' first></MenuButton>
            <MenuButton text='Personalizar'></MenuButton>
        </Fragment>
        
    );
};