import Vue from "vue"
import {Search,ContainerInput} from "./styles"
import { Component, Prop } from "nuxt-property-decorator"


@Component({})
export class SearchComponent extends Vue{
 render(){
  return(
  <ContainerInput>
   <div>
     <Search placeholder="Digita o seu nome" onChange={(event)=> console.log(event.target.value)}/>
     <button>Procurar</button>
   </div>
  </ContainerInput>)
 }
}
