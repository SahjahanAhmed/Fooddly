import Styled from "styled-components";

const Container = Styled.div`

div{
    padding: 1rem 0 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.favorite{
    font-family: ubuntu, sans-serif;
    text-align: center;
    margin-top: 1rem;
}


.empty-msg{
    font-family: ubuntu, sans-serif;
    text-align: center;

}
`;

export { Container };
