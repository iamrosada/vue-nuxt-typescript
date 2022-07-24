import styled from "vue-styled-components"

export const ContainerStatus = styled("div")`

  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 1100px;
  margin: 0 auto;
  >div#embassy-container{
    >img#embassy{
      width: 300px;
      height: 120px;
    }
  }
  >div#container-sme{
    >img{
      width: 600px;
      height: 120px;
    }
  }
 `;

export const Good = styled("section")`
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
    background-color: yellow;
    border-radius: 0.4rem;
    width: 100%;
    height: 6rem ;
    font-weight: 700;
    font-size: 2rem;
    border: 2px solid yellow;
    :hover{
      background-color: #c8c81d;
      transition: 1s;
    }
  }

`
