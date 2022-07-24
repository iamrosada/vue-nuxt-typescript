import Vue from "vue"
import { Good} from "./styles"
import { Component, Prop } from "nuxt-property-decorator"

@Component({})
export class GoodStatus extends Vue{
 render(){
  return(
 <Good>
    <h1>
      Está pronto!
    </h1>
    <p>
      O seu Passaporte já se encontra pronto, podes levantar na Embaixada de Angola em Moscovo.
    </p>

    <button>
      Continuar a pesquisar
    </button>
 </Good>
  )
 }
}
