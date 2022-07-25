import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/_types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: 'Hello God, YOU ARE POWERFULLY'

  },
  modules: {

  }

}

export default new Vuex.Store<RootState>(store)
