<template>
  <section class="sparepart-features-wrapper">
    <div class="sparepart-features-container">
      <div class="spf-header" data-aos="fade-up">
        <h2 class="spf-title">Fitur untuk Mendukung Pengelolaan Sparepart</h2>
      </div>

      <div class="spf-grid">
         <div class="spf-item" data-aos="fade-up" data-aos-delay="100">
            <div class="spf-icon">📂</div>
            <div class="spf-content">
               <h3>01 — Sparepart Database</h3>
               <p>Kelola data sparepart secara terpusat.</p>
            </div>
         </div>

         <div class="spf-item" data-aos="fade-up" data-aos-delay="150">
            <div class="spf-icon">📦</div>
            <div class="spf-content">
               <h3>02 — Sparepart Stock</h3>
               <p>Pantau informasi stok sparepart.</p>
            </div>
         </div>

         <div class="spf-item" data-aos="fade-up" data-aos-delay="200">
            <div class="spf-icon">🔄</div>
            <div class="spf-content">
               <h3>03 — Sparepart Transaction</h3>
               <p>Catat aktivitas transaksi sparepart.</p>
            </div>
         </div>

         <div class="spf-item" data-aos="fade-up" data-aos-delay="250">
            <div class="spf-icon">📉</div>
            <div class="spf-content">
               <h3>04 — Stock Movement</h3>
               <p>Pantau perubahan stok akibat aktivitas inventory.</p>
            </div>
         </div>

         <div class="spf-item" data-aos="fade-up" data-aos-delay="300">
            <div class="spf-icon">⚙️</div>
            <div class="spf-content">
               <h3>05 — Sparepart Usage</h3>
               <p>Kelola informasi penggunaan sparepart sesuSistem proses yang tersedia.</p>
            </div>
         </div>

         <div class="spf-item" data-aos="fade-up" data-aos-delay="350">
            <div class="spf-icon">🏭</div>
            <div class="spf-content">
               <h3>06 — Warehouse Relation</h3>
               <p>Kelola keterkaitan sparepart dengan gudang jika tersedia.</p>
            </div>
         </div>

         <div class="spf-item" data-aos="fade-up" data-aos-delay="400">
            <div class="spf-icon">📜</div>
            <div class="spf-content">
               <h3>07 — Sparepart History</h3>
               <p>Telusuri riwayat aktivitas sparepart.</p>
            </div>
         </div>

         <div class="spf-item" data-aos="fade-up" data-aos-delay="450">
            <div class="spf-icon">📊</div>
            <div class="spf-content">
               <h3>08 — Inventory Monitoring</h3>
               <p>Pantau informasi sparepart dan stok sebagSistem bagian dari pengelolaan inventory.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-features-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.sparepart-features-container {
  max-width: 1200px;
  width: 100%;
}
.spf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.spf-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.spf-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .spf-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .spf-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.spf-item {
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.spf-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: #cbd5e1;
}
.spf-icon {
  font-size: 2.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spf-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.5rem;
}
.spf-content p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
