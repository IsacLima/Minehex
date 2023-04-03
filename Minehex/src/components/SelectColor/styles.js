import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
`;

export const Colors = styled.div`
    height: 50px;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 31px;

    :nth-child(4){
        width: 230px;
    }

    :nth-child(2){
        width: 140px;
    }
`;

export const Color = styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid #E5E5E5;

    :nth-child(2){
        background-color: #E5E5E5;
    }

    :nth-child(3){
        background-color: #F44336;
    }

    :nth-child(4){
        background-color: #42A5F5;
    }

    :nth-child(5){
        background-color: #CDDC39;
    }
`;

export const BoxColors = styled.div`
    margin-top: 33px;
    margin-left: 31px;
    width: auto;
`;

export const Text = styled.div`
    height 40px;
    width: 100%;
    font-size: 32px;
    color: #E5E5E5;
`;

export const Example = styled.div`
    width: auto;
`;

export const Hive = styled.div`
    width: auto;
`;

