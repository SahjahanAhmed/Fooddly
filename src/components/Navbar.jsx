import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Container, HeartBtn, SearchBox } from "../styled/navbar.styled";
import logo from "/logo.png";
import { handleScroll } from "../handleScroll";
import { useNavigate } from "react-router-dom";
import { favoriteListContext } from "../context/favoriteListContext";
import { fetchData } from "../fetchData";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchedMeals, setSearchedMeals] = useState([]);
  const { state } = useContext(favoriteListContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMealsBySearchQuery = async () => {
      fetchData(`search.php?s=${searchQuery}`).then((data) => {
        setSearchedMeals(data.data.meals);
        if (searchQuery === "") {
          setSearchedMeals([]);
        }
      });
    };
    if (searchQuery !== "") {
      fetchMealsBySearchQuery();
    }
    if (searchQuery === "") {
      setSearchedMeals([]);
      fetchMealsBySearchQuery();
    }
  }, [searchQuery]);

  return (
    <Container>
      <div className="left">
        <img
          src={logo}
          alt=""
          onClick={() => {
            handleScroll(0), navigate(`/`);
          }}
        />
      </div>
      <div className="right">
        <div className="search">
          <input
            type="search"
            id="search"
            placeholder="Search"
            onFocus={() => setShowSearchBox(true)}
            onBlur={() => {
              setTimeout(() => {
                setShowSearchBox(false);
              }, 500);
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {showSearchBox && (
            <SearchBox className="searchBox">
              {searchedMeals &&
                searchedMeals?.map((meal) => {
                  return (
                    <li
                      onClick={() => navigate(`/meals/details/${meal?.idMeal}`)}
                      key={meal?.idMeal}
                    >
                      {meal?.strMeal}
                    </li>
                  );
                })}
            </SearchBox>
          )}
        </div>
        <div>
          <HeartBtn
            onClick={() => navigate("/favorites")}
            favorite-meals={state.length}
            style={{ color: state?.length > 0 && "red" }}
          >
            <AiFillHeart />
          </HeartBtn>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
