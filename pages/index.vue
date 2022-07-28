<template>
  <ContainerComponent/>
</template>

<script lang="ts">
import Vue from 'vue'
import {ContainerComponent} from '../components/ContainerComponent/container'
//google maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE',
    libraries: 'places',
  }
});
// Element UI
import ElementUI from 'element-ui'
import '@/assets/styles/element.scss'
Vue.use(ElementUI)
//styles
import 'animate.css';
import  '../assets/css/main.css'

export default Vue.extend({
 components:{
  ContainerComponent,
 },
// store: store
})
</script>
