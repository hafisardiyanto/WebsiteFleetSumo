<template>
  <section class="tyre-features-wrapper">
    <div class="tyre-features-container">
      <div class="tf-header" data-aos="fade-up">
        <h2 class="tf-title">Fitur untuk Mendukung Pengelolaan Ban Armada</h2>
      </div>

      <div class="tf-grid">
         <div class="tf-item" data-aos="fade-up" data-aos-delay="100">
            <div class="tf-icon">📂</div>
            <div class="tf-content">
               <h3>01 — Tyre Database</h3>
               <p>Kelola data ban secara terpusat.</p>
            </div>
         </div>

         <div class="tf-item" data-aos="fade-up" data-aos-delay="150">
            <div class="tf-icon">🔧</div>
            <div class="tf-content">
               <h3>02 — Tyre Installation</h3>
               <p>Catat pemasangan ban pada kendaraan.</p>
            </div>
         </div>

         <div class="tf-item" data-aos="fade-up" data-aos-delay="200">
            <div class="tf-icon">📍</div>
            <div class="tf-content">
               <h3>03 — Tyre Position</h3>
               <p>Kelola informasi posisi ban pada kendaraan.</p>
            </div>
         </div>

         <div class="tf-item" data-aos="fade-up" data-aos-delay="250">
            <div class="tf-icon">📈</div>
            <div class="tf-content">
               <h3>04 — Tyre Usage</h3>
               <p>Pantau informasi penggunaan ban.</p>
            </div>
         </div>

         <div class="tf-item" data-aos="fade-up" data-aos-delay="300">
            <div class="tf-icon">🔄</div>
            <div class="tf-content">
               <h3>05 — Tyre Movement</h3>
               <p>Catat perubahan posisi atau perpindahan ban.</p>
            </div>
         </div>

         <div class="tf-item" data-aos="fade-up" data-aos-delay="350">
            <div class="tf-icon">📜</div>
            <div class="tf-content">
               <h3>06 — Tyre History</h3>
               <p>Telusuri riwayat aktivitas dan penggunaan ban.</p>
            </div>
         </div>

         <div class="tf-item" data-aos="fade-up" data-aos-delay="400">
            <div class="tf-icon">🔗</div>
            <div class="tf-content">
               <h3>07 — Vehicle Relation</h3>
               <p>Hubungkan informasi ban dengan kendaraan.</p>
            </div>
         </div>

         <div class="tf-item" data-aos="fade-up" data-aos-delay="450">
            <div class="tf-icon">📊</div>
            <div class="tf-content">
               <h3>08 — Tyre Monitoring</h3>
               <p>Pantau informasi ban sebagSistem bagian dari pengelolaan armada.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-features-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.tyre-features-container {
  max-width: 1200px;
  width: 100%;
}
.tf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.tf-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.tf-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .tf-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .tf-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.tf-item {
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.tf-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: #cbd5e1;
}
.tf-icon {
  font-size: 2.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tf-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.5rem;
}
.tf-content p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
