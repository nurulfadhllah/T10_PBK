<template>
  <div>
    <h2>Sertifikat Saya 🎓</h2>

    <form @submit.prevent="unggah">
      <input type="file" @change="onChange" />
      <button type="submit">Unggah Sertifikat</button>
    </form>

    <ul>
      <li v-for="s in store.sertifikat" :key="s.id">
        📄 {{ s.namaFile }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSertifikatStore } from '../stores/sertifikat'

const store = useSertifikatStore()
const file = ref(null)

onMounted(() => store.fetchSertifikat())

function onChange(e) {
  file.value = e.target.files[0]
}

function unggah() {
  if (!file.value) return alert('Pilih file sertifikat terlebih dahulu')
  store.uploadSertifikat(file.value)
  file.value = null
}
</script>

<style scoped>
form {
  margin: 1rem 0;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f8e1e6;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 6px;
}
</style>
