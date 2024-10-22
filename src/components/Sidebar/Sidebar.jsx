import PropTypes from 'prop-types';
const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {
  return (
    <div className="md:w-1/3 border rounded-xl pt-4 px-7 bg-base-100">
      <h2 className="border-b mx-auto font-semibold text-2xl text-gray-800 text-center">
        Want To Cook: {recipeQueue.length}
      </h2>
      {/* Want to cook table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id)
                      calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
                    }}
                    className="btn bg-green-400 rounded-full px-2 py-1 md:px-4 md:py-2 my-2 text-gray-800 font-medium"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Currently cooking table */}
      <h2 className="border-b mx-auto mt-8 font-semibold text-2xl text-gray-800 text-center">
        Currently Cooking: {preparedRecipe.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr className="border-none">
              <th></th>
              <td></td>
              <td>Total Time = {totalTime}</td>
              <td>Total Calories = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array,
  handleRemove: PropTypes.func,
  preparedRecipe: PropTypes.array,
  calculateTimeAndCalories: PropTypes.func,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number
}

export default Sidebar;
