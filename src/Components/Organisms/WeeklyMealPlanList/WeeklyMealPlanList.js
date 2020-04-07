import React, { Fragment, useContext, useEffect } from "react";

import { AppContext } from "../../../Context/AppContext";
import { deleteFromWeeklyMealPlan } from "../../../Helpers/mealPlan";

import { Meal } from "../../Molecules";
import { Column, Row, BoxShadowWrapper } from "../../Layouts";
import { Text, PrimaryButton } from "../../Atoms/Abstracted";
import { MAIN_GREEN } from "../../../Colors";

export const WeeklyMealPlanList = () => {
  const { weeklyMealPlan, setWeeklyMealPlan, savedRecipes } = useContext(
    AppContext
  );
  const days = Object.keys(weeklyMealPlan);
  const dayKeyToName = {
    M: "Monday",
    T: "Tuesday",
    W: "Wednesday",
    Th: "Thursday",
    F: "Friday",
    Sa: "Saturday",
    Su: "Sunday"
  };

  useEffect(() => {}, [weeklyMealPlan, setWeeklyMealPlan]);

  return (
    <Column>
      <Row alignItems="flex-start">
        {days.map(day => {
          const dayData = weeklyMealPlan[day];
          const mealsOfDay = Object.keys(dayData);
          return (
            <Column margin="25px 25px">
              <Text color={MAIN_GREEN} fontWeight="bold" fontSize="20px">
                {dayKeyToName[day]}
              </Text>
              {mealsOfDay.map(mealId => {
                const { meal, url } = dayData[mealId];
                const recipe = savedRecipes
                  .filter(recipe => recipe.url === url)
                  .pop();
                return recipe ? (
                  <Fragment>
                    <Text fontWeight="bold">{meal}</Text>
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
                    <Text fontWeight="bold">{meal}</Text>
                    <BoxShadowWrapper width="200px">
                      <Text fontSize="12px">
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
};
