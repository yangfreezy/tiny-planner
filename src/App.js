import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { WeeklyMealPlanContext } from "./Context/WeeklyMealPlanContext";
import { SearchPage, WeeklyMealPlanPage } from "./Pages";

export const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);
  return (
    <WeeklyMealPlanContext.Provider
      value={(recipes, setRecipes, mealPlan, setMealPlan)}
    >
      <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/weeklyplan" exact component={WeeklyMealPlanPage} />
        </Switch>
      </Router>
    </WeeklyMealPlanContext.Provider>
  );
};
