import Styled from "styled-components";

const Container = Styled.div`
background-image: url(${(props) => props?.bgimg});
width: 100%;
height: 100vh;
min-height: 100vh;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
position: relative;
&::before{
    content: '';
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 1;
}


.details{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(50vh - 3rem);
    color: #fff;
    position: relative;
    z-index:2 ;
    font-family: ubuntu, sans-serif;
    gap: 1rem;

    div{
        display: flex;
        gap: 1rem;

        & > :nth-child(1){
            border-right: 2px solid #fff;
            padding-right: 1rem;
        }
    }

    h1{
        font-size: 3rem;
        text-align: center;
    }
}

 .details-btn,.scroll-btn{
     border: 1px solid  #fff;
     background-color: transparent;
     padding: .5rem 1rem;
     position: relative;
     z-index:2 ;
     display: inline-block;
     color: #fff;
     border-radius: 1rem;
     margin-left: 50%;
     transform: translateX(-50%);
     margin-top: 1rem;
     cursor: pointer;
     transition: all .15s ease-in-out;
     text-decoration: none;

     &:hover{
        background-color: #fff;
        color: #000;
     }
 }


 .scroll-btn{
    position: absolute;
    bottom: 4.5rem;
    left: 0;
    font-size: 1rem;
    display: flex;
    align-items: center;
 }
`;

export { Container };
