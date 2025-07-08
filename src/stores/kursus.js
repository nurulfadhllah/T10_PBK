import { defineStore } from 'pinia'
import axios from 'axios'

export const useKursusStore = defineStore('kursus', {
  state: () => ({
    kursus: []
  }),
  actions: {
    async fetchKursus() {
      const res = await axios.get('http://localhost:3000/kursus')
      this.kursus = res.data
    },
   async addKursus(kursusBaru) {
    try {
      const res = await axios.post('http://localhost:3000/kursus', kursusBaru)
      this.kursus.push(res.data)
    } catch (e) {
      console.error('Gagal menambahkan kursus:', e)
      alert('❌ Gagal menambahkan kursus')
    }
  },
    async updateKursus(id, data) {
      await axios.patch(`http://localhost:3000/kursus/${id}`, data)
      this.fetchKursus()
    },
    async deleteKursus(id) {
      await axios.delete(`http://localhost:3000/kursus/${id}`)
      this.fetchKursus()
    }
  }
})
