<template>
  <section class="cost-workflow-wrapper">
    <div class="cost-workflow-container">
      <div class="csw-header" data-aos="fade-up">
        <h2 class="csw-title">Dari Pengajuan hingga Realisasi Biaya</h2>
      </div>

      <div class="csw-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="csw-step">
            <div class="csw-box highlight">KEBUTUHAN BIAYA</div>
            <div class="csw-arrow">↓</div>
         </div>
         <div class="csw-step">
            <div class="csw-box">PENGAJUAN</div>
            <div class="csw-arrow">↓</div>
         </div>
         <div class="csw-step">
            <div class="csw-box">ESTIMASI</div>
            <div class="csw-arrow">↓</div>
         </div>
         <div class="csw-step">
            <div class="csw-box highlight-alt">APPROVAL</div>
            <div class="csw-arrow">↓</div>
         </div>
         <div class="csw-step">
            <div class="csw-box success">DISETUJUI</div>
            <div class="csw-arrow">↓</div>
         </div>
         <div class="csw-step">
            <div class="csw-box">REALISASI</div>
            <div class="csw-arrow">↓</div>
         </div>
         <div class="csw-step">
            <div class="csw-box">PENCATATAN</div>
            <div class="csw-arrow">↓</div>
         </div>
         <div class="csw-step final">
            <div class="csw-box dark">MONITORING</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-workflow-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.cost-workflow-container {
  max-width: 800px;
  width: 100%;
}
.csw-header {
  text-align: center;
  margin-bottom: 4rem;
}
.csw-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.csw-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.csw-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.csw-box {
  background: #f1f5f9;
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
  transition: all 0.3s ease;
}
.csw-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
.csw-box.highlight {
  background: #e0f2fe;
  border-color: #7dd3fc;
  color: #0369a1;
}
.csw-box.highlight-alt {
  background: #2563eb;
  border-color: #1d4ed8;
  color: #ffffff;
}
.csw-box.success {
  background: #10b981;
  border-color: #059669;
  color: #ffffff;
}
.csw-box.dark {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
}
.csw-arrow {
  color: #94a3b8;
  font-size: 1.5rem;
  font-weight: bold;
}
.csw-step.final .csw-arrow {
  display: none;
}
</style>
