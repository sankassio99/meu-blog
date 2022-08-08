

export const state = () => ({
    userCurrent:''
})
  
export const mutations = {
    add(state, user) {
      state.userCurrent = user
    },
    remove(state) {
      state.userCurrent = null
    },
}

export const getters = {
  get: (state) => {
    return state.userCurrent;
  }
}