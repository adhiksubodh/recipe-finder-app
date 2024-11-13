import React, { useState } from 'react';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import './RecipeSearch.scss';

const RecipeSearch = ({ onSearch }) => {
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async (query) => {
        //fetch recipes from api and update state
        const fetchedRecipes = await onSearch(query);
        setRecipes(fetchedRecipes); 
       };

       return(
        <div className='recipe-search'>
            <SearchForm onSearch={handleSearch}/>
            <RecipeList recipes={recipes}/>
        </div>
       );
};

export default RecipeSearch;