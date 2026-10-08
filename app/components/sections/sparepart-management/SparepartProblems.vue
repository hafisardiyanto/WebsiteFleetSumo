<template>
  <section class="sparepart-problems-wrapper">
    <div class="sparepart-problems-container">
      <div class="spp-header" data-aos="fade-up">
        <span class="spp-label">TANTANGAN PENGELOLAAN SPAREPART</span>
        <h2 class="spp-title">Pengelolaan Sparepart Membutuhkan Data dan Stok yang Terstruktur</h2>
        <p class="spp-subtitle">Banyaknya jenis sparepart dan aktivitas penggunaannya membuat perusahaan membutuhkan sistem yang dapat membantu mengelola data, stok, transaksi, dan riwayat sparepart secara terpusat.</p>
      </div>

      <div class="spp-grid">
         <div class="spp-card" data-aos="fade-up" data-aos-delay="100">
            <div class="spp-icon">🗄️</div>
            <h3>01 — Data Sparepart Tersebar</h3>
            <p>Informasi sparepart sulit dikelola ketika tersimpan dalam berbagSistem pencatatan.</p>
         </div>

         <div class="spp-card" data-aos="fade-up" data-aos-delay="200">
            <div class="spp-icon">📦</div>
            <h3>02 — Stok Sulit Dipantau</h3>
            <p>Perusahaan membutuhkan informasi stok yang lebih mudah dipantau.</p>
         </div>

         <div class="spp-card" data-aos="fade-up" data-aos-delay="300">
            <div class="spp-icon">🔄</div>
            <h3>03 — Transaksi Sparepart Sulit Ditelusuri</h3>
            <p>Aktivitas barang masuk dan keluar membutuhkan pencatatan yang terstruktur.</p>
         </div>

         <div class="spp-card" data-aos="fade-up" data-aos-delay="400">
            <div class="spp-icon">🔗</div>
            <h3>04 — Penggunaan Sparepart Sulit Dikaitkan</h3>
            <p>Informasi penggunaan sparepart perlu dikaitkan dengan aktivitas operasional atau maintenance jika sistem mendukungnya.</p>
         </div>

         <div class="spp-card" data-aos="fade-up" data-aos-delay="500">
            <div class="spp-icon">⏳</div>
            <h3>05 — Riwayat Sparepart Tidak Terpusat</h3>
            <p>Riwayat transaksi dan penggunaan sparepart perlu tersedia dalam satu sistem.</p>
         </div>

         <div class="spp-card full" data-aos="fade-up" data-aos-delay="600">
            <div class="spp-icon">📊</div>
            <h3>06 — Informasi Stok Sulit Digunakan untuk Monitoring</h3>
            <p>Data sparepart yang terstruktur membantu pengguna melakukan monitoring kebutuhan inventory.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-problems-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.sparepart-problems-container {
  max-width: 1200px;
  width: 100%;
}
.spp-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
}
.spp-label {
  display: inline-block;
  padding: 0.25rem 1rem;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}
.spp-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.spp-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
}
.spp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .spp-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .spp-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.spp-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.spp-card:hover {
  background: #fff;
  border-color: #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
}
.spp-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.spp-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}
.spp-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
.spp-card.full {
  grid-column: 1 / -1;
  text-align: center;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #fff;
  border: none;
}
.spp-card.full h3 {
  color: #fff;
}
.spp-card.full p {
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
}
</style>
