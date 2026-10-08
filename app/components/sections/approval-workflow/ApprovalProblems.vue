<template>
  <section class="approval-problems-wrapper">
    <div class="approval-problems-container">
      <div class="app-header" data-aos="fade-up">
        <span class="app-label">TANTANGAN PENGELOLAAN APPROVAL</span>
        <h2 class="app-title">Proses Pengajuan Membutuhkan Alur Persetujuan yang Jelas</h2>
        <p class="app-subtitle">Aktivitas operasional armada sering membutuhkan pengajuan dan persetujuan. Tanpa alur yang jelas, proses menjadi lebih sulit dipantau dan ditelusuri.</p>
      </div>

      <div class="app-grid">
         <div class="app-card" data-aos="fade-up" data-aos-delay="100">
            <div class="app-icon">📉</div>
            <h3>01 — Pengajuan Sulit Dipantau</h3>
            <p>Permintaan operasional dapat sulit diketahui statusnya jika proses masih tersebar.</p>
         </div>

         <div class="app-card" data-aos="fade-up" data-aos-delay="200">
            <div class="app-icon">❓</div>
            <h3>02 — Status Persetujuan Tidak Jelas</h3>
            <p>Pengguna membutuhkan informasi mengenSistem apakah pengajuan masih menunggu, disetujui, atau ditolak.</p>
         </div>

         <div class="app-card" data-aos="fade-up" data-aos-delay="300">
            <div class="app-icon">📋</div>
            <h3>03 — Proses Persetujuan Tidak Terstruktur</h3>
            <p>Setiap jenis pengajuan membutuhkan alur kerja yang jelas sesuSistem kebutuhan perusahaan.</p>
         </div>

         <div class="app-card" data-aos="fade-up" data-aos-delay="400">
            <div class="app-icon">⏳</div>
            <h3>04 — Riwayat Persetujuan Sulit Ditelusuri</h3>
            <p>Informasi mengenSistem proses persetujuan perlu tersimpan sebagSistem bagian dari riwayat aktivitas.</p>
         </div>

         <div class="app-card" data-aos="fade-up" data-aos-delay="500">
            <div class="app-icon">🔗</div>
            <h3>05 — Tindak Lanjut Membutuhkan Informasi Jelas</h3>
            <p>Pengajuan yang sudah mendapatkan keputusan perlu dapat ditindaklanjuti sesuSistem proses operasional.</p>
         </div>

         <div class="app-card full" data-aos="fade-up" data-aos-delay="600">
            <div class="app-icon">📊</div>
            <h3>06 — Banyak Aktivitas Membutuhkan Approval</h3>
            <p>Maintenance, biaya, dan aktivitas operasional lainnya dapat membutuhkan proses persetujuan.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-problems-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.approval-problems-container {
  max-width: 1200px;
  width: 100%;
}
.app-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
}
.app-label {
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
.app-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.app-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
}
.app-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .app-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .app-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.app-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.app-card:hover {
  background: #fff;
  border-color: #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
}
.app-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.app-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}
.app-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
.app-card.full {
  grid-column: 1 / -1;
  text-align: center;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #fff;
  border: none;
}
.app-card.full h3 {
  color: #fff;
}
.app-card.full p {
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
}
</style>
