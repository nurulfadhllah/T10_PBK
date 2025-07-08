import { defineStore } from 'pinia'
import axios from 'axios'

export const useKursusStore = defineStore('kursus', {
  state: () => ({
    kursus: []
  }),
  actions: {
    async fetchKursus() {
      const res = await axios.get('https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/kursus')
      this.kursus = res.data
    },
   async addKursus(kursusBaru) {
    try {
      const res = await axios.post('https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/kursus', kursusBaru)
      this.kursus.push(res.data)
    } catch (e) {
      console.error('Gagal menambahkan kursus:', e)
      alert('❌ Gagal menambahkan kursus')
    }
  },
    async updateKursus(id, data) {
      await axios.patch(`https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/kursus/${id}`, data)
      this.fetchKursus()
    },
    async deleteKursus(id) {
      await axios.delete(`https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/kursus/${id}`)
      this.fetchKursus()
    }
  }
})
