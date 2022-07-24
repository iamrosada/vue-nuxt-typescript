import styled from "vue-styled-components"

export const ContainerHeader = styled("div")`

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
