import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { AppContext } from "./Context/AppContext";
import { createMealPlanTemplate } from "./Helpers/mealPlan";
import {
  SearchPage,
  SavedRecipesPage,
  RecipePage,
  WeeklyMealPlanPage
} from "./Components/Pages";

export const App = () => {
  const [recipes, setRecipes] = useState([]);

  const cachedSavedRecipes =
    JSON.parse(localStorage.getItem("savedRecipes")) || [];
  const [savedRecipes, setSavedRecipes] = useState(cachedSavedRecipes);

  const mealPlanTemplate =
    JSON.parse(localStorage.getItem("weeklyMealPlan")) ||
    createMealPlanTemplate();
  const [weeklyMealPlan, setWeeklyMealPlan] = useState(mealPlanTemplate);

  useEffect(() => {
    if (!localStorage.getItem("savedRecipes")) {
      localStorage.setItem("savedRecipes", JSON.stringify([]));
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        recipes,
        setRecipes,
        savedRecipes,
        setSavedRecipes,
        weeklyMealPlan,
        setWeeklyMealPlan
      }}
    >
      <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/recipe/:recipe_id" exact component={RecipePage} />
          <Route path="/saved-recipes" exact component={SavedRecipesPage} />
          <Route path="/weekly-plan" exact component={WeeklyMealPlanPage} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};
