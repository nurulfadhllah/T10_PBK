<template>
  <div class="semua-kursus">
    <h2>📚 Semua Kursus</h2>

    <div class="filter-bar">
      <input v-model="searchQuery" placeholder="🔍 Cari kursus..." />
      <select v-model="selectedKategori">
        <option value="">Semua Kategori</option>
        <option v-for="kat in kategoriUnik" :key="kat" :value="kat">{{ kat }}</option>
      </select>
    </div>

    <div class="grid-kursus">
      <div class="card" v-for="k in kursusTersaring" :key="k.id">
        <h3>{{ k.judul }}</h3>
        <p><strong>Kategori:</strong> {{ k.kategori }}</p>
        <p><strong>Progress:</strong> {{ k.progress }}%</p>
        <p v-if="k.progress === 100" class="status-selesai">✅ Selesai</p>
        <router-link :to="'/edit-kursus/' + k.id" class="btn-lihat">✏️ Edit</router-link>
        <button @click="hapusKursus(k.id)" class="btn-lihat btn-hapus">🗑 Hapus</button>

      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useKursusStore } from '../stores/kursus'

const store = useKursusStore()
const searchQuery = ref('')
const selectedKategori = ref('')

onMounted(() => {
  store.fetchKursus()
})

const kursusTersaring = computed(() => {
  return store.kursus.filter(k => {
    const cocokJudul = k.judul.toLowerCase().includes(searchQuery.value.toLowerCase())
    const cocokKategori = selectedKategori.value
      ? k.kategori === selectedKategori.value
      : true
    return cocokJudul && cocokKategori
  })
})

const kategoriUnik = computed(() => {
  const kategoriSet = new Set(store.kursus.map(k => k.kategori))
  return Array.from(kategoriSet)
})
async function hapusKursus(id) {
  if (confirm('Yakin ingin menghapus kursus ini?')) {
    await store.deleteKursus(id)
    alert('❌ Kursus dihapus!')
  }
}

</script>

<style scoped>
.btn-hapus {
  background-color: #a4161a;
  margin-left: 0.5rem;
}
.btn-hapus:hover {
  background-color: #e63946;
}

.semua-kursus {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  color: #6a040f;
  margin-bottom: 1rem;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

input, select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 200px;
}

.grid-kursus {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  
}

.card {
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card h3 {
  margin: 0 0 0.5rem;
  color: #370617;
}

.btn-lihat {
  margin-top: 1rem;
  display: inline-block;
  background-color: #6a040f;
  color: white;
  text-decoration: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
}

.btn-lihat:hover {
  background-color: #9d0208;
}
.status-selesai {
  background-color: #d4edda;
  color: #155724;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  display: inline-block;
  margin-top: 0.5rem;
}

</style>
