<template>
  <section class="fuel-inte-wrapper">
    <div class="fuel-inte-container">
      <div class="fi-header" data-aos="fade-up">
        <h2 class="fi-title">Fuel Management Terhubung dengan Data Armada</h2>
        <p class="fi-subtitle">Informasi BBM berkaitan erat dengan kendaraan dan aktivitas operasional lainnya. FleetSumo membantu menghubungkan informasi tersebut dalam satu ekosistem.</p>
      </div>

      <div class="fi-layout" data-aos="fade-up" data-aos-delay="200">
         <div class="fi-diagram">
            <div class="fd-row">
               <div class="fd-box top">FLEET VEHICLE</div>
            </div>
            
            <div class="fd-stem"></div>
            <div class="fd-arrow single">▼</div>
            
            <div class="fd-row">
               <div class="fd-box main-f">FUEL ACTIVITY</div>
            </div>
            
            <div class="fd-stem line-small"></div>
            
            <div class="fd-crossbar">
                <div class="fd-arrow slanted-l">↙</div>
                <div class="fd-arrow">↓</div>
                <div class="fd-arrow slanted-r">↘</div>
            </div>
            
            <div class="fd-row branches">
               <div class="fd-box sec">VOLUME</div>
               <div class="fd-box sec">COST</div>
               <div class="fd-box sec">HISTORY</div>
            </div>

            <div class="fd-crossbar-bottom">
                <div class="fd-stem sec-stem sl-1"></div>
                <div class="fd-stem sec-stem sl-2"></div>
                <div class="fd-stem sec-stem sl-3"></div>
            </div>

            <div class="fd-row">
               <div class="fd-box final">MONITORING &<br>REPORTING</div>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel-management/fuel-integration.css" scoped></style>
