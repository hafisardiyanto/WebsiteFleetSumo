<template>
  <section class="maint-cycle-wrapper">
    <div class="maint-cycle-container">
      <div class="maint-cycle-header" data-aos="fade-up">
        <h2 class="maint-cycle-title">Dari Temuan Kendaraan hingga Maintenance Selesai</h2>
        <p class="maint-cycle-subtitle">
          FleetSumo membantu menstrukturkan proses maintenance agar setiap temuan dan kebutuhan perawatan dapat ditindaklanjuti melalui alur yang jelas.
        </p>
      </div>

      <!-- 8-Step Interactive Timeline -->
      <div class="cycle-timeline-grid">
        
        <!-- Row 1 -->
        <div class="cycle-item item-1" data-aos="fade-right" data-aos-delay="100">
          <div class="cycle-number">01</div>
          <h3 class="cycle-name">Inspeksi</h3>
          <p class="cycle-desc">Kondisi kendaraan diperiksa dan temuan dicatat.</p>
        </div>
        <div class="cycle-connector conn-right"></div>

        <div class="cycle-item item-2" data-aos="fade-right" data-aos-delay="200">
          <div class="cycle-number">02</div>
          <h3 class="cycle-name">Temuan</h3>
          <p class="cycle-desc">Kerusakan atau kebutuhan perbaikan diidentifikasi.</p>
        </div>
        <div class="cycle-connector conn-right"></div>

        <div class="cycle-item item-3" data-aos="fade-right" data-aos-delay="300">
          <div class="cycle-number">03</div>
          <h3 class="cycle-name">Pengajuan</h3>
          <p class="cycle-desc">Kebutuhan diajukan berdasarkan temuan.</p>
        </div>
        <div class="cycle-connector conn-right"></div>

        <div class="cycle-item item-4" data-aos="fade-right" data-aos-delay="400">
          <div class="cycle-number">04</div>
          <h3 class="cycle-name">Estimasi</h3>
          <p class="cycle-desc">Kebutuhan material, jasa, dan biaya dipersiapkan.</p>
        </div>

        <!-- Vertical Jump (Logical block only visible in desktop layout via CSS grid) -->
        <div class="cycle-connector conn-down"></div>

        <!-- Row 2 (Reversed Order in HTML or CSS) -->
        <!-- In CSS grid we can physically place them right to left to represent the arrow return loop -->
        <div class="cycle-item item-5" data-aos="fade-left" data-aos-delay="500">
          <div class="cycle-number">05</div>
          <h3 class="cycle-name">Approval</h3>
          <p class="cycle-desc">Pengajuan diproses melalui alur persetujuan.</p>
        </div>

        <div class="cycle-item item-6" data-aos="fade-left" data-aos-delay="600">
          <div class="cycle-number">06</div>
          <h3 class="cycle-name">Maintenance</h3>
          <p class="cycle-desc">Pekerjaan dilakukan dan progres dicatat.</p>
        </div>
        <div class="cycle-connector conn-left"></div>

        <div class="cycle-item item-7" data-aos="fade-left" data-aos-delay="700">
          <div class="cycle-number">07</div>
          <h3 class="cycle-name">Realisasi</h3>
          <p class="cycle-desc">Hasil pekerjaan dan biaya aktual dicatat.</p>
        </div>
        <div class="cycle-connector conn-left"></div>

        <div class="cycle-item item-8" data-aos="fade-left" data-aos-delay="800">
          <div class="cycle-number">08</div>
          <h3 class="cycle-name">Riwayat</h3>
          <p class="cycle-desc">Seluruh aktivitas tersimpan sebagai riwayat unit.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance/maint-cycle.css" scoped></style>
