<template>
  <div class="kategori">
    <h2>🗂️ Daftar Kategori Kursus</h2>
    <ul>
      <li v-for="k in kategoriUnik" :key="k.kategori">
        🔖 {{ k.kategori }} <span class="jumlah">({{ k.jumlah }} kursus)</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useKursusStore } from '../stores/kursus'
import { onMounted, computed } from 'vue'

const store = useKursusStore()
onMounted(() => store.fetchKursus())

const kategoriUnik = computed(() => {
  const hasil = {}
  store.kursus.forEach(k => {
    if (!hasil[k.kategori]) hasil[k.kategori] = 0
    hasil[k.kategori]++
  })
  return Object.entries(hasil).map(([kategori, jumlah]) => ({ kategori, jumlah }))
})
</script>

<style scoped>
.kategori {
  padding: 2rem;
  background: #fff9f9;
  border-radius: 10px;
}

.kategori h2 {
  margin-bottom: 1rem;
  color: #6a040f;
}

.kategori ul {
  list-style: none;
  padding: 0;
}

.kategori li {
  background: #ffe2e8;
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}

.jumlah {
  color: #9d0208;
  font-weight: bold;
}
</style>
