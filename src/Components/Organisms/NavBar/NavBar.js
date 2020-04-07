import React from "react";

import { LinkWrapper, Text } from "../../Atoms/Abstracted";
import { Column, Row } from "../../Layouts";
import { MAIN_GREEN } from "../../../Colors";

export const NavBar = () => {
  return (
    <Column>
      <LinkWrapper to="/">
        <Text
          margin="25px 0px 0px 0px"
          fontSize="20px"
          fontWeight="bold"
          color={MAIN_GREEN}
        >
          Tiny Planner
        </Text>
      </LinkWrapper>
      <Row margin="25px 25px" justifyContent="center">
        <LinkWrapper to="/">
          <Text margin="0px 25px" color={MAIN_GREEN}>
            Search Recipes
          </Text>
        </LinkWrapper>
        <LinkWrapper to="/saved-recipes">
          <Text margin="0px 25px" color={MAIN_GREEN}>
            Saved Recipes
          </Text>
        </LinkWrapper>
        <LinkWrapper to="/weekly-plan">
          <Text margin="0px 25px" color={MAIN_GREEN}>
            Weekly Meal Plan
          </Text>
        </LinkWrapper>
      </Row>
    </Column>
  );
};
