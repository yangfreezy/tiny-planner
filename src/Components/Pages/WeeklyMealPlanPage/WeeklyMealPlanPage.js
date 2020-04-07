import React from "react";

import { NavBar, WeeklyMealPlanList } from "../../Organisms";
import { Column } from "../../Layouts";

export const WeeklyMealPlanPage = () => {
  return (
    <Column>
      <NavBar />
      <WeeklyMealPlanList />
    </Column>
  );
};
