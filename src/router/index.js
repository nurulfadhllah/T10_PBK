import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../views/Beranda.vue'
import KursusSaya from '../views/KursusSaya.vue'
import SemuaKursus from '../views/SemuaKursus.vue'
import Kategori from '../views/Kategori.vue'
import Sertifikat from '../views/Sertifikat.vue'
import Profile from '../views/Profile.vue'
import Progress from '../views/Progress.vue'
import Tentang from '../views/Tentang.vue'
import Login from '../views/Login.vue'
import DetailKursus from '../views/DetailKursus.vue' // Tambahkan ini
import FormKursus from '../views/FormKursus.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/kursus-saya', component: KursusSaya },
  { path: '/semua-kursus', component: SemuaKursus },
  { path: '/kategori', component: Kategori },
  { path: '/progress', component: Progress },
  { path: '/sertifikat', component: Sertifikat },
  { path: '/profile', component: Profile },
  { path: '/tentang', component: Tentang },
  { path: '/login', component: Login },

  // 👇 Route Dinamis untuk detail kursus
  { path: '/kursus/:id', component: DetailKursus },
  { path: '/tambah-kursus', component: FormKursus },
  { path : '/edit-kursus/:id', component: FormKursus, props: true}, // Route untuk edit kursus
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
