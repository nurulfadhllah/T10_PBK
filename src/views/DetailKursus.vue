<template>
  <div class="detail-kursus" v-if="kursus">
    <h2>{{ kursus.judul }}</h2>
    <p><strong>Kategori:</strong> {{ kursus.kategori }}</p>
    <p><strong>Progress:</strong> {{ kursus.progress }}%</p>

    <div class="form-edit">
      <label>Edit Progress (0–100%)</label>
      <input type="number" v-model.number="kursus.progress" min="0" max="100" />
      <button @click="simpanProgress">💾 Simpan</button>
    </div>

    <div class="aksi-lain">
      <button @click="lanjutkanBelajar">▶️ Lanjut Belajar (+10%)</button>
      <button @click="hapusKursus" class="hapus">🗑 Hapus Kursus</button>
    </div>

    <router-link to="/kursus-saya" class="back">← Kembali</router-link>
  </div>

  <div v-else>
    <p>Memuat data kursus...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const kursus = ref(null)

onMounted(async () => {
  const res = await axios.get(`https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/kursus/${route.params.id}`)
  kursus.value = res.data
})

async function simpanProgress() {
  await axios.patch(`https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/kursus/${kursus.value.id}`, {
    progress: kursus.value.progress
  })
  alert('Progress diperbarui!')
}

async function lanjutkanBelajar() {
  if (kursus.value.progress < 100) {
    kursus.value.progress = Math.min(100, kursus.value.progress + 10)
    await simpanProgress()
  } else {
    alert('Kursus sudah selesai 🎉')
  }
}

async function hapusKursus() {
  if (confirm('Yakin ingin menghapus kursus ini?')) {
    await axios.delete(`https://6cd865ed-7721-496c-b945-969e1452b885-00-214c58z7v8o77.sisko.replit.dev/kursus/${kursus.value.id}`)
    alert('Kursus dihapus.')
    router.push('/kursus-saya')
  }
}
</script>

<style scoped>
.detail-kursus {
  background: #fef6f9;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  margin: auto;
}

.form-edit {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input[type='number'] {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 120px;
}

button {
  background-color: #9d0208;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
}

button:hover {
  background-color: #d00000;
}

.aksi-lain {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hapus {
  background-color: #a4161a;
}

.back {
  display: inline-block;
  margin-top: 1.5rem;
  text-decoration: none;
  color: #6a040f;
}
</style>
