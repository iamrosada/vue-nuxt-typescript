import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/types';
import { isToggle } from '@/store/toggle/index'

Vue.use(Vuex);
export default () => new Vuex.Store({
  state: () => ({
    helloMessage: 'Hello God, YOU ARE POWERFULLY',
    testhelo: false
  }),
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    isToggle
  }
})
// const store: StoreOptions<RootState> = {
//   state: () => ({
//     helloMessage: 'Hello God, YOU ARE POWERFULLY'

//   }),
//   actions: {},
//   getters: {},
//   mutations: {},
//   modules: {
//     isToggle
//   }

// }

// export default new Vuex.Store<RootState>(store)

// export default { store }
