# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).

//index.this
//state
export interface Istate {
  nameFind: null | string
}
export const state = (): Istate => ({
  nameFind: ''
})

//getters
export const getters = {

}

//actions
export const actions = {
  getStudent({ commit, event }) {
    const listOfStudents = ['Apple', 'Orange', 'Banana'];

    // commit("findStudent", listOfStudents)

    return listOfStudents
  }
}

//mutations
export const mutations = {
  findStudent(state, listOfStudents) {

  }
}


