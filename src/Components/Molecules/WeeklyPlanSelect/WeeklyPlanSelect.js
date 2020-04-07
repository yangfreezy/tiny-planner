import React, { useState, useContext } from "react";

import { AppContext } from "../../../Context/AppContext";
import { saveToWeeklyMealPlan } from "../../../Helpers/mealPlan";

import { Text, PrimaryButton } from "../../Atoms/Abstracted";
import { Column, Row } from "../../Layouts";
import { MAIN_GREEN } from "../../../Colors";

export const WeeklyPlanSelect = ({ url }) => {
  const { weeklyMealPlan, setWeeklyMealPlan } = useContext(AppContext);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const dayOptions = ["M", "T", "W", "Th", "F", "Sa", "Su"];
  const mealOptions = ["B", "L", "D", "S"];

  const handleSubmit = e => {
    e.preventDefault();
    saveToWeeklyMealPlan(weeklyMealPlan, setWeeklyMealPlan, url, selectedMeals);
  };

  const handleMealSelection = e => {
    const isSelected = selectedMeals.includes(e.target.id);
    isSelected
      ? setSelectedMeals(selectedMeals.filter(val => val !== e.target.id))
      : setSelectedMeals(selectedMeals.concat([e.target.id]));
  };

  return (
    <Column>
      <form onSubmit={handleSubmit}>
        <Row margin="10px 0px" alignItems="flex-start" justifyContent="center">
          <Text color={MAIN_GREEN} text="Add to Weekly Plan" />
        </Row>
        <Text fontSize="12px" text="Select Meal" />
        <Row>
          {dayOptions.map(day => (
            <Column justifyContent="flex-start" key={day}>
              <Text
                fontWeight="bold"
                margin="25px 10px"
                fontSize="10px"
                text={day}
              />
              {mealOptions.map(meal => (
                <Column alignItems="center" key={meal}>
                  <Text margin="0px 10px" fontSize="10px" text={meal} />
                  <input
                    onChange={handleMealSelection}
                    type="checkbox"
                    id={day + "-" + meal}
                    name={meal}
                    value={meal}
                  />
                </Column>
              ))}
            </Column>
          ))}
        </Row>
        <Column>
          <Text fontSize="8px" text="Breakfast, Lunch, Dinner, Snack" />

          <PrimaryButton
            value="Add to Plan"
            backgroundColor={MAIN_GREEN}
            handleClick={handleSubmit}
          />
        </Column>
      </form>
    </Column>
  );
};
