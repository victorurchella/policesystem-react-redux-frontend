import React from 'react'
import { Search } from './style'

export const SearchInput = ({ value, onChange }) => {
    function handleChange(e) {
        onChange(e.target.value)
    }

    return (
        <Search 
        type='search' 
        placeholder='Busque pelo nome' 
        value={value} 
        onChange={handleChange} 
        />
    )

}

export default SearchInput;
