import React, { useState, useContext } from "react";
import { pipe } from "ramda";

import { getRecipes, formatQueries } from "../../../Helpers/getRecipes";
import { storeRecipesInCache } from "../../../Helpers/cache";
import { AppContext } from "../../../Context/AppContext";

import { Select, PrimaryButton } from "../../Atoms/Abstracted";
import { Column, Row } from "../../Layouts";
import { MAIN_GREEN } from "../../../Colors";

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
              options={["Breakfast", "Lunch", "Dinner", "Snack"]}
              name="meal_type"
            />
            <Select
              label="Diet (Free)"
              selections={dietTypes}
              setSelections={setDietTypes}
              options={[
                "Balanced",
                "High-protein",
                "High-fiber",
                "Low-fat",
                "Low-carb",
                "Low-sodium"
              ]}
              name="diet"
            />
          </Column>
          <Select
            label="Dish Type (Paid)"
            selections={dishTypes}
            setSelections={setDishTypes}
            options={[
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
            ]}
            name="dish_type"
          />
          <Select
            label="Cuisine Type (Paid)"
            selections={cuisineTypes}
            setSelections={setCuisineTypes}
            options={[
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
            ]}
            name="cuisine"
          />
        </Row>
      </form>
    </Column>
  );
};
