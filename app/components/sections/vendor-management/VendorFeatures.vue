<template>
  <section class="vendor-features-wrapper">
    <div class="vendor-features-container">
      <div class="vnf-header" data-aos="fade-up">
        <h2 class="vnf-title">Fitur untuk Mendukung Pengelolaan Vendor</h2>
      </div>

      <div class="vnf-grid">
         <div class="vnf-item" data-aos="fade-up" data-aos-delay="100">
            <div class="vnf-icon">🏢</div>
            <div class="vnf-content">
               <h3>01 — Vendor Database</h3>
               <p>Kelola data vendor secara terpusat.</p>
            </div>
         </div>

         <div class="vnf-item" data-aos="fade-up" data-aos-delay="150">
            <div class="vnf-icon">📋</div>
            <div class="vnf-content">
               <h3>02 — Vendor Profile</h3>
               <p>Lihat informasi vendor secara lebih lengkap.</p>
            </div>
         </div>

         <div class="vnf-item" data-aos="fade-up" data-aos-delay="200">
            <div class="vnf-icon">📱</div>
            <div class="vnf-content">
               <h3>03 — Contact Information</h3>
               <p>Kelola informasi kontak vendor.</p>
            </div>
         </div>

         <div class="vnf-item" data-aos="fade-up" data-aos-delay="250">
            <div class="vnf-icon">🤝</div>
            <div class="vnf-content">
               <h3>04 — Vendor Service</h3>
               <p>Kelola informasi layanan atau kebutuhan yang ditangani vendor.</p>
            </div>
         </div>

         <div class="vnf-item" data-aos="fade-up" data-aos-delay="300">
            <div class="vnf-icon">⚡</div>
            <div class="vnf-content">
               <h3>05 — Vendor Activity</h3>
               <p>Catat atau pantau aktivitas vendor sesuSistem proses yang tersedia.</p>
            </div>
         </div>

         <div class="vnf-item" data-aos="fade-up" data-aos-delay="350">
            <div class="vnf-icon">📜</div>
            <div class="vnf-content">
               <h3>06 — Vendor History</h3>
               <p>Telusuri riwayat aktivitas vendor.</p>
            </div>
         </div>

         <div class="vnf-item full-width-monitor" data-aos="fade-up" data-aos-delay="400">
            <div class="vnf-icon">📊</div>
            <div class="vnf-content">
               <h3>07 — Vendor Monitoring</h3>
               <p>Pantau informasi vendor sebagSistem bagian dari operasional armada.</p>
            </div>
         </div>
         
      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-features-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.vendor-features-container {
  max-width: 1200px;
  width: 100%;
}
.vnf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.vnf-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}
.vnf-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .vnf-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .vnf-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.vnf-item {
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
.vnf-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: #cbd5e1;
}
.vnf-icon {
  font-size: 2.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vnf-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.5rem;
}
.vnf-content p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
.full-width-monitor {
  grid-column: 1 / -1;
  border: 2px dashed #93c5fd;
  text-align: center;
  align-items: center;
  background: #eff6ff;
}
@media (min-width: 1024px) {
  .full-width-monitor {
    grid-column: span 3;
    flex-direction: row;
    gap: 2rem;
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
