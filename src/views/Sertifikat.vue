<template>
  <div class="sertifikat">
    <h2>🎓 Sertifikat Saya</h2>

    <form @submit.prevent="unggah">
      <input type="file" @change="onChange" />
      <button type="submit">📤 Unggah Sertifikat</button>
    </form>

    <ul>
      <li v-for="s in store.sertifikat" :key="s.id">
        📄 <strong>{{ s.namaFile }}</strong>
        <span class="upload-time">{{ new Date().toLocaleDateString() }}</span>
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
.sertifikat {
  padding: 2rem;
  background-color: #fef2f4;
  border-radius: 10px;
  font-family: 'Segoe UI', sans-serif;
}

form {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  align-items: left;
}

input[type="file"] {
  padding: 0.4rem;
}

button {
  background-color: #6a040f;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #a4161a;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #fde4e9;
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: left;
}

.upload-time {
  font-size: 0.8rem;
  color: #888;
}
</style>
