<template>
  <div class="sidebar">
    <h1 class="logo">🎓 <span>MyCourse</span></h1>
    <nav class="nav">
      <router-link v-for="item in menu" :key="item.name" :to="item.route"
        class="nav-item" active-class="active">
        <span class="icon">{{ item.icon }}</span>
        <span class="label">{{ item.name }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: 'Beranda', route: '/', icon: '🏠' },
        { name: 'Kursus Saya', route: '/kursus-saya', icon: '📘' },
        { name: 'Semua Kursus', route: '/semua-kursus', icon: '📚' },
        { name: 'Kategori', route: '/kategori', icon: '🗂️' },
        { name: 'Progress', route: '/progress', icon: '📊' },
        { name: 'Sertifikat', route: '/sertifikat', icon: '🎓' },
        { name: 'Profile', route: '/profile', icon: '👤' },
        { name: 'Tentang', route: '/tentang', icon: 'ℹ️' },
        { name: 'Tambah Kursus', route: '/tambah-kursus', icon: '➕' }

      ]
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 260px;
  background: linear-gradient(to bottom, #652937, #652937);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  min-height: 100vh;
  padding: 0.5rem 1rem;
  box-shadow: 2px 0 5px rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  transition: background 0.3s, transform 0.2s;
}

.nav-item:hover {
  background-color: #32141b;
  transform: translateX(4px);
}

.icon {
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

.label {
  font-weight: 500;
}

.active {
  background-color: #c77588;
  color: white;
  font-weight: bold;
}
</style>