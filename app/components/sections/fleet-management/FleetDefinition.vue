<template>
  <section class="fleet-def-wrapper">
    <div class="fleet-def-container">
      <div class="fd-header" data-aos="fade-up">
        <h2 class="fd-title">Satu Pusat Informasi untuk Seluruh Armada</h2>
        <p class="fd-subtitle">Fleet Management merupakan proses pengelolaan kendaraan dan informasi yang berkaitan dengan operasional armada. FleetSumo membantu perusahaan mengelola informasi tersebut dalam satu platform, mulai dari data kendaraan hingga riwayat aktivitasnya.</p>
        <div class="fd-highlight">Kendaraan menjadi pusat informasi yang menghubungkan berbagai aktivitas armada.</div>
      </div>

      <div class="fd-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="fd-row">
            <div class="fd-box top">DRIVER</div>
         </div>
         <div class="fd-stem"></div>
         <div class="fd-arrow">▼</div>
         
         <div class="fd-row middle-row">
            <div class="fd-box left">DOKUMEN</div>
            <div class="fd-line-horiz arr-r">►</div>
            <div class="fd-box center core">KENDARAAN</div>
            <div class="fd-line-horiz arr-l">◄</div>
            <div class="fd-box right">OPERASIONAL</div>
         </div>

         <div class="fd-stem below-core"></div>

         <div class="fd-crossbar">
            <div class="fd-branch left">▼ <br/> Maintenance</div>
            <div class="fd-branch center">▼ <br/> Fuel</div>
            <div class="fd-branch right">▼ <br/> Tyre</div>
         </div>
         
         <div class="fd-stem-long"></div>
         <div class="fd-arrow">▼</div>

         <div class="fd-row">
            <div class="fd-box bottom">Cost</div>
         </div>

         <div class="fd-stem"></div>
         <div class="fd-arrow">▼</div>

         <div class="fd-row">
            <div class="fd-box final">Dashboard & Report</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fleet-management/fleet-definition.css" scoped></style>
