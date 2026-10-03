<template>
  <section class="fuel-monitoring-wrapper">
    <div class="fuel-monitoring-container">
      <div class="fmr-header" data-aos="fade-up">
        <h2 class="fmr-title">Pantau Penggunaan BBM Berdasarkan Data Armada</h2>
        <p class="fmr-subtitle">Data aktivitas BBM yang tercatat dapat digunakan untuk membantu perusahaan memantau penggunaan bahan bakar dan melihat pola penggunaan berdasarkan kendaraan.</p>
      </div>

      <div class="fmr-layout">
         
         <div class="fmr-points" data-aos="fade-right" data-aos-delay="100">
             <div class="fmr-point">
                 <h4>Volume Penggunaan</h4>
                 <p>Pantau informasi volume BBM berdasarkan aktivitas pengisian yang tercatat.</p>
             </div>
             <div class="fmr-point">
                 <h4>Biaya BBM</h4>
                 <p>Lihat informasi biaya yang berkaitan dengan penggunaan BBM.</p>
             </div>
             <div class="fmr-point">
                 <h4>Riwayat Kendaraan</h4>
                 <p>Telusuri aktivitas BBM berdasarkan kendaraan.</p>
             </div>
             <div class="fmr-point">
                 <h4>Laporan</h4>
                 <p>Gunakan data BBM untuk membantu monitoring dan evaluasi operasional.</p>
             </div>
         </div>

         <!-- Fallback HTML CSS UI for Monitoring since no actual dashboard screenshots was supplied beyond DashboardBBM.png -->
         <div class="fmr-visual" data-aos="fade-left" data-aos-delay="200">
             <div class="fmr-dashboard-ui">
                 <div class="ui-card flex">
                    <div class="ui-icon-box blue">📊</div>
                    <div class="ui-text">
                       <h5>Volume</h5>
                       <span>Monitoring</span>
                    </div>
                 </div>
                 <div class="ui-card flex">
                    <div class="ui-icon-box red">💳</div>
                    <div class="ui-text">
                       <h5>Biaya BBM</h5>
                       <span>Monitoring</span>
                    </div>
                 </div>
                 <div class="ui-card flex">
                    <div class="ui-icon-box green">🕒</div>
                    <div class="ui-text">
                       <h5>Riwayat Kendaraan</h5>
                       <span>Log Aktivitas</span>
                    </div>
                 </div>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel-management/fuel-monitoring.css" scoped></style>
