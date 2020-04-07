import axios from "axios";
import queryString from "query-string";

export const formatQueries = (
  mealTypes,
  dietTypes,
  dishTypes,
  cuisineTypes,
  query
) => {
  const params = {
    q: query,
    app_id: process.env.REACT_APP_EDAMAM_APP_ID,
    app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
    from: 0,
    to: 50,
    Diet: dietTypes,
    dishType: dishTypes,
    cuisineType: cuisineTypes,
    mealTypes: mealTypes
  };

  const qString = queryString.stringify(params);

  return qString;
};

export const getRecipes = async qString => {
  let res;
  try {
    res = await axios({
      method: "POST",
      url: "https://api.edamam.com/search?" + qString,
      config: {
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          "access-control-allow-origin": "*",
          "access-control-allow-credentials": "true"
        }
      }
    });
    return res.data.hits;
  } catch (err) {
    console.error(err);
  }
};
