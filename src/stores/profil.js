import { defineStore } from 'pinia'
import axios from 'axios'

export const useProfilStore = defineStore('profil', {
  state: () => ({
    profil: null
  }),
  actions: {
    async fetchProfil() {
      const res = await axios.get('http://localhost:3001/profil')
      this.profil = res.data
    },
    async updateProfil(data) {
      const res = await axios.put('http://localhost:3001/profil', data)
      this.profil = res.data
    }
  }
})
