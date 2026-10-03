<template>
  <section class="mon-report-vehicle-wrapper">
    <div class="mon-report-vehicle-container">
      <div class="mon-report-vehicle-header" data-aos="fade-up">
        <h2 class="mon-report-vehicle-title">Pahami Biaya Kendaraan dengan Data Terstruktur</h2>
        <p class="mon-report-vehicle-subtitle">
          FleetSumo menyajikan informasi biaya kendaraan dalam satu laporan rapi sehingga perusahaan lebih mudah memonitor tren, mencari biaya operasional termahal, dan menyaring daftar kendaraan aktif.
        </p>
      </div>

      <!-- High-Fidelity Mockup (Vehicle Report specific) -->
      <div class="report-mockup-ui" data-aos="zoom-in" data-aos-delay="100">
        
        <div class="rm-header">
           <div class="rm-dots"><span></span><span></span><span></span></div>
           <p>Report: Biaya Kendaraan Bulanan</p>
        </div>

        <div class="rm-body">
           <!-- Top row -->
           <div class="rm-top-metrics">
              <div class="rm-metric highlight-box">
                 <span class="rm-lbl">Total Kendaraan</span>
                 <strong>129 <span>Total Unit Aktif</span></strong>
              </div>
              <div class="rm-metric">
                 <span class="rm-lbl">Total Biaya (Keseluruhan)</span>
                 <strong class="cost-stat">Rp 102.500.000</strong>
              </div>
           </div>

           <!-- Mid row -->
           <div class="rm-mid-layout">
              <!-- Left Chart -->
              <div class="rm-chart-panel">
                 <div class="panel-head">
                    <h5>Grafik Biaya Bulanan</h5>
                 </div>
                 
                 <div class="rm-bar-chart">
                    <!-- CSS Bars representing months -->
                    <div class="rm-bar-col"><div class="rm-bar-fill" style="height: 40%"></div><span>Jul</span></div>
                    <div class="rm-bar-col"><div class="rm-bar-fill" style="height: 70%"></div><span>Ags</span></div>
                    <div class="rm-bar-col"><div class="rm-bar-fill peak" style="height: 100%"></div><span>Sep</span></div>
                    <div class="rm-bar-col"><div class="rm-bar-fill" style="height: 50%"></div><span>Okt</span></div>
                 </div>
              </div>

              <!-- Right Rank -->
              <div class="rm-rank-panel">
                 <div class="panel-head">
                    <h5>Kendaraan Termahal</h5>
                 </div>
                 
                 <ol class="rm-rank-list">
                    <li>
                       <span class="unit-id">B-192-KXL</span>
                       <span class="unit-cost">Rp 12.5M</span>
                    </li>
                    <li>
                       <span class="unit-id">D-8821-XX</span>
                       <span class="unit-cost">Rp 9.1M</span>
                    </li>
                    <li>
                       <span class="unit-id">H-189-ZA</span>
                       <span class="unit-cost">Rp 7.8M</span>
                    </li>
                 </ol>
              </div>
           </div>

           <!-- Bottom row -->
           <div class="rm-bottom-list">
              <div class="panel-head">
                 <h5>Seluruh Kendaraan Aktif</h5>
              </div>
              <table class="rm-table">
                 <thead>
                    <tr>
                       <th>Identitas Kendaraan</th>
                       <th>Biaya Bulan Ini</th>
                       <th>Status</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td><strong>B-192-KXL</strong> (HINO 500)</td>
                       <td>Rp 12,500,000</td>
                       <td><span class="badg active">Beroperasi</span></td>
                    </tr>
                    <tr>
                       <td><strong>D-8821-XX</strong> (FUSO)</td>
                       <td>Rp 9,100,000</td>
                       <td><span class="badg maint">Maintenance</span></td>
                    </tr>
                 </tbody>
              </table>
           </div>
           
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring/mon-report-vehicle.css" scoped></style>
