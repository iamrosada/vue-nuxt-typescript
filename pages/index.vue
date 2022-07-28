<template>
  <ContainerComponent/>
</template>

<script lang="ts">
import Vue from 'vue'
import {ContainerComponent} from '../components/ContainerComponent/container'
// import store from '@/store'

// Element UI
import ElementUI from 'element-ui'
import '@/assets/styles/element.scss'
Vue.use(ElementUI)
//styles
import  '../assets/css/main.css'

export default Vue.extend({
 components:{
  ContainerComponent,
 },
// store: store
})
</script>
