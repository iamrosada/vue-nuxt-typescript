import { Module } from 'vuex';
import { RootState } from '../_types';
import { ToggleState } from './_types';

const state: ToggleState = {
  toggle: false
}

export const isToggle: Module<ToggleState, RootState> = {
  state
}
