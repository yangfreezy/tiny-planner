import React, { useState } from "react";

import { getRecipes } from "../../../Helpers/recipes";

import { Select, PrimaryButton } from "../../Atoms/Abstracted";
import { Column, Row } from "../../Layouts";

export const SearchForm = () => {
  const [mealTypes, setMealTypes] = useState([]);
  const [dietTypes, setDietTypes] = useState([]);
  const [healthTypes, setHealthTypes] = useState([]);
  const [cuisineTypes, setCuisineTypes] = useState([]);
  const [additionalFilters, setAdditionalFilters] = useState([]);

  const handleSubmit = () => {
    getRecipes(
      mealTypes,
      dietTypes,
      healthTypes,
      cuisineTypes,
      additionalFilters
    );
  };

  return (
    <Column>
      <Row>Search Recipes</Row>
      <Row>
        <input type="text" name="q" placeholder="Search" />
      </Row>
      <form>
        <Select
          label="Meal Type"
          setSelections={setMealTypes}
          options={["Breakfast", "Lunch", "Dinner", "Snack"]}
          name="meal_type"
        />
        <Select
          label="Diet"
          setSelections={setDietTypes}
          options={[
            "balanced",
            "high-protein",
            "high-fiber",
            "low-fat",
            "low-carb",
            "low-sodium"
          ]}
          name="diet"
        />
        <Select
          label="Health Type"
          setSelections={setHealthTypes}
          options={[
            "Bread",
            "Cereals",
            "Condiments and sauces",
            "Drinks",
            "Desserts",
            "Main course",
            "Pancake",
            "Preps",
            "Preserve",
            "Salad",
            "Sandwiches",
            "Side dish",
            "Soup",
            "Starter",
            "Sweets"
          ]}
          name="health_type"
        />
        <Select
          label="Cuisine Type"
          setSelections={setCuisineTypes}
          options={[
            "American",
            "Asian",
            "British",
            "Caribbean",
            "Central Europe",
            "Chinese",
            "Eastern Europe",
            "French",
            "Indian",
            "Italian",
            "Japanese",
            "Kosher",
            "Mediterranean",
            "Mexican",
            "Middle Eastern",
            "Nordic",
            "South American",
            "South East Asian"
          ]}
          name="cuisine"
        />
        <PrimaryButton onClick={handleSubmit}>Search</PrimaryButton>
      </form>
    </Column>
  );
};
