import PropTypes from 'prop-types';
const Recipe = ({ recipe, handleRecipeQueue }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 border">
        <figure className="p-7 h-[300px]">
          <img className="rounded-xl h-full w-full"
            src={recipe_image}
            alt="Recipe Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe_name}</h2>
          <p className="text-gray-600 text-base">{short_description}</p>
          <h3 className="card-title text-lg text-gray-800 font-medium">Ingredients: {ingredients.length}</h3>
          <ul className="ml-8">
                {
                    ingredients.map((item, idx) => <li className="list-disc text-gray-600" key={idx}>{item}</li>)
                }
          </ul>
          <div className="flex gap-4">
                <div className="flex items-center gap-3">
                    <i className="fa-regular fa-clock text-2xl"></i>
                    <p>{preparing_time} minute</p>
                </div>
                <div className="flex items-center gap-3">
                    <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                    <p>{calories} calorie</p>
                </div>
          </div>
          <div className="card-actions">
            <button onClick={() => handleRecipeQueue(recipe)} className="btn bg-green-400 rounded-full px-6 text-xl text-gray-800 mt-5 font-medium">Want To Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleRecipeQueue: PropTypes.func
}

export default Recipe;
