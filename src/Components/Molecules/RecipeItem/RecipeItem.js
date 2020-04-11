import React, { useContext, useState } from "react";

import { AppContext } from "../../../Context/AppContext";
import { saveRecipe, deleteRecipe } from "../../../Helpers/savedRecipesHelpers";

import { WeeklyPlanSelect } from "../../Molecules";
import { Text, PrimaryButton, LinkWrapper } from "../../Atoms/Abstracted";
import { Column, BoxShadowWrapper } from "../../Layouts";
import { MAIN_GREEN } from "../../../Colors";

const linkStyles = {
  fontSize: "12px",
  margin: "10px 0px",
  textDecoration: "none",
  color: "black"
};
const imageStyles = { margin: "25px 0px", width: "200px", height: "auto" };
const columnStyles = { maxWidth: "400px", width: "400px" };
const textStyles = { maxWidth: "200px", fontWeight: "bold" };
const cardStyles = { padding: "50px 50px", margin: "25px 25px" };

export const RecipeItem = React.memo(({ recipe }) => {
  const { savedRecipes, setSavedRecipes } = useContext(AppContext);
  const { label, image, calories, totalTime, url, source } = recipe;
  const recipeIsSaved =
    savedRecipes.filter(savedRecipe => savedRecipe.url === url).length > 0;
  const [recipeSaved, setRecipeSaved] = useState(recipeIsSaved);
  const recipeId = encodeURI(label + "-from-" + source);
  const caloriesValue = +calories.toFixed(0);

  return (
    <BoxShadowWrapper {...cardStyles}>
      <Column {...columnStyles}>
        <LinkWrapper to={`/recipe/${recipeId}`}>
          <Text {...textStyles}>{label}</Text>
        </LinkWrapper>
        <a style={linkStyles} href={url}>
          <i> {source}</i>
        </a>
        <LinkWrapper to={`/recipe/${recipeId}`}>
          <img src={image} alt={label} style={imageStyles} />
        </LinkWrapper>
        <Text>
          <b>{caloriesValue}</b>
          {" calories"}
        </Text>
        <Text>
          <b>{totalTime}</b>
          {" minutes prep"}
        </Text>
        {recipeSaved ? (
          <Column>
            <PrimaryButton
              value="Unsave Recipe"
              backgroundColor={MAIN_GREEN}
              handleClick={() =>
                deleteRecipe(
                  savedRecipes,
                  setSavedRecipes,
                  recipe,
                  setRecipeSaved
                )
              }
            />
            <WeeklyPlanSelect url={url} />
          </Column>
        ) : (
          <PrimaryButton
            value="Save Recipe"
            backgroundColor={MAIN_GREEN}
            handleClick={() =>
              saveRecipe(savedRecipes, setSavedRecipes, recipe, setRecipeSaved)
            }
          />
        )}
      </Column>
    </BoxShadowWrapper>
  );
});
