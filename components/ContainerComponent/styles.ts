import styled from "vue-styled-components"

export const Wrapper = styled("div")`
display: flex;
max-width: 1100px;
margin: 0 auto;
justify-content: space-between;
padding: 90px 10px 0px 10px;

@media (min-width:190px) and (max-width:790px) {
     display: flex;
     flex-direction: column;
     margin: 0 auto;
     padding: 30px 10px 0px 10px;
  }
`;

export const Container = styled("div")`
margin-top: 30px;
@media (min-width:190px) and (max-width:790px) {
     margin: 0 auto;
     padding: 0px 10px 0px 10px;
  }
`;
