import Vue from "vue";
import { Search, ContainerInput } from "./styles";
import store from '@/store/index'
import { Component, Emit, Prop, Watch } from "nuxt-property-decorator";
// import {namespace} from 'vuex-class'


// import { mapMutations} from 'vuex'
// const stu = namespace('FindStudent')
@Component
export class SearchComponent extends Vue {

  // nameFind: string ='';
  // listOfStudents: Array<string> = ['Apple', 'Orange', 'Banana'];
  // @stu.Mutation
  // public onInputChange!: (e)=>Promise<boolean>
  // // @Emit()
  // // onInputChange(e: { target: { value: string; }; }){
  // //  this.nameFind = e.target.value
  // //  return this.nameFind

  // }
  // @Emit()
  // handleChange(){
  // const foundStudent = this.listOfStudents.some((item)=>item.toLowerCase()===this.nameFind.toLowerCase())
  // console.log(this.nameFind, foundStudent)
  // }
  // public onChange(e):void{
  //   console.log("this.onInputChange(e)",this.onInputChange(e))
  // }
  get helloMessage(): string{
    return this.$store.state.helloMessage
  }
  render() {
    return (
      <ContainerInput>
        {this.helloMessage}
        <div>
          <Search
            type="text"
            placeholder="Digita o seu nome"
            onChange={()=>{}}

          />
          <button onClick={()=>{}}>Procurar</button>
        </div>
      </ContainerInput>
    );
  }
}
///
import Vue, { ComponentOptions } from "vue";
import { Search, ContainerInput } from "./styles";
import { Component, Emit, Prop, Watch } from "nuxt-property-decorator";
import { DefaultData, DefaultMethods, DefaultComputed, PropsDefinition, DefaultProps } from "vue/types/options";

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
