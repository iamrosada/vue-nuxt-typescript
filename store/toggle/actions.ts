import { notify } from "@/utils/utils";
import { ActionTree } from "vuex/types/index";
import { RootState } from "../types";
import { ToggleState } from "./types";

const url = 'https://api.sheety.co/5d0329c7e797512f74ba599faf046c14/finalistStudent/sheet1'
export const actions: ActionTree<ToggleState, RootState> = {
  async getByName({ commit, state: { search } }): Promise<any> {
    console.log('Deus', search === "" ? "sim" : "nao")
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=utf-8" },
      })
      let data = await response.json();
      const resultado = data.sheet1.filter(({ name }) => {
        return name.toLowerCase().includes(search.toLowerCase())
      })
      if (resultado.length > 0 && search !== "") {
        notify({
          title: 'Success',
          type: 'success',
          message: 'Foi encontrado os Estudantes'
        })

        commit('toggleActive', true)
      }
      if (resultado.length === 0) {
        notify({
          title: 'Error',
          type: 'error',
          message: 'Não foi encontrado o estudante'
        })
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
