<template>
  <section class="report-problems-wrapper">
    <div class="report-problems-container">
      <div class="rpm-header" data-aos="fade-up">
        <span class="rpm-label">TANTANGAN MONITORING</span>
        <h2 class="rpm-title">Data Armada Saja Tidak Cukup Tanpa Informasi yang Mudah Dipahami</h2>
        <p class="rpm-subtitle">Data dari berbagSistem aktivitas armada perlu disajikan dalam bentuk yang mudah dipantau agar perusahaan dapat memahami kondisi operasional dan melakukan evaluasi berdasarkan informasi yang tersedia.</p>
      </div>

      <div class="rpm-grid">
         <div class="rpm-card" data-aos="fade-up" data-aos-delay="100">
            <div class="rpm-icon">📂</div>
            <h3>01 — Data Tersebar di BerbagSistem Aktivitas</h3>
            <p>Informasi kendaraan, maintenance, BBM, ban, sparepart, dan biaya berasal dari berbagSistem aktivitas operasional.</p>
         </div>

         <div class="rpm-card" data-aos="fade-up" data-aos-delay="200">
            <div class="rpm-icon">🔎</div>
            <h3>02 — Informasi Sulit Dilihat Secara Keseluruhan</h3>
            <p>Data yang banyak membuat kondisi armada tidak selalu mudah dipahami hanya dari daftar transaksi.</p>
         </div>

         <div class="rpm-card" data-aos="fade-up" data-aos-delay="300">
            <div class="rpm-icon">⏱️</div>
            <h3>03 — Monitoring Membutuhkan Banyak Proses</h3>
            <p>Pengguna membutuhkan informasi yang tersaji secara lebih terstruktur untuk memantau aktivitas armada.</p>
         </div>

         <div class="rpm-card" data-aos="fade-up" data-aos-delay="400">
            <div class="rpm-icon">📄</div>
            <h3>04 — Laporan Sulit Ditelusuri</h3>
            <p>Data operasional perlu disajikan dalam laporan yang dapat digunakan untuk melihat kondisi dan perkembangan armada.</p>
         </div>

         <div class="rpm-card" data-aos="fade-up" data-aos-delay="500">
            <div class="rpm-icon">🔄</div>
            <h3>05 — Perubahan Data Perlu Dipantau</h3>
            <p>Aktivitas armada terus berubah sehingga informasi monitoring perlu mengikuti data yang tercatat dalam sistem.</p>
         </div>

         <div class="rpm-card full" data-aos="fade-up" data-aos-delay="600">
            <div class="rpm-icon">📊</div>
            <h3>06 — Evaluasi Membutuhkan Data</h3>
            <p>Evaluasi operasional membutuhkan informasi yang dapat digunakan sebagSistem dasar untuk melihat kondisi armada dan biaya.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.report-problems-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.report-problems-container {
  max-width: 1200px;
  width: 100%;
}
.rpm-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
}
.rpm-label {
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
.rpm-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.rpm-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
}
.rpm-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .rpm-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .rpm-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.rpm-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.rpm-card:hover {
  background: #fff;
  border-color: #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
}
.rpm-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.rpm-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}
.rpm-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
.rpm-card.full {
  grid-column: 1 / -1;
  text-align: center;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #fff;
  border: none;
}
.rpm-card.full h3 {
  color: #fff;
}
.rpm-card.full p {
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
}
</style>
