<template>
  <section class="mon-hub-wrapper">
    <div class="mon-hub-container">
      <div class="mon-hub-header" data-aos="fade-up">
        <h2 class="mon-hub-title">Satu Ekosistem, Satu Sumber Informasi Sentral</h2>
      </div>

      <div class="mon-hub-diagram" data-aos="fade-up" data-aos-delay="100">
        <!-- V-shaped hub pointing to Monitoring -->
        
        <div class="hub-top-nodes">
           <div class="hub-node" style="transform: rotate(-10deg);">
              <div class="hn-content">Fleet</div>
              <div class="hn-line diag-right"></div>
           </div>
           
           <div class="hub-node" style="z-index:2; margin-top: -20px;">
              <div class="hn-content">Maintenance</div>
              <div class="hn-line vert-down"></div>
           </div>

           <div class="hub-node" style="transform: rotate(10deg);">
              <div class="hn-content">Fuel</div>
              <div class="hn-line diag-left"></div>
           </div>
        </div>

        <div class="hub-center-module">
           <div class="center-banner">
              <h3>MONITORING</h3>
           </div>
           <div class="hn-line vert-down short"></div>
        </div>

        <div class="hub-bottom-modules">
           <div class="bot-banner">REPORT</div>
           <div class="hn-line vert-down short"></div>
           
           <div class="business-data-banner">
              <h4>BUSINESS DATA</h4>
           </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring/mon-hub.css" scoped></style>
