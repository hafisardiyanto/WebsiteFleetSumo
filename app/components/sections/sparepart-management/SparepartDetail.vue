<template>
  <section class="sparepart-detail-wrapper">
    <div class="sparepart-detail-container">
      <div class="spd-header" data-aos="fade-up">
        <h2 class="spd-title">Lihat Informasi Sparepart Secara Lebih Lengkap</h2>
        <p class="spd-subtitle">Halaman detail membantu pengguna melihat informasi sparepart secara lebih lengkap, termasuk informasi stok dan aktivitas yang tersedia pada sistem.</p>
      </div>

      <div class="spd-layout">
         
         <div class="spd-left" data-aos="fade-right" data-aos-delay="200">
             <div class="spd-point">
                 <h4>Identitas Sparepart & Kode</h4>
                 <p>Lihat secara mendalam detail produk sparepart berserta penomoran kodenya.</p>
             </div>
             <div class="spd-point">
                 <h4>Kategori</h4>
                 <p>Ketahui kelompok penyimpanan dan standarisasi sparepart.</p>
             </div>
             <div class="spd-point">
                 <h4>Stok & Gudang</h4>
                 <p>Pantau jumlah terbaru persediaan stok fisik dan ketahui di gudang mana ia berada.</p>
             </div>
             <div class="spd-point">
                 <h4>Riwayat/Transaksi</h4>
                 <p>Tinjau langsung seluruh rekam jejak keluar masuknya barang yang berkaitan dengan operasional.</p>
             </div>
         </div>

         <div class="spd-right" data-aos="fade-left" data-aos-delay="100">
             <div class="spd-mockup">
                 <img src="/assets/fitur/sparepart/hero.jpg" alt="Detail Sparepart FleetSumo" class="spd-img" />
                 
                 <!-- Callouts based on typical Details -->
                 <div class="spd-callout c1">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Identitas Sparepart</span>
                 </div>
                 <div class="spd-callout c2">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Riwayat Transaksi</span>
                 </div>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-detail-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.sparepart-detail-container {
  max-width: 1200px;
  width: 100%;
}
.spd-header {
  text-align: center;
  margin-bottom: 4rem;
}
.spd-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.spd-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.spd-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .spd-layout {
    grid-template-columns: 2fr 3fr;
  }
}
.spd-mockup {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.spd-img {
  width: 100%;
  height: auto;
  display: block;
}
.spd-callout {
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
.c1 { top: 15%; left: 15%; }
.c2 { top: 60%; left: 50%; }

.spd-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.spd-point h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.spd-point p {
  color: #64748b;
  line-height: 1.6;
}
</style>
