import React from "react";

import { Text, PrimaryButton } from "../../Atoms/Abstracted";
import { Column } from "../../Layouts";
import { MAIN_GREEN } from "../../../Colors";

const columnStyles = {
  maxWidth: "300px",
  width: "300px",
  justifyContent: "flex-start",
  margin: "25px 50px"
};

const ulStyles = {
  maxWidth: "300px",
  width: "300px",
  margin: "10px 0px",
  textAlign: "center",
  fontSize: "13pxpx"
};

const textLabelStyles = {
  fontWeight: "bold",
  color: MAIN_GREEN
};

const nutrientLabels = ["FAT", "FASAT", "CHOCDF", "PROCNT", "SUGAR"];

export const RecipeDetails = React.memo(({ recipe }) => {
  const { label, ingredients, url, source, totalNutrients } = recipe;

  const openLinkInNewTab = e => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <Column {...columnStyles}>
      <Text {...textLabelStyles} text="Instructions" />
      <PrimaryButton
        backgroundColor={MAIN_GREEN}
        handleClick={openLinkInNewTab}
        value={source}
      />
      <Text {...textLabelStyles} text="Ingredients" />
      <ul style={ulStyles}>
        {ingredients.map(ingredient => (
          <li style={{ fontSize: "13px" }} key={ingredient.text + label + url}>
            {ingredient.text}
          </li>
        ))}
      </ul>
      <Text {...textLabelStyles} text="Macronutrients" />
      {Object.keys(totalNutrients)
        .filter(nutrientLabel => nutrientLabels.includes(nutrientLabel))
        .map(nutrientLabel => {
          const { label, quantity, unit } = totalNutrients[nutrientLabel];
          return (
            <Text fontSize="12px" margin="5px 20px">
              {`${label}: ${+quantity.toFixed(0)} ${unit}`}
            </Text>
          );
        })}
      <Text
        margin="20px 0px"
        color={MAIN_GREEN}
        fontSize="12px"
        text="More nutrition details below.."
      />
    </Column>
  );
});
