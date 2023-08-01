import React, { useContext, useEffect, useState } from "react";
import { favoriteListContext } from "../context/favoriteListContext";
import { fetchData } from "../fetchData";
import { Container } from "../styled/favorites.styled";
import CategoryMeal from "../components/CategoryMeal";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { state } = useContext(favoriteListContext);

  useEffect(() => {
    const fetchDataForFavorites = async () => {
      try {
        const data = await Promise.all(
          state.map((mealId) => fetchData(`lookup.php?i=${mealId}`))
        );
        setFavorites(data.map((meal) => meal.data.meals[0]));
      } catch (error) {
        console.error("Error fetching data for favorites:", error);
      }
    };

    fetchDataForFavorites();
  }, [state]);

  return (
    <Container>
      <h1 className="favorite">Favorites</h1>
      <div>
        {favorites.map((meal) => {
          return <CategoryMeal key={meal?.idMeal} meal={meal} />;
        })}
      </div>
      {favorites?.length === 0 && (
        <h2 className="empty-msg">You don't have anything here</h2>
      )}
    </Container>
  );
};

export default Favorites;
