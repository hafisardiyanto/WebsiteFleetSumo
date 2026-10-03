<template>
  <section class="tyre-monitoring-wrapper">
    <div class="tyre-monitoring-container">
      <div class="tym-header" data-aos="fade-up">
        <span class="tym-label">MONITORING</span>
        <h2 class="tym-title">Gunakan Data Ban untuk Monitoring dan Evaluasi</h2>
        <p class="tym-subtitle">Data ban yang tercatat secara terstruktur membantu perusahaan mendapatkan informasi yang lebih mudah dipantau dan digunakan untuk evaluasi operasional armada.</p>
      </div>

      <div class="tym-layout">
         
         <div class="tym-points" data-aos="fade-right" data-aos-delay="100">
             <div class="tym-point">
                 <h4>Informasi Ban</h4>
                 <p>Pantau data dan status ban yang tersedia dalam sistem.</p>
             </div>
             <div class="tym-point">
                 <h4>Posisi Ban</h4>
                 <p>Telusuri posisi ban berdasarkan kendaraan.</p>
             </div>
             <div class="tym-point">
                 <h4>Riwayat Penggunaan</h4>
                 <p>Lihat aktivitas dan riwayat ban yang telah tercatat.</p>
             </div>
             <div class="tym-point">
                 <h4>Informasi Armada</h4>
                 <p>Hubungkan informasi ban dengan data kendaraan untuk gambaran lebih lengkap.</p>
             </div>
         </div>

         <!-- Fallback HTML CSS UI for Monitoring since no actual tyre dashboard screenshot was supplied -->
         <div class="tym-visual" data-aos="fade-left" data-aos-delay="200">
             <div class="tym-dashboard-ui">
                 <div class="t-card">
                     <span class="t-ico yellow">⚠️</span>
                     <div>
                        <h5>Perlu Inspeksi</h5>
                        <p>12 Ban</p>
                     </div>
                 </div>
                 <div class="t-card">
                     <span class="t-ico green">📍</span>
                     <div>
                        <h5>Status Posisi</h5>
                        <p>Terhubung ke Kendaraan</p>
                     </div>
                 </div>
                 <div class="t-card">
                     <span class="t-ico blue">📊</span>
                     <div>
                        <h5>Riwayat Pemakaian</h5>
                        <p>Tercatat Sistem</p>
                     </div>
                 </div>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/tyre-management/tyre-monitoring.css" scoped></style>
