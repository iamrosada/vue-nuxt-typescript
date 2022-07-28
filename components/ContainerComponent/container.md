import Vue from "vue"
import {Wrapper,Container} from "./styles"
import { Component, Prop } from "nuxt-property-decorator"
import { WelcomeComponent } from "../Welcome/welcome"
import { SearchComponent } from "../SearchComponent/search"
import { HeaderComponent } from "../Header/header"
import { StatusComponent } from "../StatusPassPort/status"
import { mapActions } from "vuex"
import { GoogleMap } from "../GoogleMaps/googleMaps"
// import {CardComponent} from '../CardProduct/cardProduct'

// @Component({computed:{
//   // ...mapActions(['isToggle/toggleActive'])
// }})
@Component({
  // computed:{
  //   toggleComponent(){
  //     return this.$store.state.isToggle.toggle
  //   }
  // }
})
export class ContainerComponent extends Vue{
  // public toggleComponent!: () => boolean;
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
    console.log('virifando',this.$store.state.isToggle.toggle)
  }
 render(){
  return(
  <Container>
    <HeaderComponent/>
    {/* v {this.$store.state.isToggle.toggle} */}
    <Wrapper>

      {this.$store.state.isToggle.toggle===false? <WelcomeComponent/> : null }
      {/* <WelcomeComponent/>  */}

      {/* <SearchComponent /> */}
      {/* <StatusComponent/> */}

      {this.$store.state.isToggle.toggle=== true ? <StatusComponent/> : <SearchComponent />}
    </Wrapper>
    <GoogleMap/>
  </Container>
  )
 }
}
