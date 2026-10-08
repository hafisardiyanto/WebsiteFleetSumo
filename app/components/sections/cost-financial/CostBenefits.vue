<template>
  <section class="cost-benefits-wrapper">
    <div class="cost-benefits-container">
      <div class="cbs-header" data-aos="fade-up">
        <span class="cbs-label">MANFAAT COST & FINANCIAL</span>
        <h2 class="cbs-title">Biaya Armada Lebih Terstruktur dan Mudah Dikendalikan</h2>
      </div>

      <div class="cbs-grid">
         <div class="cbs-card" data-aos="fade-up" data-aos-delay="100">
            <div class="cbs-icon">📂</div>
            <h3>Biaya Lebih Terstruktur</h3>
            <p>Informasi biaya dikelola dalam satu sistem.</p>
         </div>

         <div class="cbs-card" data-aos="fade-up" data-aos-delay="200">
            <div class="cbs-icon">🔍</div>
            <h3>Proses Lebih Mudah Ditelusuri</h3>
            <p>Pengajuan, persetujuan, dan realisasi biaya dapat mengikuti alur yang lebih jelas.</p>
         </div>

         <div class="cbs-card" data-aos="fade-up" data-aos-delay="300">
            <div class="cbs-icon">🚗</div>
            <h3>Biaya Kendaraan Lebih Terlihat</h3>
            <p>Perusahaan dapat melihat informasi biaya yang berkaitan dengan kendaraan.</p>
         </div>

         <div class="cbs-card" data-aos="fade-up" data-aos-delay="400">
            <div class="cbs-icon">📊</div>
            <h3>Mendukung Evaluasi</h3>
            <p>Informasi biaya dapat digunakan sebagSistem salah satu dasar evaluasi operasional armada.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-benefits-wrapper {
  padding: 8rem 5%;
  background: #1e293b;
  display: flex;
  justify-content: center;
}
.cost-benefits-container {
  max-width: 1200px;
  width: 100%;
}
.cbs-header {
  text-align: center;
  margin-bottom: 4rem;
}
.cbs-label {
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
.cbs-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #f8fafc;
}

.cbs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 640px) {
  .cbs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .cbs-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.cbs-card {
  background: #334155;
  padding: 2.5rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #475569;
  text-align: center;
  transition: transform 0.3s ease;
}
.cbs-card:hover {
  transform: translateY(-5px);
  border-color: #64748b;
}
.cbs-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.cbs-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.75rem;
}
.cbs-card p {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
}
</style>
