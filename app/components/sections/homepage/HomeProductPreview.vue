<template>
  <section class="home-product-wrapper">
    <div class="home-product-container">
      <div class="product-header" data-aos="fade-up">
        <h2 class="product-title">Lihat FleetSumo dalam Aksi</h2>
        <p class="product-subtitle">Pantau informasi kendaraan, aktivitas maintenance, biaya, dan data operasional armada dalam satu tampilan.</p>
      </div>

      <div class="product-layout">
        <!-- 📸 Screenshot asli Dashboard FleetSumo -->
        <div class="product-visual" data-aos="fade-right" data-aos-delay="100">
           <div class="pv-mockup">
              <!-- Placeholder for LaporanKendaraan.png (per user notes, used here as the primary screenshot) -->
              <img src="/LaporanKendaraan.png" alt="FleetSumo Dashboard Screenshot" class="pv-img" />
              <!-- Decorative elements framing the screenshot -->
              <div class="pv-dot d1"></div>
              <div class="pv-dot d2"></div>
              <div class="pv-dot d3"></div>
           </div>
        </div>

        <div class="product-details" data-aos="fade-left" data-aos-delay="200">
           
           <div class="pd-item">
              <div class="pd-icon">🚚</div>
              <div class="pd-text">
                 <h4>Kendaraan</h4>
                 <p>Total dan status unit armada.</p>
              </div>
           </div>

           <div class="pd-item">
              <div class="pd-icon">🔧</div>
              <div class="pd-text">
                 <h4>Maintenance</h4>
                 <p>Aktivitas dan status antrean perawatan.</p>
              </div>
           </div>

           <div class="pd-item">
              <div class="pd-icon">💰</div>
              <div class="pd-text">
                 <h4>Biaya</h4>
                 <p>Informasi alokasi & serapan biaya kendaraan.</p>
              </div>
           </div>

           <div class="pd-item">
              <div class="pd-icon">📈</div>
              <div class="pd-text">
                 <h4>Reporting</h4>
                 <p>Informasi valid untuk evaluasi manajemen.</p>
              </div>
           </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/homepage/home-product.css" scoped></style>
