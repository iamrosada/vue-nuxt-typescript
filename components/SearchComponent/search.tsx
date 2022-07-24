import Vue from "vue";
import { Search, ContainerInput } from "./styles";
import { Component, Emit, Prop, Watch } from "nuxt-property-decorator";
@Component
export class SearchComponent extends Vue {
  nameFind: string ='';
  listOfStudents: Array<string> = ['Apple', 'Orange', 'Banana'];
  @Emit()
  onInputChange(e){
   this.nameFind = e.target.value
   return this.nameFind

  }
  @Emit()
  handleChange(){
  const foundStudent = this.listOfStudents.some((item)=>item.toLowerCase()===this.nameFind)
  console.log(this.nameFind, foundStudent)
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
