import Vue, {  } from "vue"
import {Search,ContainerInput} from "./styles"
import { Component, Prop ,Watch} from "nuxt-property-decorator"


@Component
export class SearchComponent extends Vue{
 text=''
 @Watch('text')
 onInput(){
  console.log(this.text)
 }
 render(){
  return(
  <ContainerInput>
   <div>
     <Search type="text" placeholder="Digita o seu nome" v-model={this.text}/>
     <button>Procurar</button>
   </div>

  </ContainerInput>)
 }


}
