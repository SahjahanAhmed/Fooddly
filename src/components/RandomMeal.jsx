import { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Container } from "../styled/randomMeal.styled";
import { fetchData } from "../fetchData";
import { handleScroll } from "../handleScroll";
import { Link } from "react-router-dom";

const RandomMeal = ({ meal }) => {
  const [getFullMealData, setGetFullMealdata] = useState("");
  useEffect(() => {
    fetchData(`lookup.php?i=${meal?.idMeal}`).then((data) => {
      setGetFullMealdata(data.data.meals[0]);
    });
  }, [meal]);

  return (
    <Container bgimg={meal?.strMealThumb}>
      <div className="details">
        <h1>{getFullMealData?.strMeal}</h1>
        <div>
          <h3>{getFullMealData?.strArea}</h3>
          <h3>{getFullMealData?.strCategory}</h3>
        </div>
      </div>
      <Link to={`/meals/details/${meal?.idMeal}`} className="details-btn">
        Lets make it
      </Link>
      <button
        className="scroll-btn"
        onClick={() => handleScroll(window.innerHeight + 5)}
      >
        <AiOutlineCaretDown />
      </button>
    </Container>
  );
};

export default RandomMeal;
