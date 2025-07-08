<template>
  <div class="tentang">
    <h2>ℹ️ Tentang Aplikasi</h2>
    <p><strong>MyCourse</strong> adalah platform pembelajaran online interaktif berbasis <code>Vue.js</code>.</p>
    <p>Aplikasi ini dibuat untuk membantu pengguna belajar, mencatat progress, serta mengelola kursus dan sertifikat mereka.</p>

    <h3>🛠️ Fitur Unggulan</h3>
    <ul>
      <li>Manajemen kursus dan progress belajar</li>
      <li>Unggah dan tampilkan sertifikat</li>
      <li>Filter kategori kursus</li>
      <li>Profil pengguna lengkap dengan foto</li>
    </ul>

    <h3>⚙️ Teknologi</h3>
    <ul>
      <li>Vue 3 + Composition API</li>
      <li>Pinia untuk state management</li>
      <li>json-server sebagai backend</li>
      <li>Axios untuk HTTP request</li>
    </ul>
  </div>
</template>

<style scoped>
.tentang {
  padding: 2rem;
  background: #fffaf0;
  border-radius: 8px;
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Segoe UI', sans-serif;
}

h2, h3 {
  color: #6a040f;
}

ul {
  list-style: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

code {
  background: #eee;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}
</style>
