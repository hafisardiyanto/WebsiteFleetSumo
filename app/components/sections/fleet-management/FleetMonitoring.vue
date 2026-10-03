<template>
  <section class="fleet-monitoring-wrapper">
    <div class="fleet-monitoring-container">
      <div class="fleet-monitoring-header" data-aos="fade-up">
        <h2 class="fleet-monitoring-title">Dapatkan Gambaran yang Lebih Jelas tentang Armada Anda</h2>
      </div>

      <!-- Highlights Top Bar -->
      <div class="monitoring-stats" data-aos="fade-up" data-aos-delay="100">
        <div class="stat-item">
          <span>TOTAL ARMADA</span>
          <strong>120 Unit</strong>
        </div>
        <div class="stat-item">
          <span>ARMADA AKTIF</span>
          <strong style="color: #22c55e;">98 Unit</strong>
        </div>
        <div class="stat-item">
          <span>DALAM MAINTENANCE</span>
          <strong style="color: #eab308;">12 Unit</strong>
        </div>
        <div class="stat-item">
          <span>TIDAK AKTIF</span>
          <strong style="color: #ef4444;">10 Unit</strong>
        </div>
      </div>

      <!-- Dashboard Mockup Layout -->
      <div class="monitoring-layout" data-aos="zoom-in" data-aos-delay="200">
        <div class="monitoring-sidebar">
          <h3>Informasi Terpantau:</h3>
          <ul class="monitored-list">
            <li><span class="icon">✓</span> Status kendaraan</li>
            <li><span class="icon">✓</span> Distribusi armada</li>
            <li><span class="icon">✓</span> Aktivitas kendaraan</li>
            <li><span class="icon">✓</span> Riwayat kendaraan</li>
            <li><span class="icon">✓</span> Maintenance</li>
            <li><span class="icon">✓</span> Biaya</li>
          </ul>
        </div>
        
        <div class="monitoring-visual">
          <div class="browser-mockup">
            <div class="browser-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <img src="/DashboardKendaraan.jpg" alt="FleetSumo Dashboard" class="monitoring-img">
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fleet-management/fleet-monitoring.css" scoped></style>
