<template>
  <section class="mnt-int-wrapper">
    <div class="mnt-int-container">
      <div class="mni-header" data-aos="fade-up">
        <h2 class="mni-title">Maintenance Terhubung dengan Data Operasional Armada</h2>
      </div>

      <!-- Diagram Ecosystem -->
      <div class="mni-diagram" data-aos="zoom-in" data-aos-delay="200">
         <div class="mni-top">
            <div class="mni-box parent">FLEET & VEHICLE</div>
         </div>
         <div class="mni-arrow-down">↓</div>
         <div class="mni-center">
            <div class="mni-box active">MAINTENANCE</div>
         </div>
         <div class="mni-branches">
            <div class="mni-branch">
               <span class="branch-arrow">↙</span>
               <div class="mni-box child">SPAREPART</div>
            </div>
            <div class="mni-branch">
               <span class="branch-arrow">↓</span>
               <div class="mni-box child">VENDOR</div>
            </div>
            <div class="mni-branch">
               <span class="branch-arrow">↘</span>
               <div class="mni-box child">COST</div>
            </div>
         </div>
         <div class="mni-arrow-down">↓</div>
         <div class="mni-bottom">
            <div class="mni-box final">HISTORY & REPORT</div>
         </div>
      </div>

    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance/mnt-integration.css" scoped></style>
