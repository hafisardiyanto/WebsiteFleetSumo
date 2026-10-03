<template>
  <section class="maint-def-wrapper">
    <div class="maint-def-container">
      <div class="md-header" data-aos="fade-up">
        <h2 class="md-title">Satu Alur untuk Mengelola Maintenance Kendaraan</h2>
        <p class="md-subtitle">Maintenance Management di FleetSumo membantu perusahaan mengelola proses perawatan kendaraan secara terstruktur, mulai dari menemukan kebutuhan maintenance hingga mencatat hasil dan riwayat perawatan.</p>
        <div class="md-highlight">Dari temuan kendaraan hingga riwayat maintenance, setiap proses dapat dikelola dalam satu alur.</div>
      </div>

      <div class="md-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="md-step">
            <div class="md-box">INSPEKSI</div>
            <div class="md-arrow">▼</div>
         </div>
         <div class="md-step">
            <div class="md-box">TEMUAN</div>
            <div class="md-arrow">▼</div>
         </div>
         <div class="md-step">
            <div class="md-box">PENGAJUAN</div>
            <div class="md-arrow">▼</div>
         </div>
         <div class="md-step">
            <div class="md-box">APPROVAL</div>
            <div class="md-arrow">▼</div>
         </div>
         <div class="md-step">
            <div class="md-box active">MAINTENANCE</div>
            <div class="md-arrow">▼</div>
         </div>
         <div class="md-step">
            <div class="md-box">REALISASI</div>
            <div class="md-arrow">▼</div>
         </div>
         <div class="md-step final">
            <div class="md-box">RIWAYAT</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance-management/maint-definition.css" scoped></style>
