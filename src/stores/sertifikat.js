import { defineStore } from 'pinia'
import axios from 'axios'

export const useSertifikatStore = defineStore('sertifikat', {
  state: () => ({
    sertifikat: []
  }),
  actions: {
    async fetchSertifikat() {
      try {
        const res = await axios.get('https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/sertifikat')
        this.sertifikat = res.data
      } catch (e) {
        console.error('Gagal fetch sertifikat', e)
      }
    },
    async uploadSertifikat(file, userId = 1) {
      const namaFile = file.name
      await axios.post('https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/sertifikat', {
        namaFile,
        userId
      })
      this.fetchSertifikat()
    }
  }
})
