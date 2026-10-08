<template>
  <section class="mon-filters-wrapper">
    <div class="mon-filters-container">
      <div class="mon-filters-header" data-aos="fade-up">
        <h2 class="mon-filters-title">Temukan Informasi Secara Cepat Melalui Filter Spesifik</h2>
        <p class="mon-filters-subtitle">
          Laporan yang baik tidak hanya menampilkan keseluruhan data armada, tetapi juga membantu pengguna menyaring data operasional berdasarkan parameter tertentu seperti periode, cabang/depot, maupun unit kendaraan.
        </p>
      </div>

      <!-- Filter Mockup UI CSS HTML -->
      <div class="mon-filter-mockup" data-aos="fade-up" data-aos-delay="100">
        <div class="filt-head">
           <span>🔍 Parameter Pencarian</span>
           <button class="filt-btn-clear">Reset</button>
        </div>
        
        <div class="filt-body">
           <div class="filt-group">
              <label>Periode Waktu</label>
              <div class="filt-input fake-select">September 2026 ▾</div>
           </div>
           
           <div class="filt-group">
              <label>Cabang</label>
              <div class="filt-input fake-select">Jakarta Utara ▾</div>
           </div>

           <div class="filt-group">
              <label>Identitas Kendaraan</label>
              <div class="filt-input fake-text">Cari Nomor Polisi...</div>
           </div>
           
           <div class="filt-group">
              <label>Kategori</label>
              <div class="filt-input fake-select">Maintenance ▾</div>
           </div>
           
           <div class="filt-group">
              <label>Status</label>
              <div class="filt-input fake-select">Terselesaikan ▾</div>
           </div>

           <div class="filt-actions">
              <button class="btn-search">Terapkan Filter</button>
           </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring/mon-filters.css" scoped></style>
