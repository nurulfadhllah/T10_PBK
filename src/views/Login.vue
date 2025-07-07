<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="nama" placeholder="Nama" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Masuk</button>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const nama = ref('')
const email = ref('')
const auth = useAuthStore()
const router = useRouter()

function handleLogin() {
  if (nama.value && email.value) {
    auth.login(nama.value, email.value)
    router.push('/')
  }
}
</script>
