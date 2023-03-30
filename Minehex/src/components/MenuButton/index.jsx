import { Button } from "./styles"

export default function MenuButton({text, small, first}){
    return (
        <Button textsize={small ? '25px' : '32px'} margin={first ? '57px' : '0px'}>{text}</Button>
    );
} 