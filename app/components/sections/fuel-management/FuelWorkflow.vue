<template>
  <section class="fuel-workflow-wrapper">
    <div class="fuel-workflow-container">
      <div class="fwf-header" data-aos="fade-up">
        <h2 class="fwf-title">Bandingkan Kinerja Antar Kendaraan</h2>
        <p class="fwf-subtitle">Temukan inkonsistensi efisiensi mesin dengan mengkomparasikan rasio pemakaian bahan bakar antara kendaraan satu dengan yang lainnya.</p>
      </div>

      <div class="fwf-path">
         <div class="fwf-step" data-aos="fade-up" data-aos-delay="100">
            <div class="fwf-label">PENGUMPULAN DATA TRIP</div>
            <p>Sistem merangkum total liter terisi berbanding total kilometer yang ditempuh.</p>
         </div>

         <div class="fwf-arrow">▼</div>

         <div class="fwf-step" data-aos="fade-up" data-aos-delay="200">
            <div class="fwf-label">KALKULASI RASIO KM/L</div>
            <p>Pemrosesan otomatis angka efisiensi per kendaraan (misalnya 10 KM / Liter).</p>
         </div>

         <div class="fwf-arrow">▼</div>

         <div class="fwf-step" data-aos="fade-up" data-aos-delay="300">
            <div class="fwf-label">KOMPARASI KENDARAAN SEJENIS</div>
            <p>Bandingkan rasio truk A dengan truk B di rute dan kapasitas muatan yang identik.</p>
         </div>

         <div class="fwf-arrow">▼</div>

         <div class="fwf-step final" data-aos="fade-up" data-aos-delay="400">
            <div class="fwf-label">IDENTIFIKASI PEMBOROSAN</div>
            <p>Manajemen memetakan deviasi tajam sebagai indikator mesin bermasalah atau kebiasaan mengemudi buruk.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel-management/fuel-workflow.css" scoped></style>
