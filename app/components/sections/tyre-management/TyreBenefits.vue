<template>
  <section class="tyre-benefits-wrapper">
    <div class="tyre-benefits-container">
      <div class="tbe-header" data-aos="fade-up">
        <span class="tbe-label">MANFAAT TYRE MANAGEMENT</span>
        <h2 class="tbe-title">Pengelolaan Ban Lebih Terstruktur dan Mudah Dipantau</h2>
      </div>

      <div class="tbe-grid">
         <div class="tbe-card" data-aos="fade-up" data-aos-delay="100">
            <div class="tbe-icon">🔒</div>
            <h3>Penelusuran Data Ban Lebih Terstruktur</h3>
            <p>Catatan inventaris yang jelas membantu pendataan aset ban secara lebih konsisten.</p>
         </div>

         <div class="tbe-card" data-aos="fade-up" data-aos-delay="150">
            <div class="tbe-icon">📈</div>
            <h3>Riwayat Penggunaan Lebih Mudah Ditelusuri</h3>
            <p>Memudakan pengecekan historis perjalanan dan rotasi masing-masing unit ban.</p>
         </div>

         <div class="tbe-card" data-aos="fade-up" data-aos-delay="200">
            <div class="tbe-icon">⚠️</div>
            <h3>Data Inspeksi Kondisi Ban Terdokumentasi</h3>
            <p>Informasi alur tapak dan observasi fisik tersimpan menjadi referensi pencatatan kondisi kendaraan.</p>
         </div>

         <div class="tbe-card" data-aos="fade-up" data-aos-delay="250">
            <div class="tbe-icon">📊</div>
            <h3>Mendukung Evaluasi Kebutuhan Ban</h3>
            <p>Informasi penggunaan yang dikumpulkan membantu meninjau ulang alokasi ban operasional.</p>
         </div>

         <div class="tbe-card full" data-aos="fade-up" data-aos-delay="300" style="grid-column: 1 / -1; max-width: 600px; justify-self: center;">
            <div class="tbe-icon">💸</div>
            <h3>Mendukung Perencanaan Pengadaan</h3>
            <p>Data historis operasional dapat menjadi dasar acuan dalam merencanakan pembeliaan inventaris baru.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-benefits-wrapper {
  padding: 8rem 5%;
  background: #1e293b;
  display: flex;
  justify-content: center;
}
.tyre-benefits-container {
  max-width: 1200px;
  width: 100%;
}
.tbe-header {
  text-align: center;
  margin-bottom: 4rem;
}
.tbe-label {
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
.tbe-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #f8fafc;
}

.tbe-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 640px) {
  .tbe-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .tbe-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.tbe-card {
  background: #334155;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #475569;
  text-align: center;
  transition: transform 0.3s ease;
}
.tbe-card:hover {
  transform: translateY(-5px);
  border-color: #64748b;
}
.tbe-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.tbe-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.75rem;
}
.tbe-card p {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
}
</style>
