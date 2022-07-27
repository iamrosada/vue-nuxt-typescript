import { GetterTree } from "vuex";
import { RootState } from "../types";
import { ToggleState } from "./types";


export const getters: GetterTree<ToggleState, RootState> = {
  active: (state): boolean => {
    return state.toggle
  },
  getActive: (state): boolean => {
    return state.toggle
  }


}
