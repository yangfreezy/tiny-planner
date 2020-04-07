import React from "react";

import { RecipeItem } from "../../Molecules";
import { BoxShadowWrapper, Row } from "../../Layouts";
import { Text } from "../../Atoms/Abstracted";

export const SavedRecipeList = () => {
  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
  return (
    <Row alignItems="flex-start" maxWidth="1200px" justifyContent="center">
      {savedRecipes ? (
        savedRecipes.map(recipe => {
          const { uri } = recipe;
          return <RecipeItem key={uri} recipe={recipe} />;
        })
      ) : (
        <BoxShadowWrapper width="400px">
          <Text>Save a few recipes to get started on your week!</Text>
        </BoxShadowWrapper>
      )}
    </Row>
  );
};
