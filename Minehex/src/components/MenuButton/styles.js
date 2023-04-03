import styled from "styled-components"; 

export const Button = styled.button`
    background-color: #42A5F5;
    color: #E5E5E5;
    width: 300px;
    height: 100px;
    border-radius: 10px;
    font-size: ${(props) => props.textsize};
    margin-bottom: ${(props) => props.margin};

    @media (min-width: 1024px){
        cursor: pointer;

        :hover{
            background: #276393;
        }

    }
`;