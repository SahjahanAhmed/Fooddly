import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Container } from "../styled/categoryMeal.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { favoriteListContext } from "../context/favoriteListContext";

const CategoryMeal = ({ meal }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { dispatch } = useContext(favoriteListContext);
  return (
    <Container>
      {pathname === "/favorites" && (
        <button
          className="remove-from-fav-btn"
          onClick={() => {
            dispatch({ type: "REMOVE", payload: meal?.idMeal });
          }}
        >
          <AiFillHeart />
        </button>
      )}
      <img src={meal?.strMealThumb} alt="img" />
      <h1>
        {meal?.strMeal.slice(0, 18)}
        {meal?.strMeal.length > 18 && "..."}
      </h1>
      <button
        className="lets-make-it-btn"
        onClick={() => navigate(`/meals/details/${meal?.idMeal}`)}
      >
        Lets make it
      </button>
    </Container>
  );
};
export default CategoryMeal;
