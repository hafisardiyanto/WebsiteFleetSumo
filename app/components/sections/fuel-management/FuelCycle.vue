<template>
  <section class="fuel-cycle-wrapper">
    <div class="fuel-cycle-container">
      <div class="fuel-cycle-header" data-aos="fade-up">
        <h2 class="fuel-cycle-title">Alur Konsumsi Dari SPBU Hingga Laporan Biaya</h2>
        <p class="fuel-cycle-subtitle">
          FleetSumo merangkai perjalanan setiap liter bahan bakar yang masuk ke dalam tangki perlahan menjadi insight efisiensi finansial.
        </p>
      </div>

      <!-- 6-Step Interactive Timeline -->
      <div class="cycle-timeline-grid">
        
        <!-- Row 1 -->
        <div class="cycle-item item-1" data-aos="fade-right" data-aos-delay="100">
          <div class="cycle-number">01</div>
          <h3 class="cycle-name">Odometer</h3>
          <p class="cycle-desc">Pencatatan KM/jarak berkala harian.</p>
        </div>
        <div class="cycle-connector conn-right"></div>

        <div class="cycle-item item-2" data-aos="fade-right" data-aos-delay="200">
          <div class="cycle-number">02</div>
          <h3 class="cycle-name">Transaksi</h3>
          <p class="cycle-desc">Pengisian BBM dan unggah struk di SPBU.</p>
        </div>
        <div class="cycle-connector conn-right"></div>

        <div class="cycle-item item-3" data-aos="fade-right" data-aos-delay="300">
          <div class="cycle-number">03</div>
          <h3 class="cycle-name">Validasi</h3>
          <p class="cycle-desc">Pencocokan anggaran kas dengan bukti struk.</p>
        </div>

        <!-- Vertical Jump (Desktop) -->
        <div class="cycle-connector conn-down"></div>

        <!-- Row 2 (Reversed Order in CSS grid for snake loop) -->
        <div class="cycle-item item-4" data-aos="fade-left" data-aos-delay="400">
          <div class="cycle-number">04</div>
          <h3 class="cycle-name">Kalkulasi</h3>
          <p class="cycle-desc">Sistem menghitung rasio Konsumsi (KM/Liter).</p>
        </div>
        <div class="cycle-connector conn-left"></div>

        <div class="cycle-item item-5" data-aos="fade-left" data-aos-delay="500">
          <div class="cycle-number">05</div>
          <h3 class="cycle-name">Evaluasi</h3>
          <p class="cycle-desc">Tanda peringatan (alert) untuk pemborosan.</p>
        </div>
        <div class="cycle-connector conn-left"></div>

        <div class="cycle-item item-6" data-aos="fade-left" data-aos-delay="600">
          <div class="cycle-number">06</div>
          <h3 class="cycle-name">Riwayat</h3>
          <p class="cycle-desc">Log analitik finansial & efisiensi mesin armada.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel/fuel-cycle.css" scoped></style>
