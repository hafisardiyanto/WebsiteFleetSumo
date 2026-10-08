<template>
  <section class="report-manage-wrapper">
    <div class="report-manage-container">
      <div class="rma-header" data-aos="fade-up">
        <h2 class="rma-title">Pantau BerbagSistem Informasi Armada dari Satu Sistem</h2>
      </div>

      <div class="rma-grid">
         <div class="rma-card" data-aos="fade-up" data-aos-delay="100">
            <div class="rma-icon">🚐</div>
            <h3>Fleet & Vehicle</h3>
            <p>Informasi kendaraan, status, dan data armada.</p>
         </div>

         <div class="rma-card" data-aos="fade-up" data-aos-delay="200">
            <div class="rma-icon">🔧</div>
            <h3>Maintenance</h3>
            <p>Informasi aktivitas dan riwayat maintenance kendaraan.</p>
         </div>

         <div class="rma-card" data-aos="fade-up" data-aos-delay="300">
            <div class="rma-icon">⛽</div>
            <h3>Fuel</h3>
            <p>Informasi aktivitas dan penggunaan BBM kendaraan.</p>
         </div>

         <div class="rma-card" data-aos="fade-up" data-aos-delay="400">
            <div class="rma-icon">⚙️</div>
            <h3>Tyre</h3>
            <p>Informasi ban, penggunaan, posisi, dan riwayat ban.</p>
         </div>

         <div class="rma-card" data-aos="fade-up" data-aos-delay="500">
            <div class="rma-icon">📦</div>
            <h3>Sparepart</h3>
            <p>Informasi sparepart dan aktivitas yang berkaitan dengan operasional.</p>
         </div>

         <div class="rma-card" data-aos="fade-up" data-aos-delay="600">
            <div class="rma-icon">💰</div>
            <h3>Cost</h3>
            <p>Informasi biaya yang berkaitan dengan kendaraan dan aktivitas armada.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.report-manage-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.report-manage-container {
  max-width: 1200px;
  width: 100%;
}
.rma-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rma-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.rma-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 640px) {
  .rma-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .rma-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.rma-card {
  background: #f8fafc;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  text-align: center;
}
.rma-card:hover {
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  border-color: #cbd5e1;
}
.rma-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.rma-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}
.rma-card p {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
}
</style>
