<template>
  <section class="report-def-wrapper">
    <div class="report-def-container">
       <div class="rdf-header" data-aos="fade-up">
        <span class="rdf-label">MONITORING & REPORTING</span>
        <h2 class="rdf-title">Satu Tampilan untuk Memantau Berbagai Aktivitas Armada</h2>
        <p class="rdf-subtitle">Monitoring & Reporting FleetSumo menggabungkan informasi dari berbagai aktivitas armada sehingga perusahaan dapat melihat data operasional melalui dashboard dan laporan.</p>
      </div>

      <div class="rdf-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <div class="rdf-top-row">
            <div class="rdf-box src">FLEET</div>
            <div class="rdf-box src">MAINTENANCE</div>
            <div class="rdf-box src">FUEL</div>
            <div class="rdf-box src">TYRE</div>
            <div class="rdf-box src">COST</div>
         </div>

         <!-- Downward flow connectors -->
         <div class="rdf-connectors">
            <div class="rdf-line-horiz"></div>
            <div class="rdf-stem"></div>
         </div>

         <div class="rdf-arrow">▼</div>

         <div class="rdf-step">
            <div class="rdf-box core">MONITORING</div>
         </div>

         <div class="rdf-arrow">▼</div>

         <div class="rdf-step">
            <div class="rdf-box core-alt">DASHBOARD</div>
         </div>

         <div class="rdf-arrow">▼</div>

         <div class="rdf-step">
            <div class="rdf-box core-light">ANALISIS</div>
         </div>

         <div class="rdf-arrow">▼</div>
         
         <div class="rdf-step">
            <div class="rdf-box final">REPORTING</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring-reporting/report-definition.css" scoped></style>
