<template>
  <div class="app-container">
    <Sidebar v-if="showSidebar" />
    <main :class="['content', { 'full-width': !showSidebar }]">
      <header class="topbar">
        <button class="toggle-btn" @click="toggleSidebar">☰</button>
        <h1 class="judul">🎓 MyCourse</h1>
      </header>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import { ref } from 'vue'

const showSidebar = ref(true)

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}
</script>

<style scoped>
.app-container {
  display: flex;
}
.content {
  margin-left: 260px;
  padding: 2rem;
  width: 100%;
  background-color: #fbf3f4;
  min-height: 100vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2rem;
  transition: margin-left 0.3s ease;
}
.content.full-width {
  margin-left: 0;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.toggle-btn {
  background: #652937;
  color: white;
  border: none;
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
}
.judul {
  margin: 0;
  font-size: 1.4rem;
  color: #6a040f;
}
</style>
