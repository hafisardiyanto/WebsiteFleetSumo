<template>
  <section class="cost-monitoring-wrapper">
    <div class="cost-monitoring-container">
      <div class="csm-header" data-aos="fade-up">
        <h2 class="csm-title">Pantau Biaya Armada dalam Satu Tampilan</h2>
        <p class="csm-subtitle">Informasi biaya yang tercatat dalam FleetSumo membantu perusahaan melihat total biaya, perkembangan biaya, dan biaya kendaraan sebagSistem bagian dari monitoring operasional armada.</p>
      </div>

      <div class="csm-layout">
         
         <div class="csm-visual" data-aos="fade-up" data-aos-delay="100">
             <div class="csm-mockup">
                 <img src="/assets/umum/backgrounds/hero-cost.jpg" alt="Monitoring Cost & Laporan Kendaraan" class="csm-img" />
             </div>
         </div>

         <div class="csm-content" data-aos="fade-up" data-aos-delay="200">
             <div class="csm-card">
                 <h4>Total Biaya Kendaraan</h4>
                 <p>Melihat informasi total biaya kendaraan.</p>
             </div>
             <div class="csm-card">
                 <h4>Perkembangan Biaya</h4>
                 <p>Melihat perubahan biaya dari waktu ke waktu melalui data yang tersedia.</p>
             </div>
             <div class="csm-card">
                 <h4>Kendaraan dengan Biaya Tertinggi</h4>
                 <p>Melihat kendaraan dengan biaya terbesar berdasarkan laporan.</p>
             </div>
             <div class="csm-card">
                 <h4>Informasi Seluruh Kendaraan</h4>
                 <p>Melihat informasi biaya kendaraan secara keseluruhan.</p>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-monitoring-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.cost-monitoring-container {
  max-width: 1200px;
  width: 100%;
}
.csm-header {
  text-align: center;
  margin-bottom: 4rem;
}
.csm-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.csm-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.csm-layout {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.csm-mockup {
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
  max-width: 1000px;
  margin: 0 auto;
}
.csm-img {
  width: 100%;
  height: auto;
  display: block;
}
.csm-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}
@media (min-width: 640px) {
  .csm-content {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .csm-content {
    grid-template-columns: repeat(4, 1fr);
  }
}
.csm-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  text-align: center;
}
.csm-card:hover {
  background: #fff;
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.csm-card h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.csm-card p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
