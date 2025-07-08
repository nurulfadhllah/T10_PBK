<template>
  <div class="kategori">
    <h2>Kategori Kursus</h2>
    <ul>
      <li v-for="k in kategori" :key="k">
        🔖 {{ k }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useKursusStore } from '../stores/kursus'
import { onMounted, computed } from 'vue'

const store = useKursusStore()
onMounted(() => store.fetchKursus())

const kategori = computed(() => [...new Set(store.kursus.map(k => k.kategori))])
</script>

<style scoped>
.kategori ul {
  list-style: none;
  padding: 0;
}
.kategori li {
  background: #fff0f3;
  margin: 0.5rem 0;
  padding: 0.75rem;
  border-radius: 5px;
  font-weight: 500;
}
</style>
