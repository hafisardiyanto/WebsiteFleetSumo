<template>
  <section class="cost-problems-wrapper">
    <div class="cost-problems-container">
      <div class="csp-header" data-aos="fade-up">
        <span class="csp-label">TANTANGAN PENGELOLAAN BIAYA</span>
        <h2 class="csp-title">Biaya Armada Membutuhkan Pengelolaan yang Terstruktur</h2>
        <p class="csp-subtitle">Banyaknya aktivitas kendaraan membuat biaya armada berasal dari berbagSistem kebutuhan. Tanpa data yang terstruktur, perusahaan akan lebih sulit melihat, menelusuri, dan mengevaluasi biaya.</p>
      </div>

      <div class="csp-grid">
         <div class="csp-card" data-aos="fade-up" data-aos-delay="100">
            <div class="csp-icon">💸</div>
            <h3>01 — Daftar Pengajuan Biaya</h3>
            <p>Sistem memfasilitasi pencatatan data biaya harian dari berbagSistem aktivitas armada menjadi satu tabel yang terpusat.</p>
         </div>

         <div class="csp-card" data-aos="fade-up" data-aos-delay="200">
            <div class="csp-icon">📉</div>
            <h3>02 — Form Detail & Pengajuan</h3>
            <p>Menyediakan formulir digital terstruktur untuk menginput detail setiap kali ada beban pengeluaran baru.</p>
         </div>

         <div class="csp-card" data-aos="fade-up" data-aos-delay="300">
            <div class="csp-icon">🔒</div>
            <h3>03 — Proses Approval Sistematis</h3>
            <p>Pengguna dapat memantau status pengajuan (Draft/Pending/Approved) yang berjalan sesuSistem alur kerja sistem.</p>
         </div>

         <div class="csp-card" data-aos="fade-up" data-aos-delay="400">
            <div class="csp-icon">🔍</div>
            <h3>04 — Pencatatan Realisasi</h3>
            <p>Tersedia form khusus untuk mencocokkan jumlah pengajuan awal dengan bukti aktual nominal yang dikeluarkan.</p>
         </div>

         <div class="csp-card" data-aos="fade-up" data-aos-delay="500">
            <div class="csp-icon">🚗</div>
            <h3>05 — History & Mutasi Kendaraan</h3>
            <p>Seluruh rekaman pengeluaran dicatat secara berurutan pada detail riwayat (history) masing-masing kendaraan.</p>
         </div>

         <div class="csp-card full" data-aos="fade-up" data-aos-delay="600">
            <div class="csp-icon">📊</div>
            <h3>06 — Informasi Biaya Komprehensif</h3>
            <p>Akses arsip lengkap berisi daftar panjang data biaya untuk keperluan pembukuan internal rutin.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-problems-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.cost-problems-container {
  max-width: 1200px;
  width: 100%;
}
.csp-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
}
.csp-label {
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
.csp-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.csp-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
}
.csp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .csp-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .csp-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.csp-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.csp-card:hover {
  background: #fff;
  border-color: #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
}
.csp-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.csp-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}
.csp-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
.csp-card.full {
  grid-column: 1 / -1;
  text-align: center;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #fff;
  border: none;
}
.csp-card.full h3 {
  color: #fff;
}
.csp-card.full p {
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
}
</style>
