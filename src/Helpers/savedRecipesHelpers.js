export const saveRecipe = (
  savedRecipes,
  setSavedRecipes,
  recipe,
  setRecipeSaved
) => {
  const cachedSavedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
  const updatedSavedRecipes = cachedSavedRecipes.concat(recipe);
  setSavedRecipes(updatedSavedRecipes);
  localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
  setRecipeSaved(true);
};

export const deleteRecipe = (
  savedRecipes,
  setSavedRecipes,
  recipe,
  setRecipeSaved
) => {
  const cachedSavedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
  const updatedSavedRecipes = cachedSavedRecipes.filter(
    savedRecipe => savedRecipe.url !== recipe.url
  );
  setSavedRecipes(updatedSavedRecipes);
  localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
  setRecipeSaved(false);
};
