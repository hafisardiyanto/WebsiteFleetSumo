<template>
  <section class="maint-monitoring-wrapper">
    <div class="maint-monitoring-container">
      <div class="mmr-header" data-aos="fade-up">
        <h2 class="mmr-title">Pantau Aktivitas Maintenance Armada</h2>
        <p class="mmr-subtitle">Informasi maintenance yang tercatat dapat membantu tim memantau aktivitas perawatan kendaraan dan menelusuri histori maintenance.</p>
      </div>

      <div class="mmr-layout">
         
         <div class="mmr-points" data-aos="fade-right" data-aos-delay="100">
             <div class="mmr-point">
                 <h4>Maintenance Berjalan</h4>
                 <p>Pantau pekerjaan maintenance yang sedang diproses.</p>
             </div>
             <div class="mmr-point">
                 <h4>Maintenance SelesSistem</h4>
                 <p>Identifikasi aktivitas maintenance yang telah diselesaikan.</p>
             </div>
             <div class="mmr-point">
                 <h4>Riwayat Kendaraan</h4>
                 <p>Telusuri histori perawatan berdasarkan kendaraan.</p>
             </div>
             <div class="mmr-point">
                 <h4>Informasi Maintenance</h4>
                 <p>Gunakan data maintenance untuk membantu proses monitoring dan evaluasi.</p>
             </div>
         </div>

         <!-- HTML Dashboard representation as fallback instead of image if preferred, or using PengajuanPerawatan.png -->
         <div class="mmr-visual" data-aos="fade-left" data-aos-delay="200">
             <div class="mmr-dashboard-ui">
                 <div class="ui-card flex">
                    <div class="ui-icon-box yellow">⚙️</div>
                    <div class="ui-text">
                       <h5>Maintenance</h5>
                       <span>Dalam Proses</span>
                    </div>
                 </div>
                 <div class="ui-card flex">
                    <div class="ui-icon-box green">✅</div>
                    <div class="ui-text">
                       <h5>Maintenance</h5>
                       <span>SelesSistem</span>
                    </div>
                 </div>
                 <div class="ui-card flex">
                    <div class="ui-icon-box blue">🕒</div>
                    <div class="ui-text">
                       <h5>Riwayat</h5>
                       <span>Maintenance</span>
                    </div>
                 </div>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance-management/maint-monitoring.css" scoped></style>
