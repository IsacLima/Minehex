import { Container } from "./styles"

export default function ContainerFlex({children, color}) {
    return (
        <Container bgcolor={color}>
            {children}
        </Container>
    );
}

