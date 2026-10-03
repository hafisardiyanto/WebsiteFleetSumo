<template>
  <section class="maint-problems-wrapper">
    <div class="maint-problems-container">
      <div class="maint-problems-header" data-aos="fade-up">
        <h2 class="maint-problems-title">Maintenance yang Tidak Terencana Dapat Mengganggu Operasional</h2>
        <p class="maint-problems-subtitle">
          Ketika jadwal perawatan, inspeksi, temuan, dan riwayat perbaikan tidak dikelola dengan baik, tim dapat kesulitan mengetahui kondisi kendaraan dan menentukan tindakan yang perlu dilakukan.
        </p>
      </div>

      <div class="maint-problems-grid">
        <!-- Problem 1 -->
        <div class="maint-problem-card" data-aos="fade-up" data-aos-delay="100">
          <div class="maint-problem-icon">🗓️</div>
          <h3 class="maint-problem-card-title">Maintenance Terlambat</h3>
          <p class="maint-problem-card-desc">Jadwal perawatan yang tidak terpantau dapat menyebabkan kendaraan melewati waktu perawatan yang seharusnya.</p>
        </div>

        <!-- Problem 2 -->
        <div class="maint-problem-card" data-aos="fade-up" data-aos-delay="200">
          <div class="maint-problem-icon">⚠️</div>
          <h3 class="maint-problem-card-title">Temuan Sulit Ditindaklanjuti</h3>
          <p class="maint-problem-card-desc">Hasil inspeksi atau keluhan kendaraan perlu diteruskan menjadi tindakan yang jelas.</p>
        </div>

        <!-- Problem 3 -->
        <div class="maint-problem-card" data-aos="fade-up" data-aos-delay="300">
          <div class="maint-problem-icon">📉</div>
          <h3 class="maint-problem-card-title">Riwayat Perbaikan Tersebar</h3>
          <p class="maint-problem-card-desc">Riwayat servis dan perbaikan yang tidak terdokumentasi dengan baik menyulitkan penelusuran kondisi kendaraan.</p>
        </div>

        <!-- Problem 4 -->
        <div class="maint-problem-card" data-aos="fade-up" data-aos-delay="400">
          <div class="maint-problem-icon">💸</div>
          <h3 class="maint-problem-card-title">Biaya Sulit Dipantau</h3>
          <p class="maint-problem-card-desc">Biaya jasa, sparepart, dan kebutuhan perbaikan perlu dicatat agar pengeluaran lebih mudah dikontrol.</p>
        </div>

        <!-- Problem 5 -->
        <div class="maint-problem-card featured-problem-card" data-aos="fade-up" data-aos-delay="500">
          <div class="maint-problem-icon">⏱️</div>
          <h3 class="maint-problem-card-title">Downtime Sulit Dipantau</h3>
          <p class="maint-problem-card-desc">Kendaraan yang sedang mengalami perbaikan perlu diketahui statusnya agar tim dapat memantau ketersediaan armada.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance/maint-problems.css" scoped></style>
