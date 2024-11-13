import React from "react";

const Filter = ({ onFilterChange }) => {
    const handleFilterChange = (e) => {
        onFilterChange(e.target.value); //update filters based on user input 
};

return(
    <div>
        <label>Filter by Cuisine:</label>
        <select onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
            <option value="indian">Indian</option>
        </select>
    </div>
);
};

export default Filter;