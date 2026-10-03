<template>
  <section class="fuel-monitoring-wrapper">
    <div class="fuel-monitoring-container">
      <div class="fuel-monitoring-header" data-aos="fade-up">
        <h2 class="fuel-monitoring-title">Pantau Arus Keluar BBM dalam Satu Dashboard</h2>
      </div>

      <!-- Conceptual Pure HTML / CSS Dashboard Mockup (as per user's prompt text requirements) -->
      <div class="fuel-overview-board" data-aos="zoom-in" data-aos-delay="100">
        <!-- Top Stats -->
        <div class="fuel-stats">
          <div class="fuel-stat-item">
            <span>FUEL TRANSACTIONS</span>
            <strong>342</strong>
          </div>
          <div class="fuel-stat-item">
            <span>TOTAL VOLUME</span>
            <strong style="color: #10b981;">1,250 <span>L</span></strong>
          </div>
          <div class="fuel-stat-item">
            <span>TOTAL COST</span>
            <strong style="color: #0ea5e9;">Rp14.8M</strong>
          </div>
        </div>

        <div class="fuel-dashboard-split">
          <div class="fuel-sidebar">
            <h3 class="fuel-sidebar-title">Informasi yang Direkam:</h3>
            <ul class="fuel-list">
              <li>Volume konsumsi terbaru</li>
              <li>Riwayat transaksi di SPBU</li>
              <li>Akumulasi biaya bahan bakar mingguan</li>
              <li>Kalkulasi efisiensi unit Km/L</li>
              <li>Identifikasi armada yang sedang ditinjau</li>
            </ul>
          </div>
          
          <div class="fuel-visual-right">
             <div class="browser-mockup">
                <div class="browser-dots"><span></span><span></span><span></span></div>
                <div class="browser-url">fleetsumo.com/app/fuel</div>
             </div>
             <!-- In the visual we construct a miniature simple HTML table chart representation corresponding to the prompt request -->
             <div class="fuel-html-mockup-content">
                <div class="table-header">
                  <div>Vehicle</div>
                  <div>Date</div>
                  <div>Volume</div>
                  <div>Status</div>
                </div>
                <div class="table-row">
                  <div><strong>Log-054</strong></div>
                  <div>Oct 02, 10:15</div>
                  <div>80 L</div>
                  <div class="stat-badge success">Verified</div>
                </div>
                <div class="table-row">
                  <div><strong>Trk-991</strong></div>
                  <div>Oct 02, 09:30</div>
                  <div>210 L</div>
                  <div class="stat-badge success">Verified</div>
                </div>
                <div class="table-row">
                  <div><strong>Van-205</strong></div>
                  <div>Oct 01, 16:45</div>
                  <div>45 L</div>
                  <div class="stat-badge warning">Pending</div>
                </div>
                <div class="table-row">
                  <div><strong>Log-012</strong></div>
                  <div>Oct 01, 14:10</div>
                  <div>75 L</div>
                  <div class="stat-badge success">Verified</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel/fuel-monitoring.css" scoped></style>
