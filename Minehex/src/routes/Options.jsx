import { Fragment } from "react";
import GlobalStyles from "../styles/global";
import Nav from "../components/Return"
import SelectColor from "../components/SelectColor"

export default function Options(){
 
    return (
        <Fragment>
            <GlobalStyles/>
            <Nav/>
            <SelectColor/>
        </Fragment>
        
    );
};