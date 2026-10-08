<template>
  <section class="vendor-monitoring-wrapper">
    <div class="vendor-monitoring-container">
      <div class="vnm-header" data-aos="fade-up">
        <h2 class="vnm-title">Pantau Informasi Vendor dengan Lebih Mudah</h2>
        <p class="vnm-subtitle">Informasi vendor yang tersimpan dalam sistem membantu perusahaan melihat data dan aktivitas vendor sebagSistem bagian dari pengelolaan operasional armada.</p>
      </div>

      <div class="vnm-layout">
         
         <div class="vnm-visual" data-aos="fade-right" data-aos-delay="100">
             <div class="vnm-mockup">
                 <img src="/assets/fitur/vendor/hero.jpg" alt="Monitoring Vendor" class="vnm-img" />
             </div>
         </div>

         <div class="vnm-content" data-aos="fade-left" data-aos-delay="200">
             <div class="vnm-card">
                 <h4>Informasi Vendor</h4>
                 <p>Melihat data vendor yang tersedia dalam sistem.</p>
             </div>
             <div class="vnm-card">
                 <h4>Layanan Vendor</h4>
                 <p>Melihat informasi layanan atau kebutuhan yang berkaitan dengan vendor.</p>
             </div>
             <div class="vnm-card">
                 <h4>Aktivitas Vendor</h4>
                 <p>Memantau aktivitas vendor sesuSistem proses yang tersedia.</p>
             </div>
             <div class="vnm-card">
                 <h4>Riwayat Vendor</h4>
                 <p>Menelusuri aktivitas vendor yang telah tercatat.</p>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-monitoring-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.vendor-monitoring-container {
  max-width: 1200px;
  width: 100%;
}
.vnm-header {
  text-align: center;
  margin-bottom: 4rem;
}
.vnm-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.vnm-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.vnm-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .vnm-layout {
    grid-template-columns: 1fr 1fr;
  }
}
.vnm-mockup {
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.vnm-img {
  width: 100%;
  height: auto;
  display: block;
}
.vnm-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .vnm-content {
    grid-template-columns: 1fr 1fr;
  }
}
.vnm-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.vnm-card:hover {
  background: #fff;
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.vnm-card h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.vnm-card p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
