<template>
  <section class="cost-def-wrapper">
    <div class="cost-def-container">
      <div class="cdf-header" data-aos="fade-up">
        <h2 class="cdf-title">Satu Sistem untuk Mengelola Biaya Operasional Armada</h2>
        <p class="cdf-subtitle">Cost & Financial membantu perusahaan mengelola proses biaya yang berkaitan dengan operasional armada, mulSistem dari pengajuan hingga realisasi dan monitoring biaya kendaraan.</p>
      </div>

      <div class="cdf-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="cdf-step">
            <div class="cdf-box">KEBUTUHAN BIAYA</div>
            <div class="cdf-arrow">↓</div>
         </div>
         <div class="cdf-step">
            <div class="cdf-box highlight">PENGAJUAN</div>
            <div class="cdf-arrow">↓</div>
         </div>
         <div class="cdf-step">
            <div class="cdf-box highlight">ESTIMASI</div>
            <div class="cdf-arrow">↓</div>
         </div>
         <div class="cdf-step">
            <div class="cdf-box highlight">APPROVAL</div>
            <div class="cdf-arrow">↓</div>
         </div>
         <div class="cdf-step">
            <div class="cdf-box highlight">REALISASI</div>
            <div class="cdf-arrow">↓</div>
         </div>
         <div class="cdf-step">
            <div class="cdf-box">MONITORING</div>
            <div class="cdf-arrow">↓</div>
         </div>
         <div class="cdf-step">
            <div class="cdf-box dark">LAPORAN</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-def-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.cost-def-container {
  max-width: 800px;
  width: 100%;
}
.cdf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.cdf-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}
.cdf-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}
.cdf-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cdf-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.cdf-box {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.05em;
  width: 100%;
  max-width: 350px;
  text-align: center;
  margin: 0.25rem 0;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}
.cdf-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
.cdf-box.highlight {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #1d4ed8;
}
.cdf-box.dark {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
}
.cdf-arrow {
  color: #94a3b8;
  font-size: 1.25rem;
  margin: 0.5rem 0;
  font-weight: bold;
}
</style>
