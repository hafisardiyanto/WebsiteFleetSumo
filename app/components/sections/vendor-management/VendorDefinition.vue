<template>
  <section class="vendor-def-wrapper">
    <div class="vendor-def-container">
      <div class="vdf-header" data-aos="fade-up">
        <h2 class="vdf-title">Satu Sistem untuk Mengelola Informasi Vendor</h2>
        <p class="vdf-subtitle">Vendor Management membantu perusahaan mengelola informasi vendor dan aktivitas yang berkaitan dengan kebutuhan operasional armada secara lebih terstruktur.</p>
      </div>

      <div class="vdf-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="vdf-step">
            <div class="vdf-box">DATA VENDOR</div>
            <div class="vdf-arrow">▼</div>
         </div>
         <div class="vdf-step">
            <div class="vdf-box">INFORMASI & KONTAK</div>
            <div class="vdf-arrow">▼</div>
         </div>
         <div class="vdf-step">
            <div class="vdf-box">LAYANAN / KEBUTUHAN</div>
            <div class="vdf-arrow">▼</div>
         </div>
         <div class="vdf-step">
            <div class="vdf-box">AKTIVITAS VENDOR</div>
            <div class="vdf-arrow">▼</div>
         </div>
         <div class="vdf-step">
            <div class="vdf-box">RIWAYAT</div>
            <div class="vdf-arrow">▼</div>
         </div>
         <div class="vdf-step">
            <div class="vdf-box">MONITORING</div>
            <div class="vdf-arrow">▼</div>
         </div>
         <div class="vdf-step final">
            <div class="vdf-box">LAPORAN</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-def-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.vendor-def-container {
  max-width: 1200px;
  width: 100%;
}
.vdf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.vdf-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}
.vdf-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.vdf-diagram {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vdf-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.vdf-box {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  width: 100%;
  max-width: 280px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.vdf-box:hover {
  transform: translateY(-2px);
  border-color: #94a3b8;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.vdf-arrow {
  color: #94a3b8;
  font-size: 1.25rem;
  margin: 0.75rem 0;
}
@media (min-width: 1024px) {
  .vdf-diagram {
    max-width: 1000px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  .vdf-step {
    width: auto;
    flex-direction: row;
  }
  .vdf-arrow {
    transform: rotate(-90deg);
    margin: 0 1rem;
  }
  .vdf-step.final .vdf-arrow {
    display: none;
  }
}
</style>
