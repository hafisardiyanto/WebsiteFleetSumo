<template>
  <section class="fuel-def-wrapper">
    <div class="fuel-def-container">
      <div class="fdf-header" data-aos="fade-up">
        <h2 class="fdf-title">Satu Sistem untuk Mengelola Aktivitas BBM Armada</h2>
        <p class="fdf-subtitle">Fuel Management di FleetSumo membantu perusahaan mencatat dan mengelola aktivitas penggunaan BBM berdasarkan kendaraan dan informasi pengisian yang tersedia.</p>
        <div class="fdf-highlight">Catat aktivitas BBM, hubungkan dengan kendaraan, lalu gunakan datanya untuk monitoring dan evaluasi.</div>
      </div>

      <div class="fdf-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="fdf-step">
            <div class="fdf-box">KENDARAAN</div>
            <div class="fdf-arrow">▼</div>
         </div>
         <div class="fdf-step">
            <div class="fdf-box">PENGISIAN BBM</div>
            <div class="fdf-arrow">▼</div>
         </div>
         <div class="fdf-step core-step">
            <div class="fdf-box core">PENCATATAN</div>
         </div>
         
         <div class="fdf-stem"></div>
         <div class="fdf-crossbar">
            <div class="fdf-arrow slanted-l">↙</div>
            <div class="fdf-arrow slanted-r">↘</div>
         </div>

         <div class="fdf-row branches">
            <div class="fdf-box branch">VOLUME</div>
            <div class="fdf-box branch">BIAYA</div>
         </div>

         <div class="fdf-crossbar-bottom">
            <div class="fdf-arrow up-r">↘</div>
            <div class="fdf-arrow up-l">↙</div>
         </div>
         
         <div class="fdf-stem final-stem"></div>
         <div class="fdf-arrow">▼</div>
         
         <div class="fdf-step">
            <div class="fdf-box">MONITORING</div>
            <div class="fdf-arrow">▼</div>
         </div>
         <div class="fdf-step final">
            <div class="fdf-box">LAPORAN</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel-management/fuel-definition.css" scoped></style>
