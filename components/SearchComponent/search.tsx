import Vue from "vue";
import { Search, ContainerInput } from "./styles";
import { Component, Emit, Prop, Watch } from "nuxt-property-decorator";
@Component
export class SearchComponent extends Vue {
  nameFind: string =''
  @Emit()
  onInputChange(e){
   this.nameFind = e.target.value
   return this.nameFind

  }
  @Emit()
  handleChange(){
  console.log(this.nameFind)
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
          <button onClick={this.handleChange}>Procurar</button>
        </div>
      </ContainerInput>
    );
  }
}
