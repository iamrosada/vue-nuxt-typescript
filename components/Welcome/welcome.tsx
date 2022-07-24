import Vue from "vue"
import {Welcome} from "./styles"
import { Component, Prop } from "nuxt-property-decorator"
// import {CardComponent} from '../CardProduct/cardProduct'

@Component({})
export class WelcomeComponent extends Vue{
 render(){
  return(
    <Welcome>
      Olá, podes pesquisar e ver se teu passaporte já saiu!
    </Welcome>
  )
 }
}
