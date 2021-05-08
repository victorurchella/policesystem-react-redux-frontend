import styled from 'styled-components';

export const Backg = styled.div`
    width: 85vw;

    margin: 3.5vh 0 0 0;

    a { 
        text-decoration: none;
    }

    img {
        margin: -15px 0 0 -7px;
    }

`;

export const Botao = styled.form`

    width: 775px;
    height: 35px;
    background-color: #011024;

    margin: 360px 0 0 150px ;

    text-align: center;

    color: #f4f4f4;

    border: 1px solid #f4f4f4;
    border-radius: 5px;

    font-weight: bold;
    font-size: 22px;

    transition: all 0.3s ease-in-out;

    user-select: none;
    
    :hover {
        background-color: #f4f4f4;
        color: #011024;
        border: 1px solid #011024;
    }

`;

export default Backg;
