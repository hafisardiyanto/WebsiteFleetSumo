<template>
  <section class="maint-inte-wrapper">
    <div class="maint-inte-container">
      <div class="mi-header" data-aos="fade-up">
        <h2 class="mi-title">Maintenance Terhubung dengan Ekosistem Armada</h2>
        <p class="mi-subtitle">Maintenance tidak berdiri sendiri. Aktivitas perawatan kendaraan berkaitan dengan kendaraan, sparepart, vendor, dan biaya operasional.</p>
      </div>

      <div class="mi-layout" data-aos="fade-up" data-aos-delay="200">
         
         <div class="mi-diagram">
            <div class="md-row">
               <div class="md-box top">KENDARAAN</div>
            </div>
            
            <div class="md-stem"></div>
            <div class="md-arrow single">▼</div>
            
            <div class="md-row">
               <div class="md-box main-m">MAINTENANCE</div>
            </div>

            <div class="md-crossbar">
                <div class="md-arrow slanted-l">↙</div>
                <div class="md-arrow">↓</div>
                <div class="md-arrow slanted-r">↘</div>
            </div>
            
            <div class="md-row branches">
               <div class="md-box sec">SPAREPART</div>
               <div class="md-box sec">VENDOR</div>
               <div class="md-box sec">COST</div>
            </div>

            <div class="md-crossbar-bottom">
                <div class="md-arrow up-slanted-r">↘</div>
                <div class="md-arrow">↓</div>
                <div class="md-arrow up-slanted-l">↙</div>
            </div>

            <div class="md-row">
               <div class="md-box final">HISTORY & REPORT</div>
            </div>
         </div>

         <div class="mi-cards" data-aos="fade-up" data-aos-delay="300">
            <div class="mi-card">
               <h4>Fleet Management</h4>
               <p>Maintenance dikaitkan dengan kendaraan yang dikelola.</p>
            </div>
            <div class="mi-card">
               <h4>Sparepart</h4>
               <p>Kebutuhan sparepart dapat berkaitan dengan aktivitas maintenance.</p>
            </div>
            <div class="mi-card">
               <h4>Vendor</h4>
               <p>Aktivitas maintenance dapat melibatkan vendor sesuai proses perusahaan.</p>
            </div>
            <div class="mi-card">
               <h4>Cost Management</h4>
               <p>Biaya yang berkaitan dengan maintenance dapat menjadi bagian dari pengelolaan biaya.</p>
            </div>
            <div class="mi-card">
               <h4>Monitoring & Reporting</h4>
               <p>Informasi maintenance dapat digunakan untuk monitoring dan laporan.</p>
            </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance-management/maint-integration.css" scoped></style>
