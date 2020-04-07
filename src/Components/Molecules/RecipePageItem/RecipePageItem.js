import React, { useContext, useState } from "react";

import { AppContext } from "../../../Context/AppContext";
import { saveRecipe, deleteRecipe } from "../../../Helpers/savedRecipesHelpers";

import { Text, PrimaryButton, LinkWrapper } from "../../Atoms/Abstracted";
import { BoxShadowWrapper, Column } from "../../Layouts";
import { MAIN_GREEN } from "../../../Colors";

const imageStyles = { margin: "25px 0px", width: "200px", height: "auto" };
const columnStyles = { maxWidth: "400px", width: "400px", margin: "0px 50px" };

const labelStyles = {
  color: MAIN_GREEN,
  maxWidth: "200px",
  fontWeight: "bold"
};

export const RecipePageItem = ({ recipe }) => {
  const { savedRecipes, setSavedRecipes } = useContext(AppContext);

  const {
    label,
    image,
    calories,
    totalTime,
    url,
    source,
    dietLabels,
    healthLabels
  } = recipe;

  const recipeIsSaved =
    savedRecipes.filter(savedRecipe => savedRecipe.url === url).length > 0;
  const [recipeSaved, setRecipeSaved] = useState(recipeIsSaved);

  const recipeId = encodeURI(label + "--" + source);
  const caloriesValue = +calories.toFixed(0);

  return (
    <BoxShadowWrapper padding="50px 50px">
      <Column {...columnStyles}>
        <LinkWrapper to={`/recipe/${recipeId}`}>
          <Text {...labelStyles}>{label}</Text>
        </LinkWrapper>
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
        <Text {...labelStyles} text="Health Labels" />
        <Text
          fontSize="13px"
          maxWidth="200px"
          text={dietLabels.concat(healthLabels).join(", ")}
        />

        {recipeSaved ? (
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
};
