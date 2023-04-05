import styled from "styled-components";

export const Container = styled.nav`
    width: auto;
    height: 61px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    @media (min-width: 1024px){
        height: 91px;
    }
`;

export const Text = styled.h2`
    width: auto;
    height: 31px;
    font-size: 18px;
    color: #E5E5E5;
    margin-left: 31px;
    text-decoration: underline;
    cursor: pointer;

    @media(min-width: 1024px){
        font-size: 25px;
    }
`;