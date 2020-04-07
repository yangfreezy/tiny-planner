export const storeRecipesInCache = recipes => {
  const currentRecipes = JSON.parse(localStorage.getItem("recipes")) || {};
  const updatedRecipes = recipes.reduce(
    (recipeCache, recipe) => (recipeCache[recipe.uri] = recipe),
    currentRecipes
  );
  localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
};

export const getSavedRecipesFromCache = () => {
  return JSON.parse(localStorage.getItem("savedRecipes")) || {};
};
