<template>
  <section class="vendor-problems-wrapper">
    <div class="vendor-problems-container">
      <div class="vop-header" data-aos="fade-up">
        <span class="vop-label">TANTANGAN PENGELOLAAN VENDOR</span>
        <h2 class="vop-title">Pengelolaan Vendor Membutuhkan Informasi yang Terstruktur</h2>
        <p class="vop-subtitle">Banyaknya vendor yang mendukung kebutuhan operasional armada membuat perusahaan membutuhkan informasi vendor yang terpusat dan mudah ditelusuri.</p>
      </div>

      <div class="vop-grid">
         <div class="vop-card" data-aos="fade-up" data-aos-delay="100">
            <div class="vop-icon">🗄️</div>
            <h3>01 — Data Vendor Tersebar</h3>
            <p>Informasi vendor dapat tersimpan di berbagSistem pencatatan dan sulit dikelola secara terpusat.</p>
         </div>

         <div class="vop-card" data-aos="fade-up" data-aos-delay="200">
            <div class="vop-icon">📇</div>
            <h3>02 — Informasi Vendor Sulit Dicari</h3>
            <p>Data kontak dan informasi pendukung vendor membutuhkan pencatatan yang terstruktur.</p>
         </div>

         <div class="vop-card" data-aos="fade-up" data-aos-delay="300">
            <div class="vop-icon">📋</div>
            <h3>03 — Layanan Vendor Sulit Dipantau</h3>
            <p>Perusahaan membutuhkan informasi mengenSistem jenis layanan atau kebutuhan yang ditangani vendor.</p>
         </div>

         <div class="vop-card" data-aos="fade-up" data-aos-delay="400">
            <div class="vop-icon">⏳</div>
            <h3>04 — Riwayat Aktivitas Sulit Ditelusuri</h3>
            <p>Aktivitas yang berkaitan dengan vendor perlu memiliki riwayat yang jelas.</p>
         </div>

         <div class="vop-card" data-aos="fade-up" data-aos-delay="500">
            <div class="vop-icon">🔗</div>
            <h3>05 — Hubungan Vendor dengan Operasional Tidak Terlihat</h3>
            <p>Informasi vendor perlu dikaitkan dengan aktivitas armada yang relevan.</p>
         </div>

         <div class="vop-card full" data-aos="fade-up" data-aos-delay="600">
            <div class="vop-icon">📊</div>
            <h3>06 — Evaluasi Membutuhkan Data</h3>
            <p>Data vendor yang terstruktur dapat membantu perusahaan melakukan monitoring dan evaluasi.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-problems-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.vendor-problems-container {
  max-width: 1200px;
  width: 100%;
}
.vop-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
}
.vop-label {
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
.vop-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.vop-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
}
.vop-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .vop-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .vop-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.vop-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.vop-card:hover {
  background: #fff;
  border-color: #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
}
.vop-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.vop-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}
.vop-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
.vop-card.full {
  grid-column: 1 / -1;
  text-align: center;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #fff;
  border: none;
}
.vop-card.full h3 {
  color: #fff;
}
.vop-card.full p {
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
}
</style>
