import Vue from "vue"
import {GoogleM} from "./styles"
import { Component } from "nuxt-property-decorator";

/**
 * Esse component foi criado para eu mostrar
 *  no map a location da embaixada de angola na russia
 */
@Component({
})
export class GoogleMap extends Vue{
  center :object = { lat: 45.508, lng: -73.587 }
 render(){
  return(
    <GoogleM>

    </GoogleM>

  )
 }
}
