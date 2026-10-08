<template>
  <section class="vendor-manage-wrapper">
    <div class="vendor-manage-container">
      <div class="vma-header" data-aos="fade-up">
        <h2 class="vma-title">Kelola Informasi Vendor Secara Terpusat</h2>
      </div>

      <div class="vma-grid">
         <div class="vma-card" data-aos="fade-up" data-aos-delay="100">
            <div class="vma-icon">🏢</div>
            <h3>01 — Data Vendor</h3>
            <p>Informasi dasar vendor yang digunakan perusahaan.</p>
         </div>

         <div class="vma-card" data-aos="fade-up" data-aos-delay="150">
            <div class="vma-icon">📞</div>
            <h3>02 — Informasi Kontak</h3>
            <p>Informasi kontak yang tersedia pada data vendor.</p>
         </div>

         <div class="vma-card" data-aos="fade-up" data-aos-delay="200">
            <div class="vma-icon">🤝</div>
            <h3>03 — Layanan Vendor</h3>
            <p>Informasi mengenSistem layanan atau kebutuhan yang ditangani vendor.</p>
         </div>

         <div class="vma-card" data-aos="fade-up" data-aos-delay="250">
            <div class="vma-icon">📋</div>
            <h3>04 — Informasi Pendukung</h3>
            <p>Data tambahan yang berkaitan dengan vendor.</p>
         </div>

         <div class="vma-card" data-aos="fade-up" data-aos-delay="300">
            <div class="vma-icon">⚡</div>
            <h3>05 — Aktivitas Vendor</h3>
            <p>Aktivitas yang berkaitan dengan vendor sesuSistem proses yang tersedia.</p>
         </div>

         <div class="vma-card" data-aos="fade-up" data-aos-delay="350">
            <div class="vma-icon">📜</div>
            <h3>06 — Riwayat Vendor</h3>
            <p>Riwayat aktivitas vendor yang telah tercatat dalam sistem.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-manage-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.vendor-manage-container {
  max-width: 1200px;
  width: 100%;
}
.vma-header {
  text-align: center;
  margin-bottom: 4rem;
}
.vma-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.vma-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}
@media (min-width: 640px) {
  .vma-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .vma-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.vma-card {
  background: #f8fafc;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.vma-card:hover {
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  border-color: #cbd5e1;
}
.vma-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.vma-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.vma-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
