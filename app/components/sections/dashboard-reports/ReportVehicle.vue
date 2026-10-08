<template>
  <section class="report-vehicle-wrapper">
    <div class="report-vehicle-container">
      <div class="rvhc-header" data-aos="fade-up">
        <h2 class="rvhc-title">Pahami Biaya dan Kondisi Kendaraan melalui Laporan</h2>
        <p class="rvhc-subtitle">Laporan kendaraan menyajikan informasi biaya kendaraan secara lebih terstruktur sehingga pengguna dapat melihat total biaya, perkembangan biaya, dan kendaraan dengan biaya tertinggi.</p>
      </div>

      <div class="rvhc-layout">
         
         <div class="rvhc-left" data-aos="fade-right" data-aos-delay="100">
             <div class="rvhc-point">
                 <h4>Total Kendaraan</h4>
                 <p>Melihat jumlah kendaraan yang tercatat dalam laporan.</p>
             </div>
             <div class="rvhc-point">
                 <h4>Total Biaya Kendaraan</h4>
                 <p>Melihat total biaya yang berkaitan dengan kendaraan.</p>
             </div>
             <div class="rvhc-point">
                 <h4>Grafik Biaya Setiap Bulan</h4>
                 <p>Melihat perkembangan biaya kendaraan berdasarkan periode.</p>
             </div>
             <div class="rvhc-point">
                 <h4>Kendaraan dengan Biaya Tertinggi</h4>
                 <p>Melihat kendaraan dengan biaya yang paling tinggi.</p>
             </div>
             <div class="rvhc-point">
                 <h4>Seluruh Kendaraan</h4>
                 <p>Melihat informasi biaya seluruh kendaraan yang tersedia dalam laporan.</p>
             </div>
         </div>

         <div class="rvhc-right" data-aos="fade-left" data-aos-delay="200">
             <div class="rvhc-mockup">
                 <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="Laporan Kendaraan FleetSumo" class="rvhc-img" />
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.report-vehicle-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.report-vehicle-container {
  max-width: 1200px;
  width: 100%;
}
.rvhc-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rvhc-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.rvhc-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.rvhc-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .rvhc-layout {
    grid-template-columns: 2fr 3fr;
  }
}
.rvhc-mockup {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.rvhc-img {
  width: 100%;
  height: auto;
  display: block;
}

.rvhc-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.rvhc-point {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}
.rvhc-point h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.rvhc-point p {
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}
</style>
