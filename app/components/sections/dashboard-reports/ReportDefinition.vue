<template>
  <section class="report-def-wrapper">
    <div class="report-def-container">
      <div class="rdf-header" data-aos="fade-up">
        <h2 class="rdf-title">Satu Tampilan untuk Memantau Informasi Operasional Armada</h2>
        <p class="rdf-subtitle">Dashboard & Reports merupakan bagian FleetSumo yang membantu menyajikan data operasional armada dalam bentuk dashboard dan laporan sehingga informasi dari berbagSistem aktivitas dapat dipantau dan digunakan untuk evaluasi.</p>
      </div>

      <div class="rdf-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="rdf-step">
            <div class="rdf-box">Fleet & Vehicle</div>
            <div class="rdf-arrow">↓</div>
         </div>
         <div class="rdf-step">
            <div class="rdf-box">Maintenance</div>
            <div class="rdf-arrow">↓</div>
         </div>
         <div class="rdf-step">
            <div class="rdf-box">Fuel</div>
            <div class="rdf-arrow">↓</div>
         </div>
         <div class="rdf-step">
            <div class="rdf-box">Tyre</div>
            <div class="rdf-arrow">↓</div>
         </div>
         <div class="rdf-step">
            <div class="rdf-box">Sparepart</div>
            <div class="rdf-arrow">↓</div>
         </div>
         <div class="rdf-step">
            <div class="rdf-box">Cost & Financial</div>
            <div class="rdf-arrow">↓</div>
         </div>
         <div class="rdf-step">
            <div class="rdf-box highlight">DASHBOARD & REPORTS</div>
            <div class="rdf-arrow">↓</div>
         </div>
         <div class="rdf-step final">
            <div class="rdf-box dark">Monitoring & Evaluation</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.report-def-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.report-def-container {
  max-width: 800px;
  width: 100%;
}
.rdf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rdf-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}
.rdf-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}
.rdf-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rdf-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.rdf-box {
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.rdf-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
.rdf-box.highlight {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #1d4ed8;
  font-size: 1.125rem;
  padding: 1.25rem 2rem;
}
.rdf-box.dark {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
}
.rdf-arrow {
  color: #94a3b8;
  font-size: 1.25rem;
  margin: 0.5rem 0;
  font-weight: bold;
}
.rdf-step.final .rdf-arrow {
  display: none;
}
</style>
