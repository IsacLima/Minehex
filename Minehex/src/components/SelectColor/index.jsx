import { Container, 
        BoxColors,
        Text,
        Colors,
        Color,
        Example,
        Hive 
} from "./styles";


export default function Selector() {
    return (
        <Container>

            <BoxColors>
                <Text>COR PRIMÁRIA:</Text>
                <Colors>
                    <Color/>
                    <Color/>
                </Colors>
                <Text>COR SECUNDÁRIA:</Text>
                <Colors>
                    <Color/>
                    <Color/>
                    <Color/>
                </Colors>
            </BoxColors>
    
            <Example>
                <Hive/>
            </Example>

        </Container>
    );
}