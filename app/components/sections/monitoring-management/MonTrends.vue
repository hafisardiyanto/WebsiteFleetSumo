<template>
  <section class="mon-trends-wrapper">
    <div class="mon-trends-container">
      <div class="mon-trends-header" data-aos="fade-up">
        <h2 class="mon-trends-title">Monitoring Tren Operasional Waktu ke Waktu</h2>
        <p class="mon-trends-subtitle">
          Data operasional tidak hanya penting untuk satu waktu. Dengan informasi berdasarkan periode, perusahaan dapat melihat bagaimana armada berkembang secara dinamis.
        </p>
      </div>

      <div class="mon-trends-grid" data-aos="fade-up" data-aos-delay="100">
        
        <!-- Trend 1 -->
        <div class="trend-card">
           <div class="trend-icon">📈</div>
           <div class="trend-info">
              <h3>Biaya Bulanan</h3>
              <p>Melihat perkembangan biaya kendaraan setiap bulan.</p>
           </div>
        </div>

        <!-- Trend 2 -->
        <div class="trend-card">
           <div class="trend-icon">🔧</div>
           <div class="trend-info">
              <h3>Aktivitas Maintenance</h3>
              <p>Melihat aktivitas perbaikan berdasar hitungan periode.</p>
           </div>
        </div>

        <!-- Trend 3 -->
        <div class="trend-card">
           <div class="trend-icon">⛽</div>
           <div class="trend-info">
              <h3>Penggunaan BBM</h3>
              <p>Menganalisis fluktuasi serapan konsumsi BBM logistik.</p>
           </div>
        </div>

        <!-- Trend 4 -->
        <div class="trend-card">
           <div class="trend-icon">🚚</div>
           <div class="trend-info">
              <h3>Aktivitas Armada</h3>
              <p>Melacak rute atau intensitas operasional truk aktif.</p>
           </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring/mon-trends.css" scoped></style>
