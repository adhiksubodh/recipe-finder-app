import React, { useState } from 'react';
import Search from './SearchForm';
import RecipeList from './RecipeList';
import './RecipeSearch.scss';

const RecipeSearch = () => {
    const [recipes, setRecipes] = useState=([]);

    const handleSearch = async (query) => {
        //fetch recipes from api and update state
        const fetchedRecipes = await searchRecipes(query);
        setRecipes(fetchedRecipes.results); 
       };
       return(
        <div className='recipe-search'>
            <SearchForm onSearch={handleSearch}/>
            <RecipeList recipes={recipes}/>
        </div>
       );
};

export default RecipeSearch;