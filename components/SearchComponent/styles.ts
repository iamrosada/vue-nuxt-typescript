import styled from "vue-styled-components"

export const Search = styled("input")`
 border-color: #ffc127;
 border-radius: 6px 0 0 6px;
 height: 8.5rem;
 max-width: 400px;
 width: 100%;
 padding: 2rem;
 font-size: min(2rem, 5vw);
 :focus{
   outline: none;

 }

 `;

export const ContainerInput = styled("div")`
 animation: backInRight;
 animation-duration: 1s;
display: flex;
align-items: center;
 >div{
  display: flex;
  justify-content: center;

  align-items: center;
    >button{
    color: red;
    max-width: 15rem;
    height: 8.5rem;

    padding: 2rem;
    font-size: min(2.5rem, 5vw);
    background-color: #ffc127;

    border: none;
    color: #000;
    font-style: normal;
    border-radius: 0 6px 6px 0 ;
    :hover{
      background-color: #ffc119;
    }

  }
  @media (min-width:190px) and (max-width:790px) {

     margin-top: 25px;
     >input{
      height: max(8.5rem, 5vw);
     }
     >button{
      height: max(8.5rem, 5vw);
     }


  }
}

`;
