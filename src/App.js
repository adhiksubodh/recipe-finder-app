import React, {useState} from 'react';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import RecipeList from './components/RecipeSearch/RecipeList';
import Filter from './components/Filter/Filter';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState('');

  const handleSearch = async(query) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=860c5e707aeb44c693c08aec775c1949`
      );

      if(!response.ok) {
        throw new Error('Network response was not ok');
      }

    const data = await response.json(); 
    const fetchedRecipes = data.results.map(recipe => ({
      id:recipe.id,
      title: recipe.title,
      description:recipe.summary || 'No description available',
      image: recipe.image,
    }));
    
    return filters
    ? fetchedRecipes.filter(recipe => 
      recipe.description.toLowerCase().includes(filters.toLowerCase())
      )
      : fetchedRecipes;
   } catch (error){
    console.error('Error fetching recipes:', error);
    return [];
   }
};
  const handleFilterChange = (filter) =>{
    setFilters(filter);
  };
  return (
    <div>
<h1>Recipe Finder</h1>
<Filter onFilterChange={handleFilterChange} />
<RecipeSearch onSearch={handleSearch}/>
 </div>
  );
}

export default App;
