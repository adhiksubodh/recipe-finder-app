import React, {useState} from "react";

const SearchForm = ({ onSearch }) => {
    cosnt [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return(
        <form onSubmit={handleSubmit} className="search-form">
            <input 
            type="text"
            placeholder="Search for a recipe..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;