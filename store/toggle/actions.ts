import { ActionTree } from "vuex/types/index";
import { RootState } from "../types";
import { ToggleState } from "./types";

const url = 'https://api.sheety.co/5d0329c7e797512f74ba599faf046c14/finalistStudent/sheet1'
export const actions: ActionTree<ToggleState, RootState> = {
  async getByName({ commit, state: { search } }): Promise<any> {

    try {
      let response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=utf-8" },
      })
      let data = await response.json();
      const resultado = data.sheet1.filter(({ name }) => {
        return name.toLowerCase().includes(search.toLowerCase())
      })
      if (resultado.length > 0) {
        commit('toggleActive', true)
      }
      if (resultado.length === 0) {
        commit('toggleActive', false)
      }
      commit('getByName', data.sheet1)
    } catch (error) {
      return Promise.reject(error)
    }

  },
  toggleActive: ({ commit }, payload) => {
    commit("toggleActive", payload)

  }
}
