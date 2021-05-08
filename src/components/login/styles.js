/* eslint linebreak-style: ["error", "windows"] */
import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    margin-top: 70px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 35vw;
    height: 70vh;

`;

export const Tittle = styled.h1`
    font-family: Helvetica, sans-serif;
    text-align: center;
    color: #046cd4;
    margin-top: 20px;
    padding: 45px 0;
`;

export const Botao = styled.button`
    width: 23.5vw;
    height: 40px;
    background-color: #4a6282;

    font-weight: bold;
    color: #fff;
    font-size: 15px;

    border: 1px solid #046cd4;
    border-radius: 5px;

    transition: all 1s ease;

    :hover {
        background-color: #046cd4;
        border: 1px solid #4a6282;
    }
`;

export const Form = styled.form`

    div {
        margin: 0 0 30px 0;
    }

    label {
        font-family: Helvetica, sans-serif;
        color: #808080;
    }

    input {
        width: 23.5vw;
        height: 25px;
        border: 1px solid #4a6282;
        border-radius: 5px;
    }
`;
