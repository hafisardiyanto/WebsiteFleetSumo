<template>
  <section class="cost-cycle-wrapper">
    <div class="cost-cycle-container">
      <div class="cost-cycle-header" data-aos="fade-up">
        <h2 class="cost-cycle-title">Dari Pengajuan hingga Realisasi Biaya</h2>
        <p class="cost-cycle-subtitle">
          Alur yang menunjukkan bagaimana sistem FleetSumo bekerja menata kebutuhan operasional.
        </p>
      </div>

      <div class="cost-sg-timeline" data-aos="fade-up" data-aos-delay="100">
        <!-- 1 -->
        <div class="cc-step">
          <div class="cc-icon">💰</div>
          <h4 class="cc-title">Kebutuhan Biaya</h4>
          <p class="cc-desc">Kebutuhan biaya muncul dari aktivitas operasional.</p>
        </div>
        <div class="cc-arrow"></div>

        <!-- 2 -->
        <div class="cc-step">
          <div class="cc-icon">📝</div>
          <h4 class="cc-title">Pengajuan</h4>
          <p class="cc-desc">Diajukan melalui proses yang telah ditentukan.</p>
        </div>
        <div class="cc-arrow"></div>

        <!-- 3 -->
        <div class="cc-step">
          <div class="cc-icon">📊</div>
          <h4 class="cc-title">Estimasi Biaya</h4>
          <p class="cc-desc">Informasi dipersiapkan sebelum aktivitas direalisasikan.</p>
        </div>
        <div class="cc-arrow"></div>

        <!-- 4 -->
        <div class="cc-step">
          <div class="cc-icon">✅</div>
          <h4 class="cc-title">Approval</h4>
          <p class="cc-desc">Persetujuan sesuSistem workflow internal perusahaan.</p>
        </div>
        
        <!-- Next row breaker for responsive/aesthetics if needed, but in flex it wraps -->
        <div class="cc-arrow"></div>

        <!-- 5 -->
        <div class="cc-step">
          <div class="cc-icon">💳</div>
          <h4 class="cc-title">Realisasi</h4>
          <p class="cc-desc">Biaya yang benar-benar terjadi dicatat ke sistem.</p>
        </div>
        <div class="cc-arrow"></div>

        <!-- 6 -->
        <div class="cc-step">
          <div class="cc-icon">🗃️</div>
          <h4 class="cc-title">Pencatatan</h4>
          <p class="cc-desc">Aman tersimpan sebagSistem log informasi operasional.</p>
        </div>
        <div class="cc-arrow"></div>

        <!-- 7 -->
        <div class="cc-step">
          <div class="cc-icon">📈</div>
          <h4 class="cc-title">Monitoring</h4>
          <p class="cc-desc">Data diolah untuk memantau alokasi biaya nyata.</p>
        </div>
        <div class="cc-arrow"></div>

        <!-- 8 -->
        <div class="cc-step">
          <div class="cc-icon">📄</div>
          <h4 class="cc-title">Laporan</h4>
          <p class="cc-desc">Informasi matang untuk bahan evaluasi bisnis.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/cost/cost-cycle.css" scoped></style>
