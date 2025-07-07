<template>
  <div class="form-kursus">
    <h2>{{ editMode ? '✏️ Edit Kursus' : '➕ Tambah Kursus' }}</h2>
    <form @submit.prevent="simpan">
      <label>Judul Kursus</label>
      <input v-model="form.judul" required />

      <label>Kategori</label>
      <input v-model="form.kategori" required />

      <label>Progress</label>
      <input type="number" v-model.number="form.progress" min="0" max="100" required />

      <button type="submit">{{ editMode ? 'Simpan Perubahan' : 'Tambah Kursus' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useKursusStore } from '../stores/kursus'

const route = useRoute()
const router = useRouter()
const store = useKursusStore()
const editMode = ref(false)
const form = ref({
  judul: '',
  kategori: '',
  progress: 0
})

onMounted(async () => {
  if (route.params.id) {
    editMode.value = true
    const kursus = store.kursus.find(k => k.id == route.params.id)
    if (kursus) {
      form.value = { ...kursus }
    }
  }
})

async function simpan() {
  if (!form.value.judul || !form.value.kategori) {
    alert('❌ Judul dan kategori wajib diisi')
    return
  }

  console.log('📦 Data dikirim:', form.value)

  if (editMode.value) {
    await store.updateKursus(form.value.id, form.value)
    alert('✅ Kursus diperbarui!')
  } else {
    await store.addKursus(form.value)
    alert('✅ Kursus ditambahkan!')
  }
  router.push('/semua-kursus')
}

</script>

<style scoped>
.form-kursus {
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  background: #fdf0f3;
  border-radius: 10px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  background-color: #6a040f;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #9d0208;
}
</style>
