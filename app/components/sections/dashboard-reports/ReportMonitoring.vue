<template>
  <section class="report-monitoring-wrapper">
    <div class="report-monitoring-container">
      <div class="rm-header" data-aos="fade-up">
        <h2 class="rm-title">Pantau Informasi Armada dengan Lebih Mudah</h2>
        <p class="rm-subtitle">FleetSumo membantu pengguna mendapatkan gambaran informasi operasional melalui dashboard dan laporan yang berasal dari data aktivitas armada.</p>
      </div>

      <div class="rm-layout">
         
         <div class="rm-content" data-aos="fade-right" data-aos-delay="100">
             <div class="rm-item">
                 <h4>Informasi Armada</h4>
                 <p>Pantau informasi kendaraan dan kondisi armada.</p>
             </div>
             <div class="rm-item">
                 <h4>Aktivitas Maintenance</h4>
                 <p>Lihat informasi aktivitas perawatan kendaraan.</p>
             </div>
             <div class="rm-item">
                 <h4>Penggunaan BBM</h4>
                 <p>Pantau informasi aktivitas BBM yang tercatat.</p>
             </div>
             <div class="rm-item">
                 <h4>Informasi Ban</h4>
                 <p>Lihat informasi penggunaan dan riwayat ban.</p>
             </div>
             <div class="rm-item">
                 <h4>Biaya Kendaraan</h4>
                 <p>Pantau informasi biaya kendaraan.</p>
             </div>
             <div class="rm-item">
                 <h4>Laporan</h4>
                 <p>Gunakan laporan untuk melihat informasi operasional secara lebih terstruktur.</p>
             </div>
         </div>

         <div class="rm-visual" data-aos="fade-left" data-aos-delay="200">
             <div class="rm-mockup">
                 <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="Monitoring Dashboard FleetSumo" class="rm-img" />
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.report-monitoring-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.report-monitoring-container {
  max-width: 1200px;
  width: 100%;
}
.rm-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rm-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.rm-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}

.rm-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .rm-layout {
    grid-template-columns: 2fr 3fr;
  }
}

.rm-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.rm-item {
  background: #f8fafc;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
  transition: transform 0.3s ease;
}
.rm-item:hover {
  transform: translateX(10px);
}
.rm-item h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.25rem;
}
.rm-item p {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}

.rm-mockup {
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.rm-img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
