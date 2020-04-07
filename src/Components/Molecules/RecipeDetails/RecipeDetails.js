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

export const RecipeDetails = ({ recipe }) => {
  const {
    label,
    dietLabels,
    healthLabels,
    ingredients,
    url,
    source,
    totalNutrients
  } = recipe;

  const openLinkInNewTab = e => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  const nutrientLabels = ["FAT", "FASAT", "CHOCDF", "PROCNT", "SUGAR"];

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
      <Text {...textLabelStyles} text="Health Labels" />
      {
        <Text
          fontSize="13px"
          text={dietLabels.concat(healthLabels).join(", ")}
        />
      }
      {Object.keys(totalNutrients)
        .filter(nutrientLabel => nutrientLabels.includes(nutrientLabel))
        .map(nutrientLabel => {
          const { label, quantity, unit } = totalNutrients[nutrientLabel];
          return (
            <Text fontSize="13px">
              <i>{`${label}: ${+quantity.toFixed(0)} ${unit}`}</i>
            </Text>
          );
        })}
    </Column>
  );
};
