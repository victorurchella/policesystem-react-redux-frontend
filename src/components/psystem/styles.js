import styled from 'styled-components';

export const Tabela = styled.table`

    font-family: Arial, Helvetica, sans-serif;

    width: 85vw; 
    text-align: center;

    margin: 10px 0 0 150px;

    user-select: none;

    thead {
        background: #011024;
        font-weight: bold;
        color:#fff;
    }

    thead th:hover {
        background: #031c3d;
    }

    tbody tr:nth-child(2n){
        background: #ccc;
    }

    th, td {
        padding: 7px 0;
    }

    button {
        width: 27px;
        height: 26px;
        
        border-radius: 4px;
        border: 1px solid gray;

        margin-right: 5px;
    }

    img {
        margin: -13px 0 0 -7px;
    }
`;
