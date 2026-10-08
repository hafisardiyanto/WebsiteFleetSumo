<template>
  <section class="vendor-detail-wrapper">
    <div class="vendor-detail-container">
      <div class="vnd-header" data-aos="fade-up">
        <h2 class="vnd-title">Lihat Informasi Vendor Secara Lebih Lengkap</h2>
        <p class="vnd-subtitle">Halaman detail vendor memberikan informasi yang lebih lengkap mengenSistem vendor dan aktivitas yang berkaitan dengannya.</p>
      </div>

      <div class="vnd-layout">
         
         <div class="vnd-left" data-aos="fade-right" data-aos-delay="200">
             <div class="vnd-point">
                 <h4>Informasi Vendor</h4>
                 <p>Lihat secara holistik identitas perusahaan, legalitas, serta deskripsi ruang lingkup bisnis pihak penyedia kelengkapan armada.</p>
             </div>
             <div class="vnd-point">
                 <h4>Kontak</h4>
                 <p>Kelola daftar nomor penghubung dan alamat email untuk mempermudah jalur komunikasi operasional.</p>
             </div>
             <div class="vnd-point">
                 <h4>Layanan & Status</h4>
                 <p>Ketahui rincian spesifik penawaran jasa atau barang, dan pantau status kerjasama saat ini.</p>
             </div>
             <div class="vnd-point">
                 <h4>Aktivitas/Riwayat</h4>
                 <p>Pantau seluruh rekam jejak kerja dan layanan terdahulu yang pernah dilakukan bersama.</p>
             </div>
         </div>

         <div class="vnd-right" data-aos="fade-left" data-aos-delay="100">
             <div class="vnd-mockup">
                 <img src="/assets/fitur/vendor/hero.jpg" alt="Detail Vendor FleetSumo" class="vnd-img" />
                 
                 <div class="vnd-callout c1">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Kontak & Layanan</span>
                 </div>
                 <div class="vnd-callout c2">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Riwayat Aktivitas</span>
                 </div>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-detail-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.vendor-detail-container {
  max-width: 1200px;
  width: 100%;
}
.vnd-header {
  text-align: center;
  margin-bottom: 4rem;
}
.vnd-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.vnd-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.vnd-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .vnd-layout {
    grid-template-columns: 2fr 3fr;
  }
}
.vnd-mockup {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.vnd-img {
  width: 100%;
  height: auto;
  display: block;
}
.vnd-callout {
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

.vnd-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.vnd-point h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.vnd-point p {
  color: #64748b;
  line-height: 1.6;
}
</style>
