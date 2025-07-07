import { defineStore } from 'pinia'
import axios from 'axios'

export const useKursusStore = defineStore('kursus', {
  state: () => ({
    kursus: []
  }),
  actions: {
    async fetchKursus() {
      const res = await axios.get('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev/kursus')
      this.kursus = res.data
    },
   async addKursus(kursusBaru) {
    try {
      const res = await axios.post('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev/kursus', kursusBaru)
      this.kursus.push(res.data)
    } catch (e) {
      console.error('Gagal menambahkan kursus:', e)
      alert('❌ Gagal menambahkan kursus')
    }
  },
    async updateKursus(id, data) {
      await axios.patch(`https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//kursus/${id}`, data)
      this.fetchKursus()
    },
    async deleteKursus(id) {
      await axios.delete(`https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//${id}`)
      this.fetchKursus()
    }
  }
})
