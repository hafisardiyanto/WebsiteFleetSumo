<template>
  <section class="tyre-detail-wrapper">
    <div class="tyre-detail-container">
      <div class="tyd-header" data-aos="fade-up">
        <h2 class="tyd-title">Lihat Informasi Ban Secara Lebih Lengkap</h2>
        <p class="tyd-subtitle">Halaman detail membantu pengguna melihat informasi ban secara lebih lengkap, termasuk informasi penggunaan dan keterkaitannya dengan kendaraan.</p>
      </div>

      <div class="tyd-layout">
         
         <div class="tyd-left" data-aos="fade-right" data-aos-delay="200">
             <div class="tyd-point">
                 <h4>Informasi Ban</h4>
                 <p>Lihat secara detail spesifikasi dan kondisi fisik dari ban.</p>
             </div>
             <div class="tyd-point">
                 <h4>Kendaraan</h4>
                 <p>Pantau armada dan tipe kendaraan yang menggunakan ban terkait.</p>
             </div>
             <div class="tyd-point">
                 <h4>Posisi</h4>
                 <p>Identifikasi letak dan posisi ban dalam struktur dan konfigurasi roda kendaraan.</p>
             </div>
             <div class="tyd-point">
                 <h4>Status/Kondisi & Riwayat</h4>
                 <p>Terus perbarui kondisi operasional ban dan tinjau seluruh rekam aktivitas sebelumnya.</p>
             </div>
         </div>

         <div class="tyd-right" data-aos="fade-left" data-aos-delay="100">
             <div class="tyd-mockup">
                 <img src="/assets/solusi/tyre-management/tyre-detail-hero.jpg" alt="Detail Ban FleetSumo" class="tyd-img" />
                 
                 <!-- Callouts based on typical Details -->
                 <div class="tyd-callout c1">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Informasi Ban</span>
                 </div>
                 <div class="tyd-callout c2">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Riwayat</span>
                 </div>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-detail-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.tyre-detail-container {
  max-width: 1200px;
  width: 100%;
}
.tyd-header {
  text-align: center;
  margin-bottom: 4rem;
}
.tyd-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.tyd-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.tyd-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .tyd-layout {
    grid-template-columns: 2fr 3fr;
  }
}
.tyd-mockup {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.tyd-img {
  width: 100%;
  height: auto;
  display: block;
}
.tyd-callout {
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

.tyd-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.tyd-point h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.tyd-point p {
  color: #64748b;
  line-height: 1.6;
}
</style>
