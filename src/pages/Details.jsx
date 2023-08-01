import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Container } from "../styled/details.styled";
import { fetchData } from "../fetchData";
import { useParams } from "react-router-dom";
import { favoriteListContext } from "../context/favoriteListContext";

const Details = () => {
  const [meal, setMeal] = useState("");
  const { mealid } = useParams();
  useEffect(() => {
    fetchData(`lookup.php?i=${mealid}`).then((data) => {
      setMeal(data.data.meals[0]);
    });
  }, [mealid]);

  let ingredients = Object.entries(meal)
    .map(([key, value]) => {
      if (value?.trim() !== "" && key?.includes("Ingredient")) {
        return { ing: value };
      }
    })
    .filter((ingredient) => ingredient !== undefined);

  // add to favorite
  const { state, dispatch } = useContext(favoriteListContext);
  let isAdded = state?.filter((item) => item === meal.idMeal);

  const addToFavList = (mealId) => {
    if (isAdded.length === 0) {
      dispatch({ type: "ADD", payload: mealId });
    } else {
      dispatch({ type: "REMOVE", payload: mealId });
    }
  };

  {
    return meal ? (
      <Container>
        <img src={meal?.strMealThumb} alt="meal" />
        <h1>{meal?.strArea + " | " + meal?.strMeal}</h1>{" "}
        <button
          className="fav-btn"
          onClick={() => addToFavList(meal?.idMeal)}
          style={{
            color: isAdded && isAdded[0] === meal?.idMeal ? "red" : "gray",
          }}
        >
          <AiFillHeart />
        </button>
        <div className="ingredients">
          <div>
            <h3>Ingredients</h3>

            <ul>
              {" "}
              {ingredients?.map((ing, i) => {
                return <li key={meal?.idMeal + i}>{ing.ing}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>Instructions</h3>
            {meal?.strInstructions}
          </div>
        </div>
      </Container>
    ) : (
      ""
    );
  }
};

export default Details;
