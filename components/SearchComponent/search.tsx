import Vue, { ComponentOptions } from "vue";
import { Search, ContainerInput } from "./styles";
import { Component, Emit, Prop, Watch } from "nuxt-property-decorator";

@Component({
  methods: {},
  computed: {},
})
export class SearchComponent extends Vue {
  // public foundStudent!: () => {};
  //method
  foundStudent() {
    console.log("apenas", this.$store.state.isToggle.toggle);
    this.$store.dispatch("getByName");
  }

  get helloMessage(): string {
    return this.$store.state.helloMessage;
  }

  get getStudent() {
    return "";
  }

  handleSearch(e) {
    e.preventDefault();
    if (e.target.value !== " ") {
      this.getStudent = e.target.value;
    }
  }

  set getStudent(value) {
    if (value !== "") {
      this.$store.commit("SET_NAME", value);
    }
  }

  render() {
    return (
      <ContainerInput>
        <div>
          <Search
            type="text"
            placeholder="Digita o seu nome"
            onChange={(e) => {
              this.handleSearch(e);
            }}
          />
          <button onClick={this.foundStudent}>Procurar</button>
        </div>
      </ContainerInput>
    );
  }
}
