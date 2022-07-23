<template>
  <ContainerComponent/>
</template>

<script lang="ts">
import Vue from 'vue'
import {ContainerComponent} from '../components/ContainerComponent/container'

import  '../assets/css/main.css'

export default Vue.extend({
 components:{
  ContainerComponent,
 }
})
</script>
