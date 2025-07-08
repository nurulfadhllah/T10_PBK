<template>
  <div class="kursus-saya">
    <h2>📘 Kursus Saya</h2>

    <div v-if="kursusSaya.length === 0" class="kosong">
      Kamu belum mengikuti kursus apapun.
    </div>

    <div class="daftar-kursus">
      <div class="card-kursus" v-for="k in kursusSaya" :key="k.id">
        <h3>{{ k.judul }}</h3>
        <p><strong>Kategori:</strong> {{ k.kategori }}</p>
        <div class="progress-container">
          <div class="progress-bar" :style="{ width: k.progress + '%' }"></div>
        </div>
        <p class="persen">{{ k.progress }}% Selesai</p>
        <router-link :to="'/kursus/' + k.id" class="btn-detail">Lihat Detail</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useKursusStore } from '../stores/kursus'

const store = useKursusStore()
onMounted(() => store.fetchKursus())

const kursusSaya = computed(() =>
  store.kursus.filter(k => k.progress > 0)
)
</script>

<style scoped>
.kursus-saya {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  color: #6a040f;
  margin-bottom: 1rem;
}

.kosong {
  background-color: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 6px;
}

.daftar-kursus {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 1rem;
}

.card-kursus {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 1.5rem;
  transition: transform 0.2s;
}

.card-kursus:hover {
  transform: translateY(-5px);
}

.card-kursus h3 {
  margin: 0 0 0.5rem;
  color: #370617;
}

.progress-container {
  background-color: #f1f1f1;
  border-radius: 10px;
  height: 14px;
  margin: 1rem 0 0.5rem;
  overflow: hidden;
}

.progress-bar {
  background-color: #9d0208;
  height: 100%;
  transition: width 0.4s ease;
}

.persen {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  color: #444;
}

.btn-detail {
  display: inline-block;
  background-color: #9d0208;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: background-color 0.3s ease;
}

.btn-detail:hover {
  background-color: #d00000;
}
</style>
