import React, { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";

import { AppContext } from "../../../Context/AppContext";

import { NavBar } from "../../Organisms";
import {
  RecipeDetails,
  RecipePageItem,
  NutritionDetails
} from "../../Molecules";
import { Column, Row } from "../../Layouts";

export const RecipePage = () => {
  const { savedRecipes } = useContext(AppContext);

  let { recipe_id } = useParams();
  const recipeId = decodeURI(recipe_id);
  const [label, source] = recipeId.split("-from-");
  const recipe = savedRecipes
    .filter(recipe => {
      return recipe.label === label && recipe.source === source;
    })
    .pop();

  return recipe ? (
    <Column>
      <NavBar />
      <Row alignItems="flex-start">
        <RecipePageItem recipe={recipe} />
        <RecipeDetails recipe={recipe} />
      </Row>
      <NutritionDetails recipe={recipe} />
    </Column>
  ) : (
    <Redirect to="/" />
  );
};
