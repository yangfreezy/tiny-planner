import React from "react";

import { NavBar, SearchForm, RecipeList } from "../../Organisms";
import { Column } from "../../Layouts";

export const SearchPage = () => {
  return (
    <Column>
      <NavBar />
      <SearchForm />
      <RecipeList />
    </Column>
  );
};
