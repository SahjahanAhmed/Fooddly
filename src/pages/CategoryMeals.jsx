import React, { useEffect, useState } from "react";
import { Container, Title } from "../styled/categoryMeals.styled";
import { fetchData } from "../fetchData";
import { useParams } from "react-router-dom";
import CategoryMeal from "../components/CategoryMeal";

const CategoryMeals = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchData(`filter.php?c=${category}`).then((data) => {
      setMeals(data.data.meals);
    });
  }, []);

  return (
    <>
      <Title>Click to your favorite meal to get the details</Title>
      <Container>
        {meals?.map((meal) => {
          return <CategoryMeal key={meal?.idMeal} meal={meal} />;
        })}
      </Container>
    </>
  );
};

export default CategoryMeals;
