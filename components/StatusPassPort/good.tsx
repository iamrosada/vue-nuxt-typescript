import Vue from "vue";
import { Good } from "./styles";
import { Component, Prop } from "nuxt-property-decorator";
import { HorarioStatus } from "./horario";

@Component({})
export class GoodStatus extends Vue {
  handleToggleToFalse() {
    console.log("clicou");
    this.$store.commit("toggleActive", false);
  }
  render() {
    return (
      <Good>
        <h1>Está pronto!</h1>
        <p>
          O seu Passaporte já se encontra pronto, podes levantar na Embaixada de
          Angola em Moscovo.
        </p>
        <HorarioStatus />
        <button onClick={this.handleToggleToFalse}>
          Continuar a pesquisar
        </button>
      </Good>
    );
  }
}
