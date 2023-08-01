import Styled from "styled-components";

const Container = Styled.div`
box-shadow: 0  0 2px rgba(0, 0, 0, .2);
padding: 1rem;
margin-top: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.top{

    h2{
        letter-spacing: 2px;
    }

    font-family: ubuntu,sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

`;

export { Container };
