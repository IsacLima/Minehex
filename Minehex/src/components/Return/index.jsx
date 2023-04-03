import { Link } from "react-router-dom";
import { Text, Container } from "./styles";

export default function Return(){
    return(
        <Container>

            <Link to="/"><Text> &lt; Retornar ao menu </Text></Link>

        </Container>
    );
}