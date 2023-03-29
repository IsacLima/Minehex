import { Button } from "./styles"

export function MenuButton({text, small}){
    return (
        <Button textsize={small ? '25px' : '32px'}>{text}</Button>
    );
} 