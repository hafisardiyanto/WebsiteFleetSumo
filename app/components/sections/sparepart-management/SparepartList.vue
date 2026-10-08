<template>
  <section class="sparepart-list-wrapper">
    <div class="sparepart-list-container">
      <div class="spl-header" data-aos="fade-up">
        <h2 class="spl-title">Kelola Data Sparepart dari Satu Tampilan</h2>
        <p class="spl-subtitle">Daftar sparepart membantu pengguna melihat dan mengelola data sparepart yang tersedia dalam sistem secara terpusat.</p>
      </div>

      <div class="spl-layout">
         
         <div class="spl-left" data-aos="fade-right" data-aos-delay="100">
             <div class="spl-mockup">
                 <img src="/assets/fitur/sparepart/hero.jpg" alt="Daftar Sparepart FleetSumo" class="spl-img" />
                 
                 <!-- Callouts based on typical List -->
                 <div class="spl-callout c1">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Nama Sparepart</span>
                 </div>
                 <div class="spl-callout c2">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Kode & Kategori</span>
                 </div>
                 <div class="spl-callout c3">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Stok & Gudang</span>
                 </div>
             </div>
         </div>

         <div class="spl-right" data-aos="fade-left" data-aos-delay="200">
             <div class="spl-point">
                 <h4>Identitas & Kode</h4>
                 <p>Lihat nama dan kode unik setiap sparepart untuk memperkuat akurasi data.</p>
             </div>
             <div class="spl-point">
                 <h4>Kategori</h4>
                 <p>Kelompokkan sparepart berdasarkan kategori untuk memudahkan pencarian.</p>
             </div>
             <div class="spl-point">
                 <h4>Stok & Satuan</h4>
                 <p>Pantau jumlah stok dan satuan masing-masing komponen aktual.</p>
             </div>
             <div class="spl-point">
                 <h4>Gudang & Status</h4>
                 <p>Identifikasi lokasi penyimpanan di gudang dan status ketersediaannya.</p>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-list-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.sparepart-list-container {
  max-width: 1200px;
  width: 100%;
}
.spl-header {
  text-align: center;
  margin-bottom: 4rem;
}
.spl-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.spl-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.spl-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .spl-layout {
    grid-template-columns: 3fr 2fr;
  }
}
.spl-mockup {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.spl-img {
  width: 100%;
  height: auto;
  display: block;
}
.spl-callout {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.95);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
}
.callout-dot {
  width: 8px;
  height: 8px;
  background: #3b82f6;
  border-radius: 50%;
  display: inline-block;
}
.c1 { top: 20%; left: 10%; }
.c2 { top: 40%; left: 60%; }
.c3 { top: 70%; left: 30%; }

.spl-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.spl-point h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.spl-point p {
  color: #64748b;
  line-height: 1.6;
}
</style>
