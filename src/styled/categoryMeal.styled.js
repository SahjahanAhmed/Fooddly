import Styled from "styled-components";

const Container = Styled.div`
width: 100%;
max-width: 300px;
height: 100%;
box-shadow: 0  0  4px rgba(0, 0, 0, .2);
display: flex;
flex-direction: column;
gap: 1rem;
transition: all .15s ease-in-out;
border-radius: .5rem;
position: relative;
padding-top: 0 !important;

&:hover{
box-shadow: 0  0  10px rgba(0, 0, 0, .2);
transform: scale(1.02);
}

img{
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-top-right-radius: .5rem;
    border-top-left-radius: .5rem;

}

h1{
    font-family: ubuntu, sans-serif;
    text-align: center;
    padding: 0 .5rem;
    font-size: 1.5rem;
}

.lets-make-it-btn{
    width: auto;
    border: 1px solid #000;
    padding: .5rem 0;
    margin: 1rem 0 0 0;
    background-color: transparent;
    cursor: pointer;
    transition: all .15s ease-in-out;
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
    &:hover{
        background-color: #222;
        color: #fff;
    }
}

.remove-from-fav-btn{
    position: absolute;
    right: 1rem;
    top: 1rem;
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    color: red;
    cursor: pointer;

    &:hover::before{
        content: 'Remove';
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: .8rem;
        background-color: #222;
        color: #fff;
        border-radius: .5rem;
        padding: .5rem;
        box-shadow: 0 0 2px rgba(0, 0, 0, .3)
    }
}
`;

export { Container };
