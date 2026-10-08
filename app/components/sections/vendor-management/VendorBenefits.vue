<template>
  <section class="vendor-benefits-wrapper">
    <div class="vendor-benefits-container">
      <div class="vnb-header" data-aos="fade-up">
        <span class="vnb-label">MANFAAT VENDOR MANAGEMENT</span>
        <h2 class="vnb-title">Informasi Vendor Lebih Terstruktur dan Mudah Ditelusuri</h2>
      </div>

      <div class="vnb-grid">
         <div class="vnb-card" data-aos="fade-up" data-aos-delay="100">
            <div class="vnb-icon">📂</div>
            <h3>Data Lebih Terpusat</h3>
            <p>Informasi vendor dikelola dalam satu sistem.</p>
         </div>

         <div class="vnb-card" data-aos="fade-up" data-aos-delay="200">
            <div class="vnb-icon">🔍</div>
            <h3>Informasi Lebih Mudah Diakses</h3>
            <p>Data vendor dapat ditemukan dengan lebih mudah.</p>
         </div>

         <div class="vnb-card" data-aos="fade-up" data-aos-delay="300">
            <div class="vnb-icon">📜</div>
            <h3>Riwayat Lebih Mudah Ditelusuri</h3>
            <p>Aktivitas vendor yang tercatat dapat digunakan untuk melihat riwayat.</p>
         </div>

         <div class="vnb-card" data-aos="fade-up" data-aos-delay="400">
            <div class="vnb-icon">⚙️</div>
            <h3>Mendukung Pengelolaan Operasional</h3>
            <p>Informasi vendor dapat mendukung kebutuhan operasional armada sesuSistem proses perusahaan.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-benefits-wrapper {
  padding: 8rem 5%;
  background: #1e293b;
  display: flex;
  justify-content: center;
}
.vendor-benefits-container {
  max-width: 1200px;
  width: 100%;
}
.vnb-header {
  text-align: center;
  margin-bottom: 4rem;
}
.vnb-label {
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
.vnb-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #f8fafc;
}

.vnb-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 640px) {
  .vnb-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .vnb-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.vnb-card {
  background: #334155;
  padding: 2.5rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #475569;
  text-align: center;
  transition: transform 0.3s ease;
}
.vnb-card:hover {
  transform: translateY(-5px);
  border-color: #64748b;
}
.vnb-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.vnb-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.75rem;
}
.vnb-card p {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
}
</style>
