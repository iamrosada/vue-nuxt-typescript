import Vue from "vue";
import { ContainerStatus } from "./styles";
import { Component, Prop } from "nuxt-property-decorator";
import { GoodStatus } from "./good";

@Component({})
export class StatusComponent extends Vue {
  render() {
    return (
      <ContainerStatus>
        <div>
          <GoodStatus />
        </div>
      </ContainerStatus>
    );
  }
}
