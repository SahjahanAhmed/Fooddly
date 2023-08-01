import Styled from "styled-components";

const Container = Styled.div`
box-shadow: 0 0 4px rgba(0, 0, 0, .3);
display: flex;
flex-direction: column;
gap: .5rem;
max-width: 300px;
margin:0 auto;
padding: .5rem;
cursor: pointer;
transition: all .15s ease-in-out;
border-radius: .5rem;

&:hover{
    transition: all .15s ease-in-out;
    transform: scale(1.03);
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    color: #222;
    
}

h2{
    font-family: ubuntu, sans-serif;
    text-align: center;

}

img{
    max-width: 100%;

}

p{
    font-family: sans-serif;
}
`;
export { Container };
