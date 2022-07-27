import Vue from "vue"
import {Wrapper,Container} from "./styles"
import { Component, Prop } from "nuxt-property-decorator"
import { WelcomeComponent } from "../Welcome/welcome"
import { SearchComponent } from "../SearchComponent/search"
import { HeaderComponent } from "../Header/header"
import { StatusComponent } from "../StatusPassPort/status"
import { mapActions } from "vuex"
// import {CardComponent} from '../CardProduct/cardProduct'

// @Component({computed:{
//   // ...mapActions(['isToggle/toggleActive'])
// }})
@Component({
  computed:{
    toggleComponent(){
      return this.$store.state.isToggle.toggle
    }
  }
})
export class ContainerComponent extends Vue{
  public toggleComponent!: () => boolean;
  // get toggleActive(){
  //   return this.$store.commit('toggleActive')
  // }
  // get toggleComponent(){
  //  return this.$store.state.isToggle.toggle
  // }
  // // get getActive(){
  // //   return this.$store.state.toggle
  // // }
  // set toggleComponent(value){
  //   console.log(value)
  //   this.$store.state.isToggle.toggle = value
  // }
  mounted(){
    console.log('virifando')
  }
 render(){
  return(
  <Container>
    <HeaderComponent/>
    v {this.toggleComponent}
    <Wrapper>

      {Boolean(this.toggleComponent)===false? <WelcomeComponent/> : null }
      {/* <WelcomeComponent/>  */}

      {/* <SearchComponent /> */}
      {/* <StatusComponent/> */}

      {Boolean(this.toggleComponent)=== true ? <StatusComponent/> : <SearchComponent />}
    </Wrapper>
  </Container>
  )
 }
}
