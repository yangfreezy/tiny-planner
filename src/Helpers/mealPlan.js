export const createMealPlanTemplate = () => {
  const daysOfTheWeek = ["M", "T", "W", "Th", "F", "Sa", "Su"];
  const mealPlan = daysOfTheWeek.reduce((weeklyMealPlan, day) => {
    weeklyMealPlan[day] = {};
    weeklyMealPlan[day]["B"] = { meal: "Breakfast", url: null };
    weeklyMealPlan[day]["L"] = { meal: "Lunch", url: null };
    weeklyMealPlan[day]["D"] = { meal: "Dinner", url: null };
    weeklyMealPlan[day]["S"] = { meal: "Snack", url: null };
    return weeklyMealPlan;
  }, {});
  localStorage.setItem("weeklyMealPlan", JSON.stringify(mealPlan));
  return mealPlan;
};

export const saveToWeeklyMealPlan = (
  weeklyMealPlan,
  setWeeklyMealPlan,
  url,
  selectedMeals
) => {
  const updatedMealPlan = selectedMeals.reduce((mealPlan, selection) => {
    const [day, meal] = selection.split("-");
    mealPlan[day][meal]["url"] = url;
    return mealPlan;
  }, JSON.parse(JSON.stringify(weeklyMealPlan)));
  localStorage.setItem("weeklyMealPlan", JSON.stringify(updatedMealPlan));
  setWeeklyMealPlan(updatedMealPlan);
};

export const deleteFromWeeklyMealPlan = (
  weeklyMealPlan,
  setWeeklyMealPlan,
  day,
  mealId
) => {
  const mealPlanCopy = JSON.parse(JSON.stringify(weeklyMealPlan));
  mealPlanCopy[day][mealId]["url"] = null;
  localStorage.setItem("weeklyMealPlan", JSON.stringify(mealPlanCopy));
  setWeeklyMealPlan(mealPlanCopy);
};

export const clearWeeklyMealPlan = (weeklyMealPlan, setWeeklyMealPlan) => {
  const emptyWeeklyMealPlan = createMealPlanTemplate();
  localStorage.setItem("weeklyMealPlan", JSON.stringify(emptyWeeklyMealPlan));
  setWeeklyMealPlan(emptyWeeklyMealPlan);
};
