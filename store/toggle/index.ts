import { Module } from 'vuex';
import { RootState } from '../types';
import { ToggleState } from './types';
import { getters } from '@/store/toggle/getters'
import { mutations } from '@/store/toggle/mutations'
import { actions } from '@/store/toggle/actions'

const state: ToggleState = {
  toggle: false,
  search: '',
  list: [],
  name: ''

}

export const isToggle: Module<ToggleState, RootState> = {
  state,
  getters,
  mutations,
  actions,
}
