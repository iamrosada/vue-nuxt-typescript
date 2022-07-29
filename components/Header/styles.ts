import styled from "vue-styled-components"

export const ContainerHeader = styled("div")`

  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  >div#embassy-container{
    >img#embassy{
      max-width: 300px;
      max-height: 120px;
      width: 100%;
      height: auto;
    }
  }
  >div#container-sme{
    >img{
      max-width: 600px;
      max-height: 120px;
      width: 100%;
      height: auto;
    }
  }

  @media (min-width:190px) and (max-width:790px) {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     padding: 10px;
  }
 `;
