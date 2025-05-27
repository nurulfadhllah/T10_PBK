<template>
  <div class="app-container">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: { Sidebar }
}
</script>

<style scoped>
.app-container {
  display: flex;
}

.content {
  margin-left: 290px; /* <- Sesuaikan dengan lebar sidebar */
  padding: 2rem;
  width: 100%;
  background-color: #fbf3f4; /* Warna latar belakang konten */
  min-height: 100vh;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  top: 0;
  right: 0;
  font-size: 1.2rem;

}
</style>