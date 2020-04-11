import React, { Fragment, useContext } from "react";

import { AppContext } from "../../../Context/AppContext";
import {
  deleteFromWeeklyMealPlan,
  clearWeeklyMealPlan
} from "../../../Helpers/mealPlan";

import { Meal } from "../../Molecules";
import { Text, PrimaryButton } from "../../Atoms/Abstracted";
import { Column, Row, BoxShadowWrapper } from "../../Layouts";
import { MAIN_GREEN } from "../../../Colors";

const dayKeyToName = {
  M: "Monday",
  T: "Tuesday",
  W: "Wednesday",
  Th: "Thursday",
  F: "Friday",
  Sa: "Saturday",
  Su: "Sunday"
};

export const WeeklyMealPlanList = React.memo(() => {
  const { weeklyMealPlan, setWeeklyMealPlan, savedRecipes } = useContext(
    AppContext
  );
  const days = Object.keys(weeklyMealPlan);

  return (
    <Column>
      <PrimaryButton
        backgroundColor={MAIN_GREEN}
        value="Clear Schedule"
        handleClick={() =>
          clearWeeklyMealPlan(weeklyMealPlan, setWeeklyMealPlan)
        }
      />
      <Row alignItems="flex-start">
        {days.map(day => {
          const dayData = weeklyMealPlan[day];
          const mealsOfDay = Object.keys(dayData);
          const dayName = dayKeyToName[day];
          return (
            <Column margin="25px 25px">
              <Text color={MAIN_GREEN} fontWeight="bold" fontSize="20px">
                {dayName}
              </Text>
              {mealsOfDay.map(mealId => {
                const { meal, url } = dayData[mealId];
                const recipe = savedRecipes
                  .filter(recipe => recipe.url === url)
                  .pop();
                return recipe ? (
                  <Fragment>
                    <Text fontWeight="bold">{dayName + "'s " + meal}</Text>
                    <Meal recipe={recipe} />
                    <PrimaryButton
                      value="Remove"
                      backgroundColor={MAIN_GREEN}
                      handleClick={() =>
                        deleteFromWeeklyMealPlan(
                          weeklyMealPlan,
                          setWeeklyMealPlan,
                          day,
                          mealId
                        )
                      }
                    ></PrimaryButton>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Text fontWeight="bold">{dayName + "'s " + meal}</Text>
                    <BoxShadowWrapper width="200px">
                      <Text fontSize="14px">
                        <i>{`${dayKeyToName[day]}'s ${meal} is free!`}</i>
                      </Text>
                    </BoxShadowWrapper>
                  </Fragment>
                );
              })}
            </Column>
          );
        })}
      </Row>
    </Column>
  );
});
