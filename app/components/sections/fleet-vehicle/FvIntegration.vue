<template>
  <section class="fv-inte-wrapper">
    <div class="fv-inte-container">
      <div class="fvi-header" data-aos="fade-up">
        <h2 class="fvi-title">Data Kendaraan Menjadi Bagian dari Seluruh Aktivitas Armada</h2>
        <p class="fvi-subtitle">Fleet & Vehicle tidak berdiri sendiri. Data kendaraan dapat menjadi referensi bagi berbagai aktivitas lain dalam FleetSumo.</p>
      </div>

      <div class="fvi-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <div class="fvi-row top-nodes">
            <div class="fvi-box module">Driver Mgt</div>
            <div class="fvi-box module">Maintenance</div>
            <div class="fvi-box module">Fuel</div>
            <div class="fvi-box module">Tyre</div>
         </div>

         <div class="fvi-connectors top-con">
             <div class="fvi-line-h"></div>
             <div class="fvi-stem"></div>
         </div>
         
         <div class="fvi-row center-node">
            <div class="fvi-box core">FLEET & VEHICLE</div>
         </div>

         <div class="fvi-connectors btm-con">
             <div class="fvi-stem"></div>
             <div class="fvi-line-h"></div>
         </div>
         
         <div class="fvi-row bottom-nodes">
            <div class="fvi-box module">Sparepart</div>
            <div class="fvi-box module">Vendor</div>
            <div class="fvi-box module">Cost & Finance</div>
            <div class="fvi-box module final">Dashboards</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fleet-vehicle/fv-integration.css" scoped></style>
