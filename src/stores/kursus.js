import { defineStore } from 'pinia'
import axios from 'axios'

export const useKursusStore = defineStore('kursus', {
  state: () => ({
    kursus: []
  }),
  actions: {
    async fetchKursus() {
<<<<<<< HEAD
      const res = await axios.get('http://localhost:3000/kursus')
=======
      const res = await axios.get('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev/kursus')
>>>>>>> b24c2add3ccb8a8f76399a1490f696b23cf3ab8f
      this.kursus = res.data
    },
   async addKursus(kursusBaru) {
    try {
<<<<<<< HEAD
      const res = await axios.post('http://localhost:3000/kursus', kursusBaru)
=======
      const res = await axios.post('https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev/kursus', kursusBaru)
>>>>>>> b24c2add3ccb8a8f76399a1490f696b23cf3ab8f
      this.kursus.push(res.data)
    } catch (e) {
      console.error('Gagal menambahkan kursus:', e)
      alert('❌ Gagal menambahkan kursus')
    }
  },
    async updateKursus(id, data) {
<<<<<<< HEAD
      await axios.patch(`http://localhost:3000/kursus/${id}`, data)
      this.fetchKursus()
    },
    async deleteKursus(id) {
      await axios.delete(`http://localhost:3000/kursus/${id}`)
=======
      await axios.patch(`https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//kursus/${id}`, data)
      this.fetchKursus()
    },
    async deleteKursus(id) {
      await axios.delete(`https://d1f440cb-fc40-4a70-ba0e-8a994b535b78-00-1sza5lvku4kaa.pike.replit.dev//${id}`)
>>>>>>> b24c2add3ccb8a8f76399a1490f696b23cf3ab8f
      this.fetchKursus()
    }
  }
})
