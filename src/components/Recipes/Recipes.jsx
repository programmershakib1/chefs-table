import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleRecipeQueue}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect( () => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    } , []);

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    recipes.map((recipe, idx) => <Recipe 
                    key={idx} 
                    recipe={recipe}
                    handleRecipeQueue={handleRecipeQueue}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

Recipes.propTypes = {
    handleRecipeQueue: PropTypes.func
}

export default Recipes;