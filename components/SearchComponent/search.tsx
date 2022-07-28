import Vue, { ComponentOptions } from "vue";
import { Search, ContainerInput } from "./styles";
import { Component, Emit, Prop, Watch } from "nuxt-property-decorator";


@Component({
  methods:{

  },
  computed:{

  }
})
export class SearchComponent extends Vue {
  // public foundStudent!: () => {};
  //method
  foundStudent(){
    console.log('apenas',this.$store.state.isToggle.toggle)
    this.$store.dispatch('getByName')
  }

  get helloMessage(): string{
    return this.$store.state.helloMessage
  }

  get getStudent(){

    return ''

  }


  handleSearch(e){
    e.preventDefault()
  //  console.log( "getter active", this.$store.getters.active)

    this.getStudent = e.target.value
  }

  set getStudent(value){
    console.log('value', {t:this.$store.state.toggle})
    this.$store.commit('SET_NAME',value)
  }

  render() {
    return (
      <ContainerInput>
        {/* {this.helloMessage} */}
        <div>
          <Search
            type="text"
            placeholder="Digita o seu nome"
            onChange={(e)=>{this.handleSearch(e)}}

          />
          <button onClick={this.foundStudent}>Procurar</button>
        </div>
      </ContainerInput>
    );
  }
}
