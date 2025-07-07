import { defineStore } from 'pinia'
import axios from 'axios'

export const useProfilStore = defineStore('profil', {
  state: () => ({
    profil: null
  }),
  actions: {
    async fetchProfil() {
      const res = await axios.get('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//profil')
      this.profil = res.data
    },
    async updateProfil(data) {
      const res = await axios.put('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//profil', data)
      this.profil = res.data
    }
  }
})
