<template>
  <div class="progress">
    <h2>Progress Belajar</h2>
    <ul>
      <li v-for="k in store.kursus" :key="k.id">
        {{ k.judul }}
        <div class="bar">
          <div class="bar-fill" :style="{ width: k.progress + '%' }"></div>
        </div>
        {{ k.progress }}%
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useKursusStore } from '../stores/kursus'
import { onMounted } from 'vue'

const store = useKursusStore()
onMounted(() => store.fetchKursus())
</script>

<style scoped>
.bar {
  background: #ddd;
  height: 10px;
  border-radius: 5px;
  margin: 5px 0;
}
.bar-fill {
  background: #219ebc;
  height: 100%;
  border-radius: 5px;
}
</style>
