import { Container, 
        BoxColors,
        Text,
        Colors,
        Color,
        Example,
        Hive 
} from "./styles";
import img  from "../../assets/hive-WR.png";


export default function Selector() {
    return (
        <Container>

            <BoxColors>
                <Text>COR PRIMÁRIA:</Text>
                <Colors width="140px">
                    <Color bg="#262626"/>
                    <Color bg="#E5E5E5"/>
                </Colors>
                <Text>COR SECUNDÁRIA:</Text>
                <Colors  width="230px">
                    <Color bg="#F44336"/>
                    <Color bg="#42A5F5"/>
                    <Color bg="#CDDC39"/>
                </Colors>
            </BoxColors>
    
            <Example>
                <Hive src={img}/>
            </Example>

        </Container>
    );
}