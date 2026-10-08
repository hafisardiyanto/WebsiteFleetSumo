<template>
  <section class="approval-manage-wrapper">
    <div class="approval-manage-container">
      <div class="ama-header" data-aos="fade-up">
        <h2 class="ama-title">Kelola Setiap Tahapan Proses Pengajuan</h2>
      </div>

      <div class="ama-grid">
         <div class="ama-card" data-aos="fade-up" data-aos-delay="100">
            <div class="ama-icon">📝</div>
            <h3>01 — Pengajuan</h3>
            <p>Kelola permintaan atau pengajuan aktivitas sesuSistem proses operasional.</p>
         </div>

         <div class="ama-card" data-aos="fade-up" data-aos-delay="150">
            <div class="ama-icon">📊</div>
            <h3>02 — Status Pengajuan</h3>
            <p>Pantau status setiap pengajuan.</p>
         </div>

         <div class="ama-card" data-aos="fade-up" data-aos-delay="200">
            <div class="ama-icon">✅</div>
            <h3>03 — Persetujuan</h3>
            <p>Kelola keputusan terhadap pengajuan yang membutuhkan approval.</p>
         </div>

         <div class="ama-card" data-aos="fade-up" data-aos-delay="250">
            <div class="ama-icon">❌</div>
            <h3>04 — Penolakan</h3>
            <p>Kelola pengajuan yang tidak disetujui sesuSistem proses yang tersedia.</p>
         </div>

         <div class="ama-card" data-aos="fade-up" data-aos-delay="300">
            <div class="ama-icon">⏩</div>
            <h3>05 — Tindak Lanjut</h3>
            <p>Lanjutkan proses berdasarkan keputusan approval.</p>
         </div>

         <div class="ama-card" data-aos="fade-up" data-aos-delay="350">
            <div class="ama-icon">📜</div>
            <h3>06 — Riwayat</h3>
            <p>Telusuri riwayat proses dan keputusan yang telah dilakukan.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-manage-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.approval-manage-container {
  max-width: 1200px;
  width: 100%;
}
.ama-header {
  text-align: center;
  margin-bottom: 4rem;
}
.ama-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.ama-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}
@media (min-width: 640px) {
  .ama-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .ama-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.ama-card {
  background: #f8fafc;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.ama-card:hover {
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  border-color: #cbd5e1;
}
.ama-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.ama-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.ama-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
