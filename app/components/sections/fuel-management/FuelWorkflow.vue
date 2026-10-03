<template>
  <section class="fuel-workflow-wrapper">
    <div class="fuel-workflow-container">
      <div class="fuel-workflow-header" data-aos="fade-up">
        <h2 class="fuel-workflow-title">Setiap Tetes Terhitung, Setiap Rupiah Terukur</h2>
      </div>

      <div class="fuel-workflow-layout">
        <!-- Text Flow Section -->
        <div class="workflow-steps" data-aos="fade-right" data-aos-delay="100">
          <div class="wf-step">
            <h3 class="wf-step-title">Pencatatan Odometer</h3>
            <p class="wf-step-desc">Sistem melacak jarak logis dari titik A ke titik B.</p>
          </div>

          <div class="wf-step">
            <h3 class="wf-step-title">Input Riwayat Struk</h3>
            <p class="wf-step-desc">Pengajuan dana BBM dipadatkan dengan resi bukti dari SPBU.</p>
          </div>

          <div class="wf-step">
            <h3 class="wf-step-title">Validasi Konsumsi</h3>
            <p class="wf-step-desc">Algoritma mendeteksi kecurangan rasio KM/Liter secara mandiri.</p>
          </div>

          <div class="wf-step">
            <h3 class="wf-step-title">Hasil Data Analitik</h3>
            <p class="wf-step-desc">Grafik langsung memproyeksikan perbandingan efisiensi dan kerugian harian armada ke dalam bentuk biaya.</p>
          </div>
        </div>

        <!-- Visual Section (using DashboardBBM.png) -->
        <div class="workflow-visual" data-aos="fade-left" data-aos-delay="200">
          <div class="workflow-mockup">
            <img src="/DashboardBBM.png" alt="Grafik Laporan Keuangan dan Dashboard BBM FleetSumo" class="workflow-img">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel/fuel-workflow.css" scoped></style>
