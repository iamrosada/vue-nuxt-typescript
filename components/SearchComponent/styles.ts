import styled from "vue-styled-components"

export const Search = styled("input")`
 border-color: #ffc127;
 border-radius: 6px 0 0 6px;
 height: 8.5rem;
 width: 400px;
 padding: 2rem;
 font-size: 2rem;
 :focus{
   outline: none;

 }
 `;

export const ContainerInput = styled("div")`
display: flex;
align-items: center;
 >div{
  display: flex;
  justify-content: center;

  align-items: center;
    >button{
    color: red;
    width: 15rem;
    height: 8.5rem;
    padding: 2rem;
    font-size: 2.5rem;
    background-color: #ffc127;

    border: none;
    color: #000;
    font-style: normal;
    border-radius: 0 6px 6px 0 ;
    :hover{
      background-color: #ffc119;
    }

  }
}

`;
