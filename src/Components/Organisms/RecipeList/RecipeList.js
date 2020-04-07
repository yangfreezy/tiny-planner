import React, { useContext } from "react";

import { AppContext } from "../../../Context/AppContext";

import { RecipeItem } from "../../Molecules";
import { Row } from "../../Layouts/Row/Row";

export const RecipeList = () => {
  const { recipes } = useContext(AppContext);
  return (
    <Row alignItems="flex-start" maxWidth="1200px" justifyContent="center">
      {recipes.map(recipeData => {
        const { recipe } = recipeData;
        const { uri } = recipe;
        return <RecipeItem key={uri} recipe={recipe} />;
      })}
    </Row>
  );
};
