<template>
  <section class="tyre-monitoring-wrapper">
    <div class="tyre-monitoring-container">
      <div class="tyre-monitoring-header" data-aos="fade-up">
        <h2 class="tyre-monitoring-title">Pantau Informasi Ban dalam Satu Tampilan</h2>
        <p class="tyre-monitoring-subtitle">
          Data ban yang tersimpan dalam sistem dapat digunakan untuk membantu tim memahami kondisi dan aktivitas ban secara lebih terstruktur.
        </p>
      </div>

      <div class="tyre-monitoring-mockup" data-aos="zoom-in" data-aos-delay="100">
        <!-- Mockup top bar -->
        <div class="mockup-bar">
          <div class="mockup-dots"><span></span><span></span><span></span></div>
          <div class="mockup-title">Tyre Management Dashboard</div>
        </div>

        <div class="mockup-body">
          <div class="mockup-stats-row">
            <div class="m-stat-card">
              <span class="m-stat-label">Total Ban</span>
              <span class="m-stat-val">340</span>
            </div>
            <div class="m-stat-card">
              <span class="m-stat-label">Ban Terpasang</span>
              <span class="m-stat-val highlight">215</span>
            </div>
            <div class="m-stat-card">
              <span class="m-stat-label">Ban Tersedia</span>
              <span class="m-stat-val">84</span>
            </div>
            <div class="m-stat-card">
              <span class="m-stat-label">Aktivitas Ban</span>
              <span class="m-stat-val warn">41</span>
            </div>
          </div>

          <div class="mockup-bottom-row">
             <div class="mockup-table">
               <div class="m-table-head">
                 <div>ID Ban</div>
                 <div>Kondisi (Tread)</div>
                 <div>Posisi</div>
                 <div>Riwayat Ban</div>
               </div>
               <div class="m-table-row">
                 <div><strong>#TYR-089</strong></div>
                 <div>8.5 mm</div>
                 <div>Roda Depan Kanan</div>
                 <div><span class="m-badge">Terpasang Okt 1</span></div>
               </div>
               <div class="m-table-row">
                 <div><strong>#TYR-092</strong></div>
                 <div>3.1 mm (Kritis)</div>
                 <div>Roda Belakang Kiri</div>
                 <div><span class="m-badge warn">Warning (32.000 KM)</span></div>
               </div>
               <div class="m-table-row">
                 <div><strong>#TYR-011</strong></div>
                 <div>Vulkanisir Baru</div>
                 <div>Gudang (Tersedia)</div>
                 <div><span class="m-badge normal">Dilepas Sep 20</span></div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/tyre/tyre-monitoring.css" scoped></style>
