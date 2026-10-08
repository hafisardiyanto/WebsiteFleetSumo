<template>
  <section class="sparepart-manage-wrapper">
    <div class="sparepart-manage-container">
      <div class="sma-header" data-aos="fade-up">
        <h2 class="sma-title">Kelola Informasi Sparepart Secara Terpusat</h2>
      </div>

      <div class="sma-grid">
         <div class="sma-card" data-aos="fade-up" data-aos-delay="100">
            <div class="sma-icon">⚙️</div>
            <h3>01 — Data Sparepart</h3>
            <p>Informasi dasar sparepart yang tersedia dalam sistem.</p>
         </div>

         <div class="sma-card" data-aos="fade-up" data-aos-delay="150">
            <div class="sma-icon">📂</div>
            <h3>02 — Kategori Sparepart</h3>
            <p>Pengelompokan sparepart sesuSistem struktur inventory yang digunakan.</p>
         </div>

         <div class="sma-card" data-aos="fade-up" data-aos-delay="200">
            <div class="sma-icon">📦</div>
            <h3>03 — Stok Sparepart</h3>
            <p>Informasi jumlah stok sparepart.</p>
         </div>

         <div class="sma-card" data-aos="fade-up" data-aos-delay="250">
            <div class="sma-icon">🛒</div>
            <h3>04 — Transaksi Sparepart</h3>
            <p>Pencatatan aktivitas barang masuk dan keluar sesuSistem proses yang tersedia.</p>
         </div>

         <div class="sma-card" data-aos="fade-up" data-aos-delay="300">
            <div class="sma-icon">🔧</div>
            <h3>05 — Penggunaan Sparepart</h3>
            <p>Informasi penggunaan sparepart dalam aktivitas operasional atau maintenance.</p>
         </div>

         <div class="sma-card" data-aos="fade-up" data-aos-delay="350">
            <div class="sma-icon">🏭</div>
            <h3>06 — Gudang</h3>
            <p>Informasi lokasi penyimpanan sparepart jika fitur gudang tersedia.</p>
         </div>

         <div class="sma-card" data-aos="fade-up" data-aos-delay="400">
            <div class="sma-icon">📜</div>
            <h3>07 — Riwayat Sparepart</h3>
            <p>Riwayat transaksi dan aktivitas sparepart.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-manage-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.sparepart-manage-container {
  max-width: 1200px;
  width: 100%;
}
.sma-header {
  text-align: center;
  margin-bottom: 4rem;
}
.sma-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.sma-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}
@media (min-width: 640px) {
  .sma-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .sma-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.sma-card {
  background: #f8fafc;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.sma-card:hover {
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  border-color: #cbd5e1;
}
.sma-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.sma-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.sma-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
