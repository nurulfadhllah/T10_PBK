<template>
  <div class="beranda">
    <h2>👋 Selamat datang di MyCourse</h2>
    <p>Aplikasi pembelajaran online untuk membantu kamu belajar lebih terarah.</p>

    <div class="info-konten">
      <div class="kotak">
        <h3>📚 Total Kursus</h3>
        <p>{{ totalKursus }}</p>
      </div>
      <div class="kotak">
        <h3>🎯 Rata-rata Progress</h3>
        <p>{{ rataProgress.toFixed(1) }}%</p>
      </div>
      <div class="kotak">
        <h3>🧾 Sertifikat</h3>
        <p>{{ totalSertifikat }}</p>
      </div>
    </div>

    <div class="motivasi">
      <h4>🔥 Ayo lanjutkan belajarmu hari ini!</h4>
      <router-link to="/kursus-saya" class="btn">Lihat Kursus Saya</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useKursusStore } from '../stores/kursus'
import { useSertifikatStore } from '../stores/sertifikat'

const kursusStore = useKursusStore()
const sertifikatStore = useSertifikatStore()

onMounted(() => {
  kursusStore.fetchKursus()
  sertifikatStore.fetchSertifikat()
})

const totalKursus = computed(() => kursusStore.kursus.length)
const totalSertifikat = computed(() => sertifikatStore.sertifikat.length)

const rataProgress = computed(() => {
  if (kursusStore.kursus.length === 0) return 0
  const total = kursusStore.kursus.reduce((sum, k) => sum + k.progress, 0)
  return total / kursusStore.kursus.length
})
</script>

<style scoped>
.beranda {
  padding: 2rem;
  background-color: #fff0f3;
  border-radius: 12px;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  color: #6a040f;
  margin-bottom: 0.5rem;
}

.info-konten {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.kotak {
  background: #ffe3ec;
  padding: 1rem 2rem;
  border-radius: 10px;
  flex: 1;
  min-width: 180px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.kotak h3 {
  margin-bottom: 0.5rem;
  color: #370617;
}

.kotak p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #9d0208;
}

.motivasi {
  margin-top: 2rem;
  background-color: #fcd5ce;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
}

.btn {
  display: inline-block;
  margin-top: 0.5rem;
  background: #6a040f;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
}

.btn:hover {
  background: #a4161a;
}
</style>
