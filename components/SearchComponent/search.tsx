import Vue, { ComponentOptions } from "vue";
import { Search, ContainerInput } from "./styles";
// import store from '@/store/modules/index'
import { Component, Emit, Prop, Watch } from "nuxt-property-decorator";
import { DefaultData, DefaultMethods, DefaultComputed, PropsDefinition, DefaultProps } from "vue/types/options";
// import {namespace} from 'vuex-class'


// import { mapMutations} from 'vuex'
// const stu = namespace('FindStudent')
@Component({
  methods:{
    foundStudent(){
      this.$store.dispatch('getByName')
    }
  },
  computed:{

  }
})
export class SearchComponent extends Vue {
  public foundStudent!: () => {};
  get helloMessage(): string{
    return this.$store.state.helloMessage
  }
  set helloMessage(value) {
    this.$store.state.helloMessage = value
  }
  get getStudent(){
    console.log('vvv')
    return ''

  }
  get getActive(){
    return this.$store.state.toggle
  }
  set getActive(value){
    console.log(value)
    this.$store.state.toggle=value
  }
  @Emit()
  handleSearch(e){
    e.preventDefault()
    this.getStudent = e.target.value
    this.helloMessage=e.target.value
  }

  set getStudent(value){
    console.log('value', {t:this.$store.state.toggle})
    this.$store.commit('SET_NAME',value)
  }

  render() {
    return (
      <ContainerInput>
        {this.helloMessage},

        <div>
        {this.getActive}
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
