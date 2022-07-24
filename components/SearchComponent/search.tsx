import Vue from "vue";
import { Search, ContainerInput } from "./styles";
import { Component, Emit, Prop, Watch } from "nuxt-property-decorator";
@Component
export class SearchComponent extends Vue {
  @Emit()
  onInputChange(e){
    console.log("vvvv--->", e.target.value)
    return e.target.value

  }

  render() {
    return (
      <ContainerInput>
        <div>
          <Search
            type="text"
            placeholder="Digita o seu nome"
            onChange={this.onInputChange}

          />
          <button>Procurar</button>
        </div>
      </ContainerInput>
    );
  }
}
