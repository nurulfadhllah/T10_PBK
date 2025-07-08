<template>
  <div class="progress">
    <h2>📊 Progress Belajar</h2>
    <ul>
      <li v-for="k in store.kursus" :key="k.id">
        <div class="judul">{{ k.judul }}</div>
        <div class="bar">
          <div class="bar-fill" :class="warna(k.progress)" :style="{ width: k.progress + '%' }"></div>
        </div>
        <div class="persen">{{ k.progress }}%</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useKursusStore } from '../stores/kursus'
import { onMounted } from 'vue'

const store = useKursusStore()
onMounted(() => store.fetchKursus())

function warna(progress) {
  if (progress === 100) return 'hijau'
  if (progress >= 50) return 'kuning'
  return 'merah'
}
</script>

<style scoped>
.progress {
  padding: 2rem;
  background-color: #fef9fb;
  border-radius: 10px;
}

.judul {
  font-weight: 600;
  color: #370617;
  margin-bottom: 4px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

.bar {
  background: #eee;
  height: 12px;
  border-radius: 5px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.merah {
  background: #d00000;
}
.kuning {
  background: #fca311;
}
.hijau {
  background: #70e000;
}

.persen {
  font-size: 0.9rem;
  color: #555;
  margin-top: 4px;
}
</style>
