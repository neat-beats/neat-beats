import { useState } from 'react';

const Search = ({ submit, placeholder, style }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submit(search);
        }
    }

    return (
        <input 
            type="text" placeholder={placeholder} style={style}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleSubmit}
        />
    );
}

export default Search;