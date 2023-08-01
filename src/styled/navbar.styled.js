import Styled from "styled-components";

const Container = Styled.div`
box-shadow: 0 0 6px rgba(0, 0, 0, .2);
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
z-index: 999;
position: sticky;
top: 0px;

@media screen and (max-width: 450px){
      padding: .5rem;
}

     .left {
      padding-top: .4rem;
      margin-left: .5rem;
      img{
            width: 10rem;
            cursor: pointer;

            @media screen and (max-width: 450px){
            width: 4rem;
           }
      }
     }

      .right{
            display: flex; 
            align-items: center;
            justify-content: flex-end;
            flex-grow: 1;

            & > :nth-child(1){
                  width: 100%;
                  margin: 0 .5rem;
                  display: flex;
                  justify-content: flex-end;
                  gap: .5rem;
                  position: relative;
                  input{ 
                        width: 100%;
                        max-width: 600px;
                        padding: .5rem;
                        border-radius: .5rem;
                        border: none;
                        outline: none;
                        box-shadow: 0 0 1px rgba(0, 0, 0, .5) inset;
                  }
            } 

            & > :nth-child(2){
                  width: 20%;
                  display: flex;
                  align-items: center;
                  justify-content: center;

            }
            
      }
`;

const HeartBtn = Styled.div`
font-size: 1.5rem;
border: none;
background-color: transparent;
cursor: pointer;
position: relative;
        &::before{
             content: attr(favorite-meals);
             position: absolute;
             top: -.4rem;
             right: -.4rem;
             font-size: .8rem;
             font-weight: bold;
             font-family: sans-serif;
        }
        &:hover::after{
            content: 'Favorites';
            color: red;
            position: absolute;
            top: 100%;
            background-color: #333;
            color: #fff;
            left: 50%;
            transform : translateX(-50%);
            padding: .5rem;
            border-radius: 1rem;
            font-size: .8rem;
            box-shadow: 0 0 1px #555;
            font-family: sans-serif;
        }
`;

const SearchBox = Styled.div`
position: absolute;
top: 100%;
right: 50%;
transform: translateX(50%);
width: 100%;
box-shadow: 0 0 6px rgba(0, 0, 0, .2);
background-color: #fff;
border-radius: 1rem;
padding: .5rem 0;
max-height: 500px;
overflow-y: auto;
li{
      list-style: none;
      font-family: sans-serif;
      padding: 1rem;
      cursor: pointer;
      &:hover{
            background-color: #9995;
      }
}
`;
export { Container, HeartBtn, SearchBox };
