import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '/src/views/Beranda.vue'
import KursusSaya from '/src/views/KursusSaya.vue'
import SemuaKursus from '/src/views/SemuaKursus.vue'
import Kategori from '/src/views/Kategori.vue'
import Progress from '/src/views/Progress.vue'
import Sertifikat from '/src/views/Sertifikat.vue'
import Profile from '/src/views/Profile.vue'
import Tentang from '/src/views/Tentang.vue'

const routes = [
  { path: '/', name: 'Beranda', component: Beranda },
  { path: '/kursus-saya', name: 'Kursus Saya', component: KursusSaya },
  { path: '/semua-kursus', name: 'Semua Kursus', component: SemuaKursus },
  { path: '/kategori', name: 'Kategori', component: Kategori },
  { path: '/progress', name: 'Progress', component: Progress },
  { path: '/sertifikat', name: 'Sertifikat', component: Sertifikat },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/tentang', name: 'Tentang', component: Tentang }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;