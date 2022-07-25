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


