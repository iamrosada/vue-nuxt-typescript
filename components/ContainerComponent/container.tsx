import Vue from "vue"
import {Wrapper,Container} from "./styles"
import { Component, Prop } from "nuxt-property-decorator"
import { WelcomeComponent } from "../Welcome/welcome"
import { SearchComponent } from "../SearchComponent/search"
import { HeaderComponent } from "../Header/header"
import { StatusComponent } from "../StatusPassPort/status"
// import {CardComponent} from '../CardProduct/cardProduct'

@Component({})
export class ContainerComponent extends Vue{
 render(){
  return(
  <Container>
    <HeaderComponent/>
    <Wrapper>
      <WelcomeComponent/>
      <SearchComponent />
      {/* <StatusComponent/> */}
    </Wrapper>
  </Container>
  )
 }
}
