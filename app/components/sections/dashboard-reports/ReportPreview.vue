<template>
  <section class="report-preview-wrapper">
    <div class="report-preview-container">
      <div class="rpv-header" data-aos="fade-up">
        <h2 class="rpv-title">Lihat Dashboard dan Laporan FleetSumo</h2>
      </div>

      <div class="rpv-gallery">
         <div class="rpv-card" data-aos="fade-up" data-aos-delay="100">
             <div class="rpv-img-wrapper">
                 <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="Dashboard Utama FleetSumo" class="rpv-img" />
             </div>
             <div class="rpv-info">
                 <h3>01 — Dashboard FleetSumo</h3>
             </div>
         </div>

         <div class="rpv-card" data-aos="fade-up" data-aos-delay="150">
             <div class="rpv-img-wrapper">
                 <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="Laporan Kendaraan FleetSumo" class="rpv-img" />
             </div>
             <div class="rpv-info">
                 <h3>02 — Laporan Kendaraan</h3>
             </div>
         </div>

         <div class="rpv-card" data-aos="fade-up" data-aos-delay="200">
             <div class="rpv-img-wrapper">
                 <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="Report Maintenance" class="rpv-img" />
             </div>
             <div class="rpv-info">
                 <h3>03 — Dashboard/Report Maintenance</h3>
             </div>
         </div>
         
         <div class="rpv-card" data-aos="fade-up" data-aos-delay="250">
             <div class="rpv-img-wrapper">
                 <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="Report Fuel" class="rpv-img" />
             </div>
             <div class="rpv-info">
                 <h3>04 — Dashboard/Report Fuel</h3>
             </div>
         </div>

         <div class="rpv-card" data-aos="fade-up" data-aos-delay="300">
             <div class="rpv-img-wrapper">
                 <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="Report Tyre" class="rpv-img" />
             </div>
             <div class="rpv-info">
                 <h3>05 — Dashboard/Report Tyre</h3>
             </div>
         </div>

         <div class="rpv-card" data-aos="fade-up" data-aos-delay="350">
             <div class="rpv-img-wrapper">
                 <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="Monitoring Cost" class="rpv-img" />
             </div>
             <div class="rpv-info">
                 <h3>06 — Report/Monitoring Cost</h3>
             </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.report-preview-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.report-preview-container {
  max-width: 1200px;
  width: 100%;
}
.rpv-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rpv-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.rpv-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.rpv-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 350px;
  transition: transform 0.3s ease;
}
.rpv-card:hover {
  transform: translateY(-5px);
}
.rpv-img-wrapper {
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
}
.rpv-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.rpv-card:hover .rpv-img {
  transform: scale(1.05);
}
.rpv-info {
  padding: 1.5rem;
  text-align: center;
}
.rpv-info h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}
</style>
