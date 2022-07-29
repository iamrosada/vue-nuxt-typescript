import styled from "vue-styled-components"

export const ContainerStatus = styled("div")`

  //border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 1100px;
  margin: 0 auto;

 `;

export const Good = styled("section")`
 animation: backInLeft;
 animation-duration: 1s;

 display: flex;
flex-direction: column;
justify-content: start;
align-items: flex-start;

  >h1{
    font-size: 5.75rem;
    margin-bottom: 2rem;
    font-weight: 600;
    max-width: 32rem;

  }
  >p{
    color:#a9a9a9;
    /* font-size: 2.24rem; */
    font-weight: bold;
    font-style: normal
    ;
  }
  >button{
    margin-top: 4rem;
    font-size: 2rem;
    background-color: #ffc127;
    border-radius: 4px;
    width: 100%;
    height: 6rem ;
    font-weight: 700;
    font-size: 2rem;
    border: 2px solid #ffc127;
    :hover{
      background-color: #c8c81d;
      transition: 1s;
    }
  }

`

export const Hora = styled("div")`
display: flex;
flex-direction: column;

 >ul{

  list-style: none;
  >li{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    >strong{
      margin-top: 0.5rem;
      color:#222222
    }
    >span{
      /* color:#444444*/
    color: #a9a9a9;
    font-weight: bold;
    font-style: normal;
    }
  }
 }
`;
