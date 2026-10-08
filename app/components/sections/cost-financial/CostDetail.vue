<template>
  <section class="cost-detail-wrapper">
    <div class="cost-detail-container">
      <div class="csd-header" data-aos="fade-up">
        <h2 class="csd-title">Lihat Detail Biaya Secara Lebih Lengkap</h2>
        <p class="csd-subtitle">Halaman detail membantu pengguna melihat informasi biaya secara lebih lengkap, termasuk kendaraan, aktivitas, nominal, dan informasi pendukung lainnya yang tersedia dalam sistem.</p>
      </div>

      <div class="csd-layout">
         
         <div class="csd-left" data-aos="fade-right" data-aos-delay="200">
             <div class="csd-point">
                 <h4>Kendaraan & Aktivitas</h4>
                 <p>Lihat secara spesifik pengalokasian sumber dana peruntukan kepada unit kendaraan dan rutinitas kegiatannya masing-masing.</p>
             </div>
             <div class="csd-point">
                 <h4>Keterangan & Pendukung</h4>
                 <p>Ketahui latar belakang rinci, perincian tagihan faktur, atau referensi persetujuan lampiran sebelum validasi proses keuangan.</p>
             </div>
             <div class="csd-point">
                 <h4>Nominal & Tanggal</h4>
                 <p>Pantau presisi rekam pembukuan atas besaran biaya yang diminta serta ketepatan kronologi transaksinya di rentang jadwal pelaporan.</p>
             </div>
             <div class="csd-point">
                 <h4>Status</h4>
                 <p>Analisis sejauh mana progres penerimaan dokumen beban operasional di jajaran manajemen sebelum pencairan tahap akhirnya.</p>
             </div>
         </div>

         <div class="csd-right" data-aos="fade-left" data-aos-delay="100">
             <div class="csd-mockup">
                 <img src="/assets/umum/backgrounds/hero-cost.jpg" alt="Detail Biaya FleetSumo" class="csd-img" />
                 
                 <div class="csd-callout c1">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Nominal Biaya</span>
                 </div>
                 <div class="csd-callout c2">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Kendaraan Terkait</span>
                 </div>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-detail-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.cost-detail-container {
  max-width: 1200px;
  width: 100%;
}
.csd-header {
  text-align: center;
  margin-bottom: 4rem;
}
.csd-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.csd-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.csd-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .csd-layout {
    grid-template-columns: 2fr 3fr;
  }
}
.csd-mockup {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.csd-img {
  width: 100%;
  height: auto;
  display: block;
}
.csd-callout {
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

.csd-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.csd-point h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.csd-point p {
  color: #64748b;
  line-height: 1.6;
}
</style>
