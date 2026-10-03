<template>
  <section class="tyre-preview-wrapper">
    <div class="tyre-preview-container">
      <div class="tpv-header" data-aos="fade-up">
        <span class="tpv-label">LIHAT FLEETSUMO</span>
        <h2 class="tpv-title">Kelola Informasi Ban dalam Satu Tampilan</h2>
        <p class="tpv-subtitle">Lihat bagaimana FleetSumo membantu mengelola data dan aktivitas ban yang terhubung dengan kendaraan.</p>
      </div>

      <div class="tpv-layout">
         
         <!-- UI Preview Screen (Fallback to LaporanKendaraan as placeholder for screenshot framework) -->
         <div class="tpv-left" data-aos="fade-right" data-aos-delay="100">
             <div class="tpv-mockup">
                 <img src="/LaporanKendaraan.png" alt="FleetSumo Tyre Status" class="tpv-img" />
                 <div class="tpv-dot d1"></div>
                 <div class="tpv-dot d2"></div>
                 <div class="tpv-dot d3"></div>
             </div>
         </div>

         <!-- Info Details -->
         <div class="tpv-right" data-aos="fade-left" data-aos-delay="200">
             <div class="tpv-point">
                 <h4>Data Ban</h4>
                 <p>Informasi ban dapat dikelola dalam satu sistem.</p>
             </div>
             <div class="tpv-point">
                 <h4>Posisi Kendaraan</h4>
                 <p>Informasi posisi ban dapat ditelusuri berdasarkan kendaraan.</p>
             </div>
             <div class="tpv-point">
                 <h4>Riwayat</h4>
                 <p>Aktivitas ban dapat digunakan untuk melihat riwayat penggunaannya.</p>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/tyre-management/tyre-preview.css" scoped></style>
