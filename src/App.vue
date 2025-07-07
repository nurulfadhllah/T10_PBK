<template>
  <div class="app-container">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
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
}
</style>
