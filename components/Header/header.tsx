import Vue from "vue";
import { ContainerHeader } from "./styles";
import { Component, Prop } from "nuxt-property-decorator";

const urlImgSme =
  "https://www.sme.gov.ao/wp-content/themes/portalsme/assets/SME%20GOV.ao%20MAUSC.png";
const urlImg =
  "https://embaixadaangolaru.ru/wp-content/uploads/2020/10/cropped-banner-1-1.jpg";

@Component({})
export class HeaderComponent extends Vue {
  render() {
    return (
      <ContainerHeader>
        <div id="embassy-container">
          <img id="embassy" src={urlImg} alt="sim" />
        </div>
        <div id="container-sme">
          <img id="sme-img" src={urlImgSme} alt="sim" />
        </div>
      </ContainerHeader>
    );
  }
}
