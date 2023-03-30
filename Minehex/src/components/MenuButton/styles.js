import styled from "styled-components"; 

export const Button = styled.button`
    background-color: #42A5F5;
    width: 300px;
    height: 100px;
    border-radius: 10px;
    font-size: ${(props) => props.textsize};
    margin-bottom: ${(props) => props.margin};
`;