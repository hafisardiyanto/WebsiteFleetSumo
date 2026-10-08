<template>
  <section class="tyre-monitoring-wrapper">
    <div class="tyre-monitoring-container">
      <div class="tmo-header" data-aos="fade-up">
        <h2 class="tmo-title">Pantau Informasi Ban Armada dengan Lebih Mudah</h2>
        <p class="tmo-subtitle">Data ban yang tercatat dalam sistem membantu perusahaan melihat informasi penggunaan, posisi, kondisi, dan riwayat ban sebagSistem bagian dari monitoring operasional armada.</p>
      </div>

      <div class="tmo-layout">
         
         <div class="tmo-visual" data-aos="fade-right" data-aos-delay="100">
             <div class="tmo-mockup">
                 <!-- Using placeholder combination of List/Detail since specific Tampilan Utama doesn't exist yet -->
                 <img src="/assets/solusi/tyre-management/tyre-detail-hero.jpg" alt="Monitoring Ban" class="tmo-img" />
             </div>
         </div>

         <div class="tmo-content" data-aos="fade-left" data-aos-delay="200">
             <div class="tmo-card">
                 <h4>Inspeksi Kedalaman Tapak (Tread Depth)</h4>
                 <p>Input pengukuran alur ban sisa dalam satuan milimeter (mm) secara berkala.</p>
             </div>
             <div class="tmo-card">
                 <h4>Inspeksi Kerusakan Fisik</h4>
                 <p>Catat observasi keausan asimetris, sobek, retak pecah, atau benjol terdeteksi.</p>
             </div>
             <div class="tmo-card">
                 <h4>Monitoring Tekanan Angin Sehat</h4>
                 <p>Update PSI tekanan angin harian untuk menjaga konsumsi BBM tidak boros.</p>
             </div>
             <div class="tmo-card">
                 <h4>Alarm Batas Odometer Afkir</h4>
                 <p>Notifikasi sistem otomatis saat batas KM ambang usia aman tercapai.</p>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-monitoring-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.tyre-monitoring-container {
  max-width: 1200px;
  width: 100%;
}
.tmo-header {
  text-align: center;
  margin-bottom: 4rem;
}
.tmo-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.tmo-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.tmo-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .tmo-layout {
    grid-template-columns: 1fr 1fr;
  }
}
.tmo-mockup {
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.tmo-img {
  width: 100%;
  height: auto;
  display: block;
}
.tmo-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .tmo-content {
    grid-template-columns: 1fr 1fr;
  }
}
.tmo-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.tmo-card h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.tmo-card p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
