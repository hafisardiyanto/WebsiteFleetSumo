<template>
  <section class="report-vehicle-wrapper">
    <div class="report-vehicle-container">
      
      <!-- Section 09: Vehicle Report Dashboard -->
      <div class="rv-layout">
        
        <!-- Left details -->
        <div class="rv-details" data-aos="fade-right">
            <span class="rv-label">VEHICLE REPORTING</span>
            <h2 class="rv-title">Analisis Biaya Kendaraan Berdasarkan Data yang Tersedia</h2>
            <p class="rv-subtitle">FleetSumo menyediakan laporan kendaraan yang membantu perusahaan melihat informasi jumlah kendaraan dan biaya berdasarkan periode serta kendaraan.</p>
            
            <div class="rv-points">
                <div class="rv-point">
                    <h4>Total Kendaraan</h4>
                    <p>Melihat jumlah kendaraan yang tercatat dalam laporan.</p>
                </div>
                <div class="rv-point">
                    <h4>Total Biaya</h4>
                    <p>Melihat total biaya kendaraan berdasarkan data laporan.</p>
                </div>
                <div class="rv-point">
                    <h4>Grafik Biaya Bulanan</h4>
                    <p>Melihat grafik biaya berdasarkan periode bulanan.</p>
                </div>
                <div class="rv-point">
                    <h4>Biaya Tertinggi</h4>
                    <p>Melihat kendaraan dengan nilai biaya tertinggi berdasarkan laporan.</p>
                </div>
            </div>
        </div>

        <!-- Right Visual (LaporanKendaraan.png real proof) -->
        <div class="rv-visual" data-aos="fade-left" data-aos-delay="200">
            <div class="rv-mockup">
                <img src="/LaporanKendaraan.png" alt="FleetSumo Laporan Kendaraan Real" class="rv-img" />
            </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring-reporting/report-vehicle.css" scoped></style>
