<template>
  <div class="beranda">
    <h2>Halo 👋</h2>
    <p>Selamat datang di platform <strong>MyCourse</strong>. Siap untuk belajar hari ini?</p>

    <div class="highlight">
      <p>📘 Kursus Aktif: <strong>{{ total }}</strong></p>
      <router-link to="/kursus-saya" class="btn-mulai">Lihat Kursus Saya</router-link>
    </div>
  </div>
</template>

<script setup>
import { useKursusStore } from '../stores/kursus'
import { onMounted } from 'vue'

const store = useKursusStore()
onMounted(() => store.fetchKursus())
const total = store.kursus.length
</script>

<style scoped>
.beranda {
  padding: 2rem;
  background-color: #fff3f6;
  border-radius: 10px;
}
.highlight {
  margin-top: 2rem;
  padding: 1rem;
  background: #fde2e4;
  border-left: 5px solid #c9184a;
  border-radius: 6px;
}
.btn-mulai {
  display: inline-block;
  margin-top: 1rem;
  background: #c9184a;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
}
</style>
