<template>
  <section class="cost-features-wrapper">
    <div class="cost-features-container">
      <div class="csf-header" data-aos="fade-up">
        <h2 class="csf-title">Fitur untuk Mendukung Pengendalian Biaya Armada</h2>
      </div>

      <div class="csf-grid">
         <div class="csf-item" data-aos="fade-up" data-aos-delay="100">
            <div class="csf-icon">📝</div>
            <div class="csf-content">
               <h3>01 — Cost Request</h3>
               <p>Kelola pengajuan biaya operasional armada.</p>
            </div>
         </div>

         <div class="csf-item" data-aos="fade-up" data-aos-delay="150">
            <div class="csf-icon">🧮</div>
            <div class="csf-content">
               <h3>02 — Cost Estimation</h3>
               <p>Kelola estimasi biaya sebelum realisasi.</p>
            </div>
         </div>

         <div class="csf-item" data-aos="fade-up" data-aos-delay="200">
            <div class="csf-icon">✅</div>
            <div class="csf-content">
               <h3>03 — Cost Approval</h3>
               <p>Dukung proses persetujuan biaya.</p>
            </div>
         </div>

         <div class="csf-item" data-aos="fade-up" data-aos-delay="250">
            <div class="csf-icon">💰</div>
            <div class="csf-content">
               <h3>04 — Cost Realization</h3>
               <p>Catat dan kelola realisasi biaya.</p>
            </div>
         </div>

         <div class="csf-item" data-aos="fade-up" data-aos-delay="300">
            <div class="csf-icon">🚗</div>
            <div class="csf-content">
               <h3>05 — Vehicle Cost</h3>
               <p>Pantau biaya yang berkaitan dengan kendaraan.</p>
            </div>
         </div>

         <div class="csf-item" data-aos="fade-up" data-aos-delay="350">
            <div class="csf-icon">📜</div>
            <div class="csf-content">
               <h3>06 — Cost History</h3>
               <p>Telusuri riwayat biaya.</p>
            </div>
         </div>

         <div class="csf-item" data-aos="fade-up" data-aos-delay="400">
            <div class="csf-icon">📊</div>
            <div class="csf-content">
               <h3>07 — Cost Monitoring</h3>
               <p>Pantau informasi biaya operasional.</p>
            </div>
         </div>

         <div class="csf-item" data-aos="fade-up" data-aos-delay="450">
            <div class="csf-icon">📈</div>
            <div class="csf-content">
               <h3>08 — Cost Reporting</h3>
               <p>Gunakan data biaya untuk kebutuhan monitoring dan evaluasi.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-features-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.cost-features-container {
  max-width: 1200px;
  width: 100%;
}
.csf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.csf-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.csf-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .csf-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .csf-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.csf-item {
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
.csf-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: #cbd5e1;
}
.csf-icon {
  font-size: 2.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.csf-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.5rem;
}
.csf-content p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
