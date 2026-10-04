<template>
  <section class="dm-def-wrapper">
    <div class="dm-def-container">
       <div class="dmd-header" data-aos="fade-up">
        <h2 class="dmd-title">Satu Pusat Informasi untuk Data Pengemudi</h2>
        <p class="dmd-subtitle">Driver Management membantu perusahaan mengelola informasi pengemudi secara terpusat dan menghubungkannya dengan kebutuhan operasional armada.</p>
      </div>

      <div class="dmd-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <div class="dmd-row">
            <div class="dmd-box core">DRIVER MANAGEMENT</div>
         </div>
         
         <div class="dmd-stem-down"></div>
         
         <div class="dmd-row connect-line">
            <div class="dmd-line-h"></div>
            <div class="dmd-stem-node left"></div>
            <div class="dmd-stem-node center"></div>
            <div class="dmd-stem-node right"></div>
         </div>

         <div class="dmd-row splits">
            <div class="dmd-box split">Data Driver</div>
            <div class="dmd-box split">Dokumen</div>
            <div class="dmd-box split">Kendaraan</div>
         </div>

         <div class="dmd-row join-line">
            <div class="dmd-line-h-join"></div>
            <div class="dmd-stem-node left"></div>
            <div class="dmd-stem-node right"></div>
         </div>

         <div class="dmd-stem-down-mid"></div>

         <div class="dmd-row">
            <div class="dmd-box node">Aktivitas Driver</div>
         </div>

         <div class="dmd-stem-down"></div>
         
         <div class="dmd-row">
            <div class="dmd-box node end">Riwayat Driver</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/driver-management/dm-definition.css" scoped></style>
