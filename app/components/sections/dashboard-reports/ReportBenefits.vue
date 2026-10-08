<template>
  <section class="report-benefits-wrapper">
    <div class="report-benefits-container">
      <div class="rb-header" data-aos="fade-up">
        <span class="rb-label">MANFAAT DASHBOARD & REPORTS</span>
        <h2 class="rb-title">Informasi Lebih Terstruktur untuk Mendukung Monitoring Armada</h2>
      </div>

      <div class="rb-grid">
         <div class="rb-card" data-aos="fade-up" data-aos-delay="100">
            <div class="rb-icon">👀</div>
            <h3>01 — Visibilitas Lebih Baik</h3>
            <p>Informasi dari berbagSistem aktivitas armada dapat dilihat melalui dashboard dan laporan.</p>
         </div>

         <div class="rb-card" data-aos="fade-up" data-aos-delay="200">
            <div class="rb-icon">🗂️</div>
            <h3>02 — Data Lebih Terstruktur</h3>
            <p>Data operasional disajikan dalam bentuk yang lebih mudah dipantau.</p>
         </div>

         <div class="rb-card" data-aos="fade-up" data-aos-delay="300">
            <div class="rb-icon">⏱️</div>
            <h3>03 — Monitoring Lebih Mudah</h3>
            <p>Pengguna dapat melihat informasi penting tanpa harus memeriksa setiap aktivitas secara terpisah.</p>
         </div>

         <div class="rb-card" data-aos="fade-up" data-aos-delay="400">
            <div class="rb-icon">📈</div>
            <h3>04 — Mendukung Evaluasi</h3>
            <p>Laporan dapat digunakan sebagSistem salah satu sumber informasi untuk melakukan evaluasi operasional.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.report-benefits-wrapper {
  padding: 8rem 5%;
  background: #1e293b;
  display: flex;
  justify-content: center;
}
.report-benefits-container {
  max-width: 1200px;
  width: 100%;
}
.rb-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rb-label {
  display: inline-block;
  padding: 0.25rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}
.rb-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #f8fafc;
}

.rb-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 640px) {
  .rb-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .rb-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.rb-card {
  background: #334155;
  padding: 2.5rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #475569;
  text-align: center;
  transition: transform 0.3s ease;
}
.rb-card:hover {
  transform: translateY(-5px);
  border-color: #64748b;
}
.rb-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.rb-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.75rem;
}
.rb-card p {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
}
</style>
