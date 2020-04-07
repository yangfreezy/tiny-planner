import React from "react";

import { NavBar } from "../../Organisms";
import { SavedRecipeList } from "../../Organisms";
import { Column } from "../../Layouts";

export const SavedRecipesPage = () => {
  return (
    <Column>
      <NavBar />
      <SavedRecipeList />
    </Column>
  );
};
