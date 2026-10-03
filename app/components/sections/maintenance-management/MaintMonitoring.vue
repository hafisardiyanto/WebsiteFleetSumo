<template>
  <section class="maint-monitoring-wrapper">
    <div class="maint-monitoring-container">
      <div class="maint-monitoring-header" data-aos="fade-up">
        <h2 class="maint-monitoring-title">Pantau Status Maintenance dalam Satu Tampilan</h2>
      </div>

      <!-- Mockup Overview Board -->
      <div class="maint-overview-board" data-aos="zoom-in" data-aos-delay="100">
        <!-- Top Stats -->
        <div class="maint-stats">
          <div class="maint-stat-item">
            <span>MAINTENANCE TERJADWAL</span>
            <strong>24</strong>
          </div>
          <div class="maint-stat-item">
            <span>SEDANG DIPROSES</span>
            <strong style="color: #0ea5e9;">08</strong>
          </div>
          <div class="maint-stat-item">
            <span>SELESAI</span>
            <strong style="color: #22c55e;">42</strong>
          </div>
          <div class="maint-stat-item">
            <span>OVERDUE</span>
            <strong style="color: #ef4444;">03</strong>
          </div>
        </div>

        <div class="maint-dashboard-split">
          <div class="maint-sidebar">
            <h3 class="maint-sidebar-title">Informasi yang Ditampilkan:</h3>
            <ul class="maint-list">
              <li>Status maintenance</li>
              <li>Kendaraan yang sedang diperbaiki</li>
              <li>Maintenance terjadwal</li>
              <li>Maintenance selesai</li>
              <li>Riwayat pekerjaan</li>
              <li>Biaya maintenance</li>
            </ul>
          </div>
          
          <div class="maint-visual-right">
             <div class="browser-mockup">
                <div class="browser-dots"><span></span><span></span><span></span></div>
             </div>
             <!-- The user told us to use DashboardKendaraan.jpg if we don't have a specific maintenance one -->
             <img src="/DashboardKendaraan.jpg" alt="Dashboard Maintenance FleetSumo" class="maint-dashboard-img">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance/maint-monitoring.css" scoped></style>
