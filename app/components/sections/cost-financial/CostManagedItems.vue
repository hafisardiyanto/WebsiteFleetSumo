<template>
  <section class="cost-manage-wrapper">
    <div class="cost-manage-container">
      <div class="cma-header" data-aos="fade-up">
        <h2 class="cma-title">Kelola Informasi Biaya Armada Secara Terpusat</h2>
      </div>

      <div class="cma-grid">
         <div class="cma-card" data-aos="fade-up" data-aos-delay="100">
            <div class="cma-icon">📝</div>
            <h3>01 — Pengajuan Biaya</h3>
            <p>Kelola kebutuhan biaya yang diajukan untuk aktivitas operasional.</p>
         </div>

         <div class="cma-card" data-aos="fade-up" data-aos-delay="150">
            <div class="cma-icon">🧮</div>
            <h3>02 — Estimasi Biaya</h3>
            <p>Kelola informasi estimasi biaya sesuSistem proses yang tersedia.</p>
         </div>

         <div class="cma-card" data-aos="fade-up" data-aos-delay="200">
            <div class="cma-icon">✅</div>
            <h3>03 — Approval Biaya</h3>
            <p>Kelola proses persetujuan biaya.</p>
         </div>

         <div class="cma-card" data-aos="fade-up" data-aos-delay="250">
            <div class="cma-icon">💰</div>
            <h3>04 — Realisasi Biaya</h3>
            <p>Catat dan kelola biaya yang telah direalisasikan.</p>
         </div>

         <div class="cma-card" data-aos="fade-up" data-aos-delay="300">
            <div class="cma-icon">🚗</div>
            <h3>05 — Biaya Kendaraan</h3>
            <p>Lihat informasi biaya yang berkaitan dengan kendaraan.</p>
         </div>

         <div class="cma-card" data-aos="fade-up" data-aos-delay="350">
            <div class="cma-icon">📜</div>
            <h3>06 — Riwayat Biaya</h3>
            <p>Telusuri aktivitas dan riwayat biaya yang telah tercatat.</p>
         </div>

         <div class="cma-card" data-aos="fade-up" data-aos-delay="400">
            <div class="cma-icon">🏷️</div>
            <h3>07 — Kategori/Jenis Biaya</h3>
            <p>Kelola klasifikasi biaya jika memang tersedia di sistem.</p>
         </div>

         <div class="cma-card" data-aos="fade-up" data-aos-delay="450">
            <div class="cma-icon">📊</div>
            <h3>08 — Informasi Keuangan Armada</h3>
            <p>Pantau informasi biaya sebagSistem bagian dari pengelolaan operasional armada.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-manage-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.cost-manage-container {
  max-width: 1200px;
  width: 100%;
}
.cma-header {
  text-align: center;
  margin-bottom: 4rem;
}
.cma-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.cma-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 640px) {
  .cma-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .cma-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.cma-card {
  background: #f8fafc;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.cma-card:hover {
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  border-color: #cbd5e1;
}
.cma-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.cma-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.cma-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
