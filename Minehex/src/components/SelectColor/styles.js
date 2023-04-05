import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: auto;

    @media(min-width: 1024px){
        height: calc( 100% - 111px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0px 200px 0 105px;
    }
`;

export const Colors = styled.div`
    height: 50px;
    margin: 15px 0 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 31px;
    width: ${(props) => props.width};

    @media (min-width: 1024px){
        margin-bottom: 85px;
    }
`;

export const Color = styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid #E5E5E5;
    background-color: ${(props) => props.bg};

    @media (min-width: 1024px){
        cursor: pointer;
    }
`;

export const BoxColors = styled.div`
    width: auto;
    margin-top: 60px;
    margin-left: 31px;
    
    height: auto;

    @media (min-width: 1024px){
        margin: 0;
    }
`;

export const Text = styled.div`
    height 40px;
    width: auto;
    font-size: 25px;
    color: #E5E5E5;

    @media(min-width: 1024px){
        font-size: 32px;
    }
`;

export const Example = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
`;

export const Hive = styled.img`
    width: 200px;
    height: 180px;
    margin-bottom: 120px;

    @media (min-width: 1024px){
        width: 266px;
        height: 240px;
    }
`;

