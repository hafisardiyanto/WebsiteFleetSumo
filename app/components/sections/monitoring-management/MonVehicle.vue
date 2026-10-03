<template>
  <section class="mon-vehicle-wrapper">
    <div class="mon-vehicle-container">
      <div class="mon-vehicle-header" data-aos="fade-up">
        <h2 class="mon-vehicle-title">Monitoring Info & Kondisi Setiap Kendaraan</h2>
        <p class="mon-vehicle-subtitle">
          Monitoring tingkat makro penting, tetapi membedah profil identitas spesifik kendaraan akan menyeimbangkan keakuratan audit data.
        </p>
      </div>

      <!-- Vehicle Profile Mockup UI -->
      <div class="mon-profile-mockup" data-aos="zoom-in" data-aos-delay="100">
        
        <div class="mp-head">
          <div class="mp-photo-placeholder">
             📸
          </div>
          <div class="mp-top-info">
             <h3>HINO 500 FL 260 JW</h3>
             <span class="mp-plate">B 9183 KXL</span>
             <div class="mp-status-tag">Status: <strong>Aktif Beroperasi</strong></div>
          </div>
        </div>

        <div class="mp-body">
           <!-- Activity Grid Diagram -->
           <div class="mp-activities">
              
              <div class="act-col">
                 <div class="act-box color-cost">
                    <h4>Data Biaya</h4>
                    <p>Total Cost: Rp 12.5M</p>
                 </div>
                 <div class="act-arrow">↓</div>
                 <div class="act-log">Log Transaksi</div>
              </div>

              <div class="act-col">
                 <div class="act-box color-maint">
                    <h4>Maintenance</h4>
                    <p>Terakhir: 3 Hari Lalu</p>
                 </div>
                 <div class="act-arrow">↓</div>
                 <div class="act-log">Log Perbaikan</div>
              </div>

              <div class="act-col">
                 <div class="act-box color-fuel">
                    <h4>BBM</h4>
                    <p>Konsumsi: 450 L</p>
                 </div>
                 <div class="act-arrow">↓</div>
                 <div class="act-log">Log Refuel</div>
              </div>

           </div>

           <div class="mp-history-bar">
              <span class="hist-icon">⏳</span>
              <p>Menampilkan Penuh Riwayat Kendaraan Sejak <strong>12 Agustus 2026</strong></p>
           </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring/mon-vehicle.css" scoped></style>
