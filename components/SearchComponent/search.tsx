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
  get helloMesage(): string{
    return this.$store.state.helloMessage
  }
  render() {
    return (
      <ContainerInput>
        {this.helloMesage}
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
