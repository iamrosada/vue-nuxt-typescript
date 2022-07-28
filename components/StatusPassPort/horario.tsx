import Vue from "vue";
import { Hora } from "./styles";
import { Component, Prop } from "nuxt-property-decorator";

@Component({})
export class HorarioStatus extends Vue {
  render() {
    return (
      <Hora>
        <ul>
          <li>
            <span>Telefone</span>
            <strong>+7 (499) 143-63-24 </strong>
          </li>
          <li>
            <span>Endereço</span>
            <strong>Moscovo, Ulofa Palme 6 </strong>
          </li>
          <li>
            <span>Atendimento ao público</span>
            <strong>Seg. Qua. Sex. - 10:00 - 15:00 </strong>
          </li>
        </ul>
      </Hora>
    );
  }
}
