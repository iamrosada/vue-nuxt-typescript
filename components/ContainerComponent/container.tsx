import Vue from "vue";
import { Wrapper, Container } from "./styles";
import { Component, Prop } from "nuxt-property-decorator";
import { WelcomeComponent } from "../Welcome/welcome";
import { SearchComponent } from "../SearchComponent/search";
import { HeaderComponent } from "../Header/header";
import { StatusComponent } from "../StatusPassPort/status";
import { GoogleMap } from "../GoogleMaps/googleMaps";

@Component({})
export class ContainerComponent extends Vue {
  mounted() {
    console.log("vigiando", this.$store.state.isToggle.toggle);
  }
  get isToggle() {
    return this.$store.state.isToggle.toggle;
  }
  render() {
    return (
      <Container>
        <HeaderComponent />
        <Wrapper>
          {this.isToggle === false ? <WelcomeComponent /> : null}

          {this.isToggle === true ? <StatusComponent /> : <SearchComponent />}
        </Wrapper>
        <GoogleMap />
      </Container>
    );
  }
}
