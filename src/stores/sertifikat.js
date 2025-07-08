import { defineStore } from 'pinia'
import axios from 'axios'

export const useSertifikatStore = defineStore('sertifikat', {
  state: () => ({
    sertifikat: []
  }),
  actions: {
    async fetchSertifikat() {
      try {
<<<<<<< HEAD
        const res = await axios.get('http://localhost:3000/sertifikat')
=======
        const res = await axios.get('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//sertifikat')
>>>>>>> b24c2add3ccb8a8f76399a1490f696b23cf3ab8f
        this.sertifikat = res.data
      } catch (e) {
        console.error('Gagal fetch sertifikat', e)
      }
    },
    async uploadSertifikat(file, userId = 1) {
      const namaFile = file.name
<<<<<<< HEAD
      await axios.post('http://localhost:3000/sertifikat', {
=======
      await axios.post('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//sertifikat', {
>>>>>>> b24c2add3ccb8a8f76399a1490f696b23cf3ab8f
        namaFile,
        userId
      })
      this.fetchSertifikat()
    }
  }
})
