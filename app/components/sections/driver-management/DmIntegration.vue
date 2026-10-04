<template>
  <section class="dm-inte-wrapper">
    <div class="dm-inte-container">
      <div class="dmi-header" data-aos="fade-up">
        <h2 class="dmi-title">Driver Management yang Terhubung dengan Operasional Armada</h2>
      </div>

      <div class="dmi-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <div class="dmi-row">
            <div class="dmi-box core">Fleet & Vehicle</div>
         </div>
         <div class="dmi-arrow">↕</div>

         <div class="dmi-row">
            <div class="dmi-box core highlight">Driver Management</div>
         </div>
         <div class="dmi-arrow">↕</div>

         <div class="dmi-row">
            <div class="dmi-box core">Maintenance</div>
         </div>
         <div class="dmi-arrow">↕</div>

         <div class="dmi-row flex-row">
            <div class="dmi-box core split">Fuel</div>
            <div class="dmi-box core split">Tyre</div>
         </div>
         <div class="dmi-arrow">↕</div>

         <div class="dmi-row">
            <div class="dmi-box core">Cost</div>
         </div>
         <div class="dmi-arrow">↕</div>

         <div class="dmi-row">
            <div class="dmi-box core final">Dashboard & Reports</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/driver-management/dm-integration.css" scoped></style>
