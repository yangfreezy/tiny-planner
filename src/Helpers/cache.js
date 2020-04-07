export const storeRecipesInCache = recipes => {
  const currentRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const updatedRecipes = currentRecipes.concat(
    recipes.map(recipe => recipe.recipe)
  );
  localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
};
