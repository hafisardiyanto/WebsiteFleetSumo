<template>
  <section class="report-inte-wrapper">
    <div class="report-inte-container">
      <div class="rin-header" data-aos="fade-up">
        <h2 class="rin-title">Satu Sumber Informasi untuk Operasional Armada</h2>
        <p class="rin-subtitle">Monitoring & Reporting menjadi bagian yang menghubungkan informasi dari berbagai modul FleetSumo menjadi informasi yang dapat dipantau melalui dashboard dan laporan.</p>
      </div>

      <div class="rin-layout" data-aos="fade-up" data-aos-delay="200">
         <div class="rin-diagram">
            
            <div class="rin-row top-nodes">
               <div class="rin-box side">Fleet</div>
               <div class="rin-box side">Maint.</div>
               <div class="rin-box side">Fuel</div>
               <div class="rin-box side">Tyre</div>
               <div class="rin-box side">Cost</div>
               <div class="rin-box side">Part</div>
               <div class="rin-box side">Drv.</div>
               <div class="rin-box side">Vend.</div>
            </div>

            <!-- Collectors -->
            <div class="rin-connectors-mid">
                <div class="rin-line-h"></div>
                <div class="rin-stem-down"></div>
            </div>

            <div class="rin-arrow">▼</div>
            
            <div class="rin-row center">
               <div class="rin-box core">MONITORING & REPORTING</div>
            </div>

            <div class="rin-stem-down"></div>
            
            <div class="rin-row bottom-nodes">
               <div class="rin-box footer">Dashboard</div>
               <div class="rin-box footer">Reporting</div>
               <div class="rin-box footer">Evaluation</div>
            </div>

         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring-reporting/report-integration.css" scoped></style>
