<template>
  <div class="app-container">
    <!-- Tombol toggle sidebar -->
    <button class="toggle-btn" @click="toggleSidebar">☰</button>

    <!-- Sidebar dengan event close -->
    <Sidebar :isHidden="!showSidebar" @close="showSidebar = false" />

    <!-- Konten utama -->
    <main :class="['content', { 'full-width': !showSidebar }]">
      <header class="topbar">
        <h1 class="judul">🎓 MyCourse</h1>
      </header>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showSidebar = ref(true)

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

function updateSidebarVisibility() {
  showSidebar.value = window.innerWidth > 768
}

onMounted(() => {
  updateSidebarVisibility()
  window.addEventListener('resize', updateSidebarVisibility)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSidebarVisibility)
})
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 769px) {
  .app-container {
    flex-direction: row;
  }
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
  padding-left: 2.5rem;
  padding-top: 0.9rem;
}

.content.full-width {
  margin-left: 0;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-right: 1rem;
}

.toggle-btn {
  background: #652937;
  color: white;
  border: none;
  font-size: 1.4rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 1000;
}

.judul {
  margin: 0;
  font-size: 1.4rem;
  color: #6a040f;
  
}
</style>
