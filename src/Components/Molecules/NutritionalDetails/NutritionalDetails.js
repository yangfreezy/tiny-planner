import React from "react";

import { Text } from "../../Atoms/Abstracted";
import { BoxShadowWrapper, Column } from "../../Layouts";
import { MAIN_GREEN } from "../../../Colors";

const columnStyles = {
  maxWidth: "800px",
  width: "800px",
  justifyContent: "space-between",
  textAlign: "left",
  alignItems: "flex-start",
  margin: "25px 25px"
};

export const NutritionalDetails = React.memo(({ recipe }) => {
  const { totalNutrients, totalDaily } = recipe;
  return (
    <BoxShadowWrapper margin="100px 50px">
      <Column {...columnStyles}>
        <Text color={MAIN_GREEN} fontWeight="bold" text="Nutritional Details" />
        {Object.keys(totalNutrients).map(nutrient => {
          const { label, quantity, unit } = totalNutrients[nutrient];

          let percentageOfDailyValue;
          if (totalDaily[nutrient])
            percentageOfDailyValue =
              +totalDaily[nutrient]["quantity"].toFixed(0) +
              "% of daily intake";

          return (
            <Text key={label} fontSize="12px" margin="5px 0px" textAlign="left">
              <b> {`${label}: ${quantity.toFixed(0)} ${unit}`}</b>
              {percentageOfDailyValue ? ` | ${percentageOfDailyValue}` : null}
            </Text>
          );
        })}
      </Column>
    </BoxShadowWrapper>
  );
});
