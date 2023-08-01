import Styled from "styled-components";

const Container = Styled.div`
display: flex;
flex-direction: column;
`;
const Categories = Styled.div`

h2{
    font-family: ubuntu, sans-serif;
    color: #222;
    margin : 1rem;
    text-align: center;
}


div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
}
`;

const Foryou = Styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`;

export { Container, Categories, Foryou };
