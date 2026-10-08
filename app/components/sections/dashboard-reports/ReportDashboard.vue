<template>
  <section class="report-dash-wrapper">
    <div class="report-dash-container">
      <div class="rps-header" data-aos="fade-up">
        <h2 class="rps-title">Lihat Kondisi Operasional Armada dalam Satu Tampilan</h2>
        <p class="rps-subtitle">Dashboard membantu pengguna melihat informasi operasional armada secara lebih ringkas sehingga data dari berbagSistem aktivitas dapat dipantau dengan lebih mudah.</p>
      </div>

      <div class="rps-layout">
         
         <div class="rps-visual" data-aos="fade-up" data-aos-delay="100">
             <div class="rps-mockup">
                 <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="Dashboard FleetSumo" class="rps-img" />
             </div>
         </div>

         <div class="rps-highlights" data-aos="fade-up" data-aos-delay="200">
             <div class="rps-hl">
                 <span class="hl-dot"></span>
                 <h4>Informasi Armada</h4>
             </div>
             <div class="rps-hl">
                 <span class="hl-dot"></span>
                 <h4>Aktivitas Operasional</h4>
             </div>
             <div class="rps-hl">
                 <span class="hl-dot"></span>
                 <h4>Informasi Maintenance</h4>
             </div>
             <div class="rps-hl">
                 <span class="hl-dot"></span>
                 <h4>Informasi BBM</h4>
             </div>
             <div class="rps-hl">
                 <span class="hl-dot"></span>
                 <h4>Informasi Biaya</h4>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.report-dash-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.report-dash-container {
  max-width: 1200px;
  width: 100%;
}
.rps-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rps-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.rps-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.rps-layout {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}
.rps-mockup {
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
.rps-img {
  width: 100%;
  height: auto;
  display: block;
}
.rps-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1rem;
}
.rps-hl {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #ffffff;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.hl-dot {
  width: 10px;
  height: 10px;
  background: #3b82f6;
  border-radius: 50%;
  display: inline-block;
}
.rps-hl h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin: 0;
}
</style>
