import { MutationTree } from 'vuex';
import { ToggleState } from './types';

interface IStudent {
  name: string
  class: string
  yearStart: string
  country: string
  email: string
  yearGraduated: string
  id: number
}
export const mutations: MutationTree<ToggleState> = {
  SET_NAME(state, payload: string) {
    console.log(payload, 'is true')
    return state.search = payload
  },
  getByName({ list, search, toggle, }, payload: IStudent[]) {
    console.log(payload, "payload")
    const resultado = payload.filter(({ name }) => {
      return name.toLowerCase().includes(search.toLowerCase())
    })

    console.log(toggle, 'toggle antes')
    console.log(resultado, 'resultado')
    if (resultado.length > 0) {
      toggle = true;

    }
    else {
      toggle = false;
    }
    console.log(toggle, 'toggle depois')
  },
  toggleActive: (state, payload) => {
    state.search = payload
    // try {
    //   let response = await fetch(url, {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json; charset=utf-8" },
    //   })
    //   let data = await response.json();

    //   commit('getByName', data.sheet1)
    // } catch (error) {
    //   return Promise.reject(error)
    // }

  }
}
