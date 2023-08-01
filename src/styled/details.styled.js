import Styled from "styled-components";

const Container = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding:0 0 1rem 0;

   img{
    width: 100%;
    max-height: 400px;
    object-fit: cover;
}

h1{
    font-family: ubuntu, sans-serif;
    margin: 1rem;
}

.fav-btn{
    border: none;
    background-color: transparent;
    color: #555;
    font-size: 2rem;
    cursor: pointer;
    transition: all .15s ease-in-out;

    &:hover{
        color: orangered;
    }
}

.ingredients{
    flex-grow: 1;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    font-family: sans-serif;
    padding: 1rem 0;

    
    & > :nth-child(1){
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        ul{
         display: flex;
         flex-direction: column;
         align-items: start;
         list-style-type: none;
         gap: 1.5rem;
         flex-wrap: wrap;

         li{
            transition: all .15s ease-in-out;
            &:hover{
                transform: scale(1.2);
            }
         }
       }
       
       
    }
    
    & > :nth-child(2){
        max-width: 600px;
        line-height: 2;
        padding: 0 1rem;

        h3{
        line-height: 1.2;

        }
    }
}
`;

export { Container };
