import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    login(nama, email) {
      this.user = { nama, email }
    },
    logout() {
      this.user = null
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.user
  }
})
