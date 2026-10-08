<template>
  <section class="approval-features-wrapper">
    <div class="approval-features-container">
      <div class="apf-header" data-aos="fade-up">
        <h2 class="apf-title">Fitur untuk Mendukung Proses Approval</h2>
      </div>

      <div class="apf-grid">
         <div class="apf-item" data-aos="fade-up" data-aos-delay="100">
            <div class="apf-icon">📝</div>
            <div class="apf-content">
               <h3>01 — Submission Management</h3>
               <p>Kelola pengajuan aktivitas operasional.</p>
            </div>
         </div>

         <div class="apf-item" data-aos="fade-up" data-aos-delay="150">
            <div class="apf-icon">✅</div>
            <div class="apf-content">
               <h3>02 — Approval Management</h3>
               <p>Kelola proses persetujuan pengajuan.</p>
            </div>
         </div>

         <div class="apf-item" data-aos="fade-up" data-aos-delay="200">
            <div class="apf-icon">📍</div>
            <div class="apf-content">
               <h3>03 — Status Tracking</h3>
               <p>Pantau status setiap pengajuan.</p>
            </div>
         </div>

         <div class="apf-item" data-aos="fade-up" data-aos-delay="250">
            <div class="apf-icon">📜</div>
            <div class="apf-content">
               <h3>04 — Approval History</h3>
               <p>Telusuri riwayat proses persetujuan.</p>
            </div>
         </div>

         <div class="apf-item" data-aos="fade-up" data-aos-delay="300">
            <div class="apf-icon">🔄</div>
            <div class="apf-content">
               <h3>05 — Workflow</h3>
               <p>Atur alur proses sesuSistem kebutuhan yang tersedia.</p>
            </div>
         </div>

         <div class="apf-item" data-aos="fade-up" data-aos-delay="350">
            <div class="apf-icon">🛡️</div>
            <div class="apf-content">
               <h3>06 — Role & Authorization</h3>
               <p>Kelola kewenangan pengguna sesuSistem konfigurasi sistem.</p>
            </div>
         </div>

         <div class="apf-item" data-aos="fade-up" data-aos-delay="400">
            <div class="apf-icon">⚖️</div>
            <div class="apf-content">
               <h3>07 — Approval Decision</h3>
               <p>Kelola keputusan persetujuan seperti disetujui atau ditolak.</p>
            </div>
         </div>

         <div class="apf-item" data-aos="fade-up" data-aos-delay="450">
            <div class="apf-icon">📊</div>
            <div class="apf-content">
               <h3>08 — Process Monitoring</h3>
               <p>Pantau pengajuan yang masih berjalan maupun yang telah selesSistem.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-features-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.approval-features-container {
  max-width: 1200px;
  width: 100%;
}
.apf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.apf-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.apf-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .apf-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .apf-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.apf-item {
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
.apf-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: #cbd5e1;
}
.apf-icon {
  font-size: 2.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.apf-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.5rem;
}
.apf-content p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
