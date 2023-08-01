import React, { useEffect, useState } from "react";
import { fetchData } from "../fetchData";
import Category from "../components/Category";
import { Container, Categories, Foryou } from "../styled/home.styled";
import RandomMeal from "../components/RandomMeal";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {
    fetchData("categories.php").then((data) => {
      setCategories(data.data.categories);
    });

    fetchData("random.php").then((data) => {
      setRandomMeal(data.data.meals);
    });
  }, []);
  return (
    <Container>
      <Foryou>
        {randomMeal.map((meal) => {
          return <RandomMeal key={meal?.idMeal} meal={meal} />;
        })}
      </Foryou>

      <Categories id="category">
        <h2>Click to your favorite category</h2>

        <div>
          {categories?.map((category, index) => {
            return <Category key={category?.idCategory} category={category} />;
          })}
        </div>
      </Categories>
    </Container>
  );
};

export default Home;
