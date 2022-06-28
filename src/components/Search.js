import { useState } from 'react';

const Search = ({ submit, activeChange, placeholder, style }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        if (!submit) return;

        if (event.key === 'Enter') {
            event.preventDefault();
            submit(search);
        }
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
        if (!activeChange) return;

        activeChange(event.target.value);
    }

    return (
        <input className="search"
            type="text" placeholder={placeholder} style={style}
            onChange={handleChange}
            onKeyPress={handleSubmit}
        />
    );
}

export default Search;