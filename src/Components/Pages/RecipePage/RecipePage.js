import React, { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";

import { AppContext } from "../../../Context/AppContext";

import { NavBar } from "../../Organisms";
import {
  RecipeDetails,
  RecipePageItem,
  NutritionalDetails
} from "../../Molecules";
import { Column, Row } from "../../Layouts";

export const RecipePage = () => {
  let { savedRecipes } = useContext(AppContext);
  const cachedRecipes = JSON.parse(localStorage.getItem("recipes"));

  let { recipe_id } = useParams();
  const recipeId = decodeURI(recipe_id);
  const [label, source] = recipeId.split("-from-");

  // Looks through recipes that we've searched for and cached
  let recipe = cachedRecipes.filter(recipe => {
    return recipe.label === label && recipe.source === source;
  });
  // Looks through recipes that user has saved previously
  if (!recipe.length) {
    recipe = savedRecipes.filter(recipe => {
      return recipe.label === label && recipe.source === source;
    });
  }
  recipe.length ? (recipe = recipe.pop()) : (recipe = null);

  // Redirecting to home page if neither is the case for now, but would make another api call here otherwise

  return recipe ? (
    <Column>
      <NavBar />
      <Row alignItems="center">
        <RecipePageItem recipe={recipe} />
        <RecipeDetails recipe={recipe} />
      </Row>
      <NutritionalDetails recipe={recipe} />
    </Column>
  ) : (
    <Redirect to="/" />
  );
};
