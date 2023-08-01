import React from "react";
import { Container } from "../styled/category.styled";
import { useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/category/${category?.strCategory}`)}>
      <h2>{category?.strCategory}</h2>
      <img src={category?.strCategoryThumb} alt="category-img" />
      <p>
        {category?.strCategoryDescription.slice(0, 100)}
        {category?.strCategoryDescription.length > 100 && "..."}
      </p>
    </Container>
  );
};

export default Category;
