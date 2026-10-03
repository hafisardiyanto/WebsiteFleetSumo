<template>
  <section class="report-act-wrapper">
    <div class="report-act-container">
      <div class="rac-header" data-aos="fade-up">
        <h2 class="rac-title">Pantau Data dari Berbagai Aktivitas Armada</h2>
        <p class="rac-subtitle">Monitoring FleetSumo tidak hanya berfokus pada kendaraan, tetapi juga informasi dari berbagai aktivitas yang berkaitan dengan operasional armada.</p>
      </div>

      <div class="rac-grid">
         <div class="rac-card" data-aos="fade-up" data-aos-delay="100">
            <div class="rac-mini-visual v-maint">
                <span class="v-ico">🔧</span>
            </div>
            <div class="rac-content">
               <h3>Maintenance</h3>
               <p>Pantau aktivitas dan informasi maintenance kendaraan.</p>
            </div>
         </div>

         <div class="rac-card" data-aos="fade-up" data-aos-delay="150">
            <!-- Reuse DashboardBBM for fuel micro-screenshot representation -->
            <div class="rac-mini-visual">
                <img src="/DashboardBBM.png" alt="Fuel Dashboard mini" class="rac-mini-img" />
            </div>
            <div class="rac-content">
               <h3>Fuel</h3>
               <p>Pantau penggunaan dan biaya BBM berdasarkan data yang tersedia.</p>
            </div>
         </div>

         <div class="rac-card" data-aos="fade-up" data-aos-delay="200">
            <div class="rac-mini-visual v-tyre">
                <span class="v-ico">🛞</span>
            </div>
            <div class="rac-content">
               <h3>Tyre</h3>
               <p>Pantau informasi ban dan riwayat penggunaannya.</p>
            </div>
         </div>

         <div class="rac-card" data-aos="fade-up" data-aos-delay="250">
            <div class="rac-mini-visual v-cost">
                <span class="v-ico">💰</span>
            </div>
            <div class="rac-content">
               <h3>Cost</h3>
               <p>Pantau informasi biaya kendaraan dan operasional.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring-reporting/report-activities.css" scoped></style>
