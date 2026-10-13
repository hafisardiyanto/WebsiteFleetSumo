<template>
  <section class="fv-def-wrapper">
    <div class="fv-def-container">
       <div class="fvd-header" data-aos="fade-up">
        <h2 class="fvd-title">Satu Pusat Informasi untuk Data Kendaraan</h2>
        <p class="fvd-subtitle">Fitur Fleet & Vehicle menjadi tempat untuk mengelola informasi kendaraan yang digunakan dalam operasional perusahaan. Data kendaraan dapat menjadi penghubung dengan berbagai aktivitas armada lainnya.</p>
      </div>

      <div class="fvd-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <!-- Cross diagram: 
             DRIVER
               |
         MAINT-VEHICLE-FUEL
               |
             TYRE
               |
             COST
               |
             RIWAYAT
         -->
         <div class="fvd-row">
            <div class="fvd-box node">DRIVER</div>
         </div>
         
         <div class="fvd-stem"></div>
         
         <div class="fvd-row middle-cross">
            <div class="fvd-box node side-l">MAINTENANCE</div>
            <div class="fvd-con-h left-con"></div>
            
            <div class="fvd-box core">KENDARAAN</div>
            
            <div class="fvd-con-h right-con"></div>
            <div class="fvd-box node side-r">FUEL</div>
         </div>

         <div class="fvd-stem"></div>
         
         <div class="fvd-row">
            <div class="fvd-box node">TYRE</div>
         </div>

         <div class="fvd-stem"></div>
         
         <div class="fvd-row">
            <div class="fvd-box node">COST / BIAYA</div>
         </div>

         <div class="fvd-stem"></div>
         
         <div class="fvd-row">
            <div class="fvd-box node end">RIWAYAT</div>
         </div>

         <p class="fvd-desc">Kendaraan menjadi pusat informasi yang menghubungkan berbagai aktivitas operasional armada.</p>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fleet-vehicle/fv-definition.css" scoped></style>
