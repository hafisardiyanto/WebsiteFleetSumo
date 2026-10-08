<template>
  <section class="report-types-wrapper">
    <div class="report-types-container">
      <div class="rpt-header" data-aos="fade-up">
        <h2 class="rpt-title">Informasi yang Membantu Monitoring Armada</h2>
      </div>

      <div class="rpt-grid">
         <div class="rpt-item" data-aos="fade-up" data-aos-delay="100">
            <div class="rpt-icon">🚐</div>
            <div class="rpt-content">
               <h3>Fleet Report</h3>
               <p>Informasi mengenSistem kendaraan dan armada.</p>
            </div>
         </div>

         <div class="rpt-item" data-aos="fade-up" data-aos-delay="150">
            <div class="rpt-icon">🔧</div>
            <div class="rpt-content">
               <h3>Maintenance Report</h3>
               <p>Informasi aktivitas dan riwayat maintenance.</p>
            </div>
         </div>

         <div class="rpt-item" data-aos="fade-up" data-aos-delay="200">
            <div class="rpt-icon">⛽</div>
            <div class="rpt-content">
               <h3>Fuel Report</h3>
               <p>Informasi aktivitas dan penggunaan BBM.</p>
            </div>
         </div>

         <div class="rpt-item" data-aos="fade-up" data-aos-delay="250">
            <div class="rpt-icon">⚙️</div>
            <div class="rpt-content">
               <h3>Tyre Report</h3>
               <p>Informasi penggunaan dan riwayat ban.</p>
            </div>
         </div>

         <div class="rpt-item" data-aos="fade-up" data-aos-delay="300">
            <div class="rpt-icon">💰</div>
            <div class="rpt-content">
               <h3>Cost Report</h3>
               <p>Informasi biaya kendaraan dan aktivitas operasional.</p>
            </div>
         </div>

         <div class="rpt-item" data-aos="fade-up" data-aos-delay="350">
            <div class="rpt-icon">📈</div>
            <div class="rpt-content">
               <h3>Operational Report</h3>
               <p>Informasi aktivitas operasional yang tersedia dalam sistem.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.report-types-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.report-types-container {
  max-width: 1200px;
  width: 100%;
}
.rpt-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rpt-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.rpt-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .rpt-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .rpt-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.rpt-item {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.rpt-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: #cbd5e1;
}
.rpt-icon {
  font-size: 2.5rem;
  line-height: 1;
}
.rpt-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.5rem;
}
.rpt-content p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}
</style>
