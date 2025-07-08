import { defineStore } from 'pinia'
import axios from 'axios'

export const useProfilStore = defineStore('profil', {
  state: () => ({
    profil: null
  }),
  actions: {
    async fetchProfil() {
      const res = await axios.get('https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/profil')
      this.profil = res.data
    },
    async updateProfil(data) {
      const res = await axios.put('https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/user', data)
      this.profil = res.data
    }
  }
})
