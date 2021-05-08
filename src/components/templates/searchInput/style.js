import styled from 'styled-components';

export const Search = styled.input`
    width: 380px;
    height: 25px;

    margin: 30px 0 0 150px;
    padding: 15px 5px;

    border: none;
    border-bottom: 1.5px solid #020f21;

    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;

export default Search