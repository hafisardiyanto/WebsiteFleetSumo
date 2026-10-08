<template>
  <section class="vendor-workflow-wrapper">
    <div class="vendor-workflow-container">
      <div class="vnw-header" data-aos="fade-up">
        <h2 class="vnw-title">Kelola Informasi Vendor Secara Terstruktur</h2>
      </div>

      <div class="vnw-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="vnw-step">
            <div class="vnw-box">INPUT DATA VENDOR</div>
            <div class="vnw-arrow">↓</div>
         </div>
         <div class="vnw-step">
            <div class="vnw-box highlight">KELOLA INFORMASI</div>
            <div class="vnw-arrow">↓</div>
         </div>
         <div class="vnw-step">
            <div class="vnw-box highlight">KELOLA LAYANAN</div>
            <div class="vnw-arrow">↓</div>
         </div>
         <div class="vnw-step">
            <div class="vnw-box highlight">AKTIVITAS OPERASIONAL</div>
            <div class="vnw-arrow">↓</div>
         </div>
         <div class="vnw-step">
            <div class="vnw-box">SIMPAN RIWAYAT</div>
            <div class="vnw-arrow">↓</div>
         </div>
         <div class="vnw-step final">
            <div class="vnw-box dark">MONITORING</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-workflow-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.vendor-workflow-container {
  max-width: 800px;
  width: 100%;
}
.vnw-header {
  text-align: center;
  margin-bottom: 4rem;
}
.vnw-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.vnw-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vnw-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.vnw-box {
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
  margin: 0.5rem 0;
  transition: all 0.3s ease;
}
.vnw-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
.vnw-box.highlight {
  background: #e0f2fe;
  border-color: #7dd3fc;
  color: #0369a1;
}
.vnw-box.dark {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
}
.vnw-arrow {
  color: #94a3b8;
  font-size: 1.5rem;
  font-weight: bold;
}
.vnw-step.final .vnw-arrow {
  display: none;
}
</style>
