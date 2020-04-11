import React from "react";
import { Text, LinkWrapper } from "../../Atoms/Abstracted";
import { Column, BoxShadowWrapper } from "../../Layouts";

const linkStyles = {
  fontSize: "12px",
  margin: "10px 0px",
  textDecoration: "none",
  color: "black"
};
const imageStyles = { margin: "25px 0px", width: "200px", height: "auto" };
const columnStyles = { maxWidth: "400px", width: "400px" };
const textStyles = { maxWidth: "200px", fontWeight: "bold" };
const cardStyles = { padding: "50px 50px", margin: "25px 25px" };

export const Meal = React.memo(({ recipe }) => {
  const { label, image, calories, totalTime, url, source } = recipe;

  const recipeId = encodeURI(label + "-from-" + source);
  const caloriesValue = +calories.toFixed(0);

  return (
    <BoxShadowWrapper {...cardStyles}>
      <Column {...columnStyles}>
        <LinkWrapper to={`/recipe/${recipeId}`}>
          <Text {...textStyles}>{label}</Text>
        </LinkWrapper>
        <a style={linkStyles} href={url}>
          <i> {source}</i>
        </a>
        <LinkWrapper to={`/recipe/${recipeId}`}>
          <img src={image} alt={label} style={imageStyles} />
        </LinkWrapper>
        <Text>
          <b>{caloriesValue}</b>
          {" calories"}
        </Text>
        <Text>
          <b>{totalTime}</b>
          {" minutes prep"}
        </Text>
      </Column>
    </BoxShadowWrapper>
  );
});
