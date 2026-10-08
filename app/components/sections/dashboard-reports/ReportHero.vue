<template>
  <section class="report-hero-wrapper">
    <div class="report-hero-container">
      
      <!-- Content Left -->
      <div class="report-hero-content">
        <span class="hero-label" data-aos="fade-up">DASHBOARD & REPORTS</span>
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
          Ubah Data Operasional Armada Menjadi Informasi yang Mudah <span class="highlight">Dipantau</span>
        </h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          FleetSumo membantu perusahaan memantau informasi armada melalui dashboard dan laporan yang menyajikan data operasional secara lebih terstruktur untuk mendukung monitoring dan evaluasi.
        </p>
        
        <div class="hero-actions" data-aos="fade-up" data-aos-delay="300">
          <button class="btn-primary" onclick="window.location.href='/kontak/demo'">Jadwalkan Demo</button>
        </div>
      </div>

      <!-- Content Right Visual -->
      <div class="report-hero-visual" data-aos="zoom-in" data-aos-delay="400">
        <div class="hero-image-container">
          <div class="hero-glow"></div>
          <img src="/assets/fitur/dashboard-reports/hero-2.jpg" alt="FleetSumo Dashboard & Reports" class="hero-img">
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.report-hero-wrapper {
  padding: 6rem 5%;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.report-hero-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  z-index: 10;
}
@media (min-width: 1024px) {
  .report-hero-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.report-hero-content {
  flex: 1;
  max-width: 600px;
}
.hero-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  font-weight: 700;
  font-size: 0.875rem;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  border: 1px solid rgba(59, 130, 246, 0.2);
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}
@media (min-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }
}
.highlight {
  color: #2563eb;
}
.hero-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.btn-primary {
  padding: 1rem 2rem;
  background: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
}
.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
}
.btn-secondary {
  padding: 1rem 2rem;
  background: #ffffff;
  color: #1e293b;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-secondary:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
  transform: translateY(-2px);
}
.report-hero-visual {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-image-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.hero-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
.hero-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(255,255,255,0) 70%);
  z-index: -1;
  pointer-events: none;
}
</style>
