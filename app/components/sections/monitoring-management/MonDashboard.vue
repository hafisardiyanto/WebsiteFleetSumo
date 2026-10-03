<template>
  <section class="mon-dash-wrapper">
    <div class="mon-dash-container">
      <div class="mon-dash-header" data-aos="fade-up">
        <h2 class="mon-dash-title">Dapatkan Gambaran Armada dalam Satu Tampilan</h2>
        <p class="mon-dash-subtitle">
          Dashboard membantu perusahaan melihat informasi operasional penting tanpa harus membuka setiap data secara terpisah.
        </p>
      </div>

      <!-- Dashboard Mockup UI -->
      <div class="mon-ui-mockup" data-aos="fade-up" data-aos-delay="100">
        
        <!-- Header -->
        <div class="ui-head">
          <div class="ui-dots"><span></span><span></span><span></span></div>
          <div class="ui-title">FleetSumo - Central Dashboard Overview</div>
        </div>

        <!-- Body -->
        <div class="ui-body">
           <!-- Top KPIs -->
           <div class="ui-kpi-grid">
              
              <div class="ui-kpi-card">
                 <span class="kpi-icon">🚚</span>
                 <div class="kpi-data">
                    <span class="kpi-lbl">Total Kendaraan</span>
                    <strong class="kpi-val">124 <span>Unit Aktif</span></strong>
                 </div>
              </div>

              <div class="ui-kpi-card">
                 <span class="kpi-icon">💰</span>
                 <div class="kpi-data">
                    <span class="kpi-lbl">Total Biaya (Bulan Ini)</span>
                    <strong class="kpi-val highlight">Rp 85.2M</strong>
                 </div>
              </div>

              <div class="ui-kpi-card">
                 <span class="kpi-icon">🔧</span>
                 <div class="kpi-data">
                    <span class="kpi-lbl">Status Maintenance</span>
                    <strong class="kpi-val info">8 <span>Sedang Servis</span></strong>
                 </div>
              </div>

              <div class="ui-kpi-card">
                 <span class="kpi-icon">⛽</span>
                 <div class="kpi-data">
                    <span class="kpi-lbl">Total BBM Terpakai</span>
                    <strong class="kpi-val warning">12,540 <span>Liter</span></strong>
                 </div>
              </div>
           </div>

           <!-- Multi-Column Layout -->
           <div class="ui-content-row">
              
              <!-- Simulated Line Chart -->
              <div class="ui-chart-box line-chart">
                 <h4>Tren Operasional Mingguan</h4>
                 <div class="sim-line-chart">
                    <svg viewBox="0 0 100 30" class="chart-svg">
                       <path d="M0,25 Q10,20 20,28 T40,15 T60,20 T80,5 T100,10" fill="none" stroke="#4f46e5" stroke-width="2"/>
                       <!-- Data points -->
                       <circle cx="20" cy="28" r="1.5" fill="#4f46e5"/>
                       <circle cx="40" cy="15" r="1.5" fill="#4f46e5"/>
                       <circle cx="60" cy="20" r="1.5" fill="#4f46e5"/>
                       <circle cx="80" cy="5" r="1.5" fill="#4f46e5"/>
                    </svg>
                 </div>
              </div>

              <!-- List Overview -->
              <div class="ui-list-box">
                 <h4>Peringatan & Aktivitas Ban</h4>
                 <ul class="sim-list">
                    <li><span class="status red">Alert</span> B-1934-KL: Tekanan Angin Rendah</li>
                    <li><span class="status yellow">Warn</span> D-8812-ZZ: 2 Ban R. Belakang Botak</li>
                    <li><span class="status green">Log</span> H-1190-XX: Pergantian 4 Ban Selesai</li>
                 </ul>
              </div>
           </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring/mon-dashboard.css" scoped></style>
