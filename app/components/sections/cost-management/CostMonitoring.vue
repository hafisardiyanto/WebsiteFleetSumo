<template>
  <section class="cost-monitoring-wrapper">
    <div class="cost-monitoring-container">
      <div class="cost-monitoring-header" data-aos="fade-up">
        <h2 class="cost-monitoring-title">Lihat Informasi Biaya dalam Satu Dashboard</h2>
        <p class="cost-monitoring-subtitle">
          Dashboard Cost Management membantu melihat informasi biaya berdasarkan kategori dalam satu antarmuka terpusat tanpa repot pindah aplikasi.
        </p>
      </div>

      <div class="cost-mockup-ui" data-aos="zoom-in" data-aos-delay="100">
        <!-- Dashboard Header -->
        <div class="mockup-header-bar">
          <div class="dots-win"><span></span><span></span><span></span></div>
          <div class="header-text">FleetSumo - Central Cost Control</div>
        </div>

        <div class="mockup-main">
          <!-- Top KPI Cards -->
          <div class="mockup-kpi-row">
            <div class="kpi-card">
               <span class="kpi-label">Total Biaya Bulan Ini</span>
               <span class="kpi-score">Rp 48.5M</span>
            </div>
            <div class="kpi-card highlighted">
               <span class="kpi-label">Pengajuan Aktif</span>
               <span class="kpi-score">14 <span>Tiket</span></span>
            </div>
            <div class="kpi-card">
               <span class="kpi-label">Realisasi (Paid)</span>
               <span class="kpi-score success">Rp 32.1M</span>
            </div>
          </div>

          <!-- Mid Section -->
          <div class="mockup-mid-row">
            <!-- Simulated Chart Block -->
            <div class="mockup-chart-block">
               <h4 class="m-block-title">Distribusi Biaya Berdasarkan Kategori</h4>
               <div class="chart-bars">
                 <div class="bar-col">
                    <div class="bar-fill fuel" style="height: 80%"></div>
                    <span>Fuel</span>
                 </div>
                 <div class="bar-col">
                    <div class="bar-fill maint" style="height: 65%"></div>
                    <span>Maintenance</span>
                 </div>
                 <div class="bar-col">
                    <div class="bar-fill tyre" style="height: 40%"></div>
                    <span>Tyre</span>
                 </div>
                 <div class="bar-col">
                    <div class="bar-fill vendor" style="height: 25%"></div>
                    <span>Vendor</span>
                 </div>
               </div>
            </div>

            <!-- List table -->
            <div class="mockup-list-block">
               <h4 class="m-block-title">Daftar Pengajuan Terakhir</h4>
               <div class="m-list-item">
                  <div class="m-list-info">
                     <strong>BBM Truk B-193-XX</strong>
                     <span>12 Okt 2026 - Ops Tambang</span>
                  </div>
                  <div class="m-list-status">
                     <span class="badge warn">Pending</span>
                  </div>
               </div>
               <div class="m-list-item">
                  <div class="m-list-info">
                     <strong>Ganti 4 Ban R.Muka</strong>
                     <span>10 Okt 2026 - Vendor Hino</span>
                  </div>
                  <div class="m-list-status">
                     <span class="badge done">Terealisasi</span>
                  </div>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/cost/cost-monitoring.css" scoped></style>
