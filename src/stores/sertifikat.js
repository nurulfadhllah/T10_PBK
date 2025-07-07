import { defineStore } from 'pinia'
import axios from 'axios'

export const useSertifikatStore = defineStore('sertifikat', {
  state: () => ({
    sertifikat: []
  }),
  actions: {
    async fetchSertifikat() {
      try {
        const res = await axios.get('http://localhost:3001/sertifikat')
        this.sertifikat = res.data
      } catch (e) {
        console.error('Gagal fetch sertifikat', e)
      }
    },
    async uploadSertifikat(file, userId = 1) {
      const namaFile = file.name
      await axios.post('http://localhost:3001/sertifikat', {
        namaFile,
        userId
      })
      this.fetchSertifikat()
    }
  }
})
