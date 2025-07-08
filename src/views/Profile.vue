<template>
  <div class="profile-page">
    <h2>👤 Profil Pengguna</h2>

    <!-- Foto Profil -->
    <div class="foto-wrapper">
      <img
        v-if="profil?.foto"
        :src="profil.foto"
        alt="Foto Profil"
        class="foto-preview"
      />
    </div>

    <!-- Form Input -->
    <form v-if="isEdit" @submit.prevent="simpanProfil" class="profile-form">
      <label>Foto</label>
      <input type="file" @change="handleFoto" accept="image/*" />

      <label>Nama</label>
      <input v-model="form.nama" type="text" required />

      <label>Email</label>
      <input v-model="form.email" type="email" required />

      <label>Bio</label>
      <textarea v-model="form.bio" rows="4"></textarea>

      <button type="submit">💾 Simpan Profil</button>
    </form>

    <!-- Tampilkan Profil -->
    <div class="preview" v-else-if="profil">
      <p><strong>Nama:</strong> {{ profil.nama }}</p>
      <p><strong>Email:</strong> {{ profil.email }}</p>
      <p><strong>Bio:</strong> {{ profil.bio }}</p>
      <button @click="editProfil" class="btn-edit">✏️ Edit Profil</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProfilStore } from '../stores/profil'

const store = useProfilStore()
const form = ref({ nama: '', email: '', bio: '', foto: '' })
const isEdit = ref(false)
const profil = store.profil

onMounted(async () => {
  await store.fetchProfil()
  if (!store.profil?.nama) {
    isEdit.value = true
  } else {
    form.value = { ...store.profil }
  }
})

async function simpanProfil() {
  if (!form.value.nama || !form.value.email) {
    alert('Nama dan Email wajib diisi!')
    return
  }
  await store.updateProfil(form.value)
  isEdit.value = false
  alert('✅ Profil berhasil disimpan!')
}

function editProfil() {
  form.value = { ...store.profil }
  isEdit.value = true
}

function handleFoto(e) {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    form.value.foto = reader.result
  }
  reader.readAsDataURL(file)
}
</script>

<style scoped>
.profile-page {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff0f3;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', sans-serif;
}

.profile-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  background-color: #6a040f;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #9d0208;
}

.preview {
  margin-top: 2rem;
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.foto-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.foto-preview {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
}

.btn-edit {
  margin-top: 1rem;
  background-color: #fca311;
  color: black;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #ffb703;
}
</style>
