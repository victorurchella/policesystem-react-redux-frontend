import styled from 'styled-components';

export const Form = styled.form`

    width: 813px;

    font-family: Arial, Helvetica, sans-serif;

    margin: 3.5vh 0 0 150px;
    padding-bottom: 10px;

    user-select: none;

    a {
        text-decoration: none;
    }

    h1 {
        font-size: 29px;
        color: #011024;
    }

    div {
        float: left;
        margin: 15px 15px 15px 0;
    }

    label {
        font-size: 19px;
        color: #011024;
        margin-bottom: 5px;
    }

    input::-webkit-outer-spin-button, /* Remover o botãozinho de aumentar e diminuir o valor do input type='number' */
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    input {
        width: 350px;
        height: 20px;
        background-color: transparent;
        color: #011024;

        border: 0 none;
        border-bottom: 2px solid #011024;
        box-shadow: 0 0 0 0;
        
        padding: 3px;
    }

    textarea {
        background-color: transparent;
        color: #011024;

        resize: none;

        border: 2px solid #011024;
        border-radius: 4px;

        padding: 3px;

    }

    #nomeCP {
        width: 600px;
    }

    #data {
        width: 140px;
    }

    #multa {
        width: 140px;
    }

    #tempo {
        width: 210px;
    }

    #status {
        width: 80px;
    }

    #desc {
        width: 775px;
        height: 110px;
        font-size: 15px;
    }

    #btn {
        width: 775px;
        height: 50px;
        background-color: #011024;

        margin: -15px 0 0 0;

        color: #f4f4f4;

        border: 1px solid #f4f4f4;
        border-radius: 5px;

        font-weight: bold;
        font-size: 24px;

        transition: all 0.3s ease-in-out;
    }
    
    #btn:hover {
        background-color: #f4f4f4;
        color: #011024;
        border: 1px solid #011024;
    }

`;

export default Form