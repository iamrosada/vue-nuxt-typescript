import styled from "vue-styled-components"

export const Welcome = styled("span")`
animation: backInLeft;
animation-duration: 1s;
max-width: 480px;
word-wrap: break-word;
font-size: max(6rem, 2vw);
font-weight: 700;

@media (min-width:190px) and (max-width:790px) {
     font-size: min(6rem, 10vw);

  }
`;
