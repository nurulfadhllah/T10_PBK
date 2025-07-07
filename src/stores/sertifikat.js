import { defineStore } from 'pinia'
import axios from 'axios'

export const useSertifikatStore = defineStore('sertifikat', {
  state: () => ({
    sertifikat: []
  }),
  actions: {
    async fetchSertifikat() {
      try {
        const res = await axios.get('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//sertifikat')
        this.sertifikat = res.data
      } catch (e) {
        console.error('Gagal fetch sertifikat', e)
      }
    },
    async uploadSertifikat(file, userId = 1) {
      const namaFile = file.name
      await axios.post('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//sertifikat', {
        namaFile,
        userId
      })
      this.fetchSertifikat()
    }
  }
})
