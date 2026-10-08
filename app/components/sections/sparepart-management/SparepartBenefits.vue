<template>
  <section class="sparepart-benefits-wrapper">
    <div class="sparepart-benefits-container">
      <div class="spb-header" data-aos="fade-up">
        <span class="spb-label">MANFAAT SPAREPART MANAGEMENT</span>
        <h2 class="spb-title">Pengelolaan Sparepart Lebih Terstruktur dan Mudah Dipantau</h2>
      </div>

      <div class="spb-grid">
         <div class="spb-card" data-aos="fade-up" data-aos-delay="100">
            <div class="spb-icon">📂</div>
            <h3>Data Lebih Terpusat</h3>
            <p>Informasi sparepart dapat dikelola dalam satu sistem.</p>
         </div>

         <div class="spb-card" data-aos="fade-up" data-aos-delay="200">
            <div class="spb-icon">📦</div>
            <h3>Stok Lebih Mudah Dipantau</h3>
            <p>Informasi ketersediaan sparepart lebih mudah dilihat.</p>
         </div>

         <div class="spb-card" data-aos="fade-up" data-aos-delay="300">
            <div class="spb-icon">🔄</div>
            <h3>Transaksi Lebih Mudah Ditelusuri</h3>
            <p>Aktivitas sparepart dapat dicatat dan ditelusuri.</p>
         </div>

         <div class="spb-card" data-aos="fade-up" data-aos-delay="400">
            <div class="spb-icon">🔧</div>
            <h3>Mendukung Operasional Maintenance</h3>
            <p>Informasi sparepart dapat mendukung kebutuhan maintenance sesuSistem proses yang tersedia.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-benefits-wrapper {
  padding: 8rem 5%;
  background: #1e293b;
  display: flex;
  justify-content: center;
}
.sparepart-benefits-container {
  max-width: 1200px;
  width: 100%;
}
.spb-header {
  text-align: center;
  margin-bottom: 4rem;
}
.spb-label {
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
.spb-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #f8fafc;
}

.spb-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 640px) {
  .spb-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .spb-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.spb-card {
  background: #334155;
  padding: 2.5rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #475569;
  text-align: center;
  transition: transform 0.3s ease;
}
.spb-card:hover {
  transform: translateY(-5px);
  border-color: #64748b;
}
.spb-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.spb-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.75rem;
}
.spb-card p {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
}
</style>
