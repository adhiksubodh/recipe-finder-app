import React from "react";

const RecipeItem =({ recipe }) => {
    return (
        <div className="recipe-item">
            <img src="recipe.image" alt={recipe.title} />
            <h3>{recipe.title}</h3>
        </div>
    );
};

export default RecipeItem;