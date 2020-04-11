import React, { useState, useContext } from "react";
import { pipe } from "ramda";

import { getRecipes, formatQueries } from "../../../Helpers/getRecipes";
import { storeRecipesInCache } from "../../../Helpers/cache";
import { AppContext } from "../../../Context/AppContext";

import { Select, PrimaryButton } from "../../Atoms/Abstracted";
import { Column, Row } from "../../Layouts";
import { MAIN_GREEN } from "../../../Colors";

const mealOptions = ["Breakfast", "Lunch", "Dinner", "Snack"];
const dietOptions = [
  "Balanced",
  "High-protein",
  "High-fiber",
  "Low-fat",
  "Low-carb",
  "Low-sodium"
];
const dishOptions = [
  "Bread",
  "Cereals",
  "Drinks",
  "Desserts",
  "Main course",
  "Pancake",
  "Preps",
  "Salad",
  "Sandwiches",
  "Side dish",
  "Soup",
  "Starter",
  "Sweets"
];
const cuisineOptions = [
  "American",
  "Asian",
  "British",
  "Caribbean",
  "Chinese",
  "French",
  "Indian",
  "Italian",
  "Japanese",
  "Kosher",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "South American",
  "South East Asian"
];

export const SearchForm = () => {
  const [mealTypes, setMealTypes] = useState([]);
  const [dietTypes, setDietTypes] = useState([]);
  const [query, setQuery] = useState([]);
  const { setRecipes } = useContext(AppContext);

  // NOTE: Dish types and cuisine types aren't allowed for free plans with the EDAMAM API
  const [dishTypes, setDishTypes] = useState([]);
  const [cuisineTypes, setCuisineTypes] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    if (dishTypes.length || cuisineTypes.length) {
      alert(
        "Dish and cuisine types filters are currently only available for paid customers - sorry!"
      );
      await setDishTypes([]);
      await setCuisineTypes([]);
    }
    const recipes = await pipe(
      formatQueries,
      getRecipes
    )(mealTypes, dietTypes, dishTypes, cuisineTypes, query);
    setRecipes(recipes);
    storeRecipesInCache(recipes);
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <Column>
      <form onSubmit={handleSearch}>
        <Row>
          <input
            required
            onChange={handleChange}
            type="text"
            name="query"
            placeholder="Search"
          />
        </Row>
        <Row>
          <PrimaryButton
            backgroundColor={MAIN_GREEN}
            onSubmit={handleSearch}
            color="white"
            value="Search"
          />
        </Row>
        <Row alignItems="flex-start" margin="25px 25px">
          <Column alignItems="flex-start">
            <Select
              label="Meal Type (Free)"
              selections={mealTypes}
              setSelections={setMealTypes}
              options={mealOptions}
              name="meal_type"
            />
            <Select
              label="Diet (Free)"
              selections={dietTypes}
              setSelections={setDietTypes}
              options={dietOptions}
              name="diet"
            />
          </Column>
          <Select
            label="Dish Type (Paid)"
            selections={dishTypes}
            setSelections={setDishTypes}
            disabled={true}
            options={dishOptions}
            name="dish_type"
          />
          <Select
            label="Cuisine Type (Paid)"
            selections={cuisineTypes}
            setSelections={setCuisineTypes}
            disabled={true}
            options={cuisineOptions}
            name="cuisine"
          />
        </Row>
      </form>
    </Column>
  );
};
