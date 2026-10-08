<template>
  <section class="approval-def-wrapper">
    <div class="approval-def-container">
      <div class="adf-header" data-aos="fade-up">
        <h2 class="adf-title">Satu Alur untuk Mengelola Pengajuan hingga Persetujuan</h2>
        <p class="adf-subtitle">Approval & Workflow membantu perusahaan mengatur proses pengajuan dan persetujuan secara lebih terstruktur sehingga status setiap proses lebih mudah dipantau dan ditelusuri.</p>
      </div>

      <div class="adf-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="adf-step">
            <div class="adf-box">PENGAJUAN</div>
            <div class="adf-arrow">↓</div>
         </div>
         <div class="adf-step">
            <div class="adf-box">MENUNGGU PERSETUJUAN</div>
            <div class="adf-arrow">↓</div>
         </div>
         
         <div class="adf-step approval-point">
            <div class="adf-box highlight">APPROVAL</div>
            <div class="adf-branch-container">
               <svg width="200" height="30" viewBox="0 0 200 30" class="adf-branch-svg">
                  <path d="M100,0 L100,10 L10,10 L10,30" fill="none" stroke="#94a3b8" stroke-width="2"/>
                  <path d="M100,0 L100,10 L190,10 L190,30" fill="none" stroke="#94a3b8" stroke-width="2"/>
               </svg>
            </div>
         </div>

         <div class="adf-split-row">
            <div class="adf-col">
               <div class="adf-box success">DISETUJUI</div>
               <div class="adf-arrow">↓</div>
               <div class="adf-box">TINDAK LANJUT</div>
               <div class="adf-arrow">↓</div>
               <div class="adf-box">REALISASI / SELESSistem</div>
            </div>
            <div class="adf-col">
               <div class="adf-box danger">DITOLAK</div>
            </div>
         </div>
         
      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-def-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.approval-def-container {
  max-width: 1200px;
  width: 100%;
}
.adf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.adf-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}
.adf-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.adf-diagram {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.adf-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.adf-box {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  width: 100%;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin: 0.25rem 0;
}
.adf-box.highlight {
  background: #2563eb;
  color: white;
  border-color: #1d4ed8;
  padding: 1.25rem 2rem;
}
.adf-box.success {
  background: #10b981;
  color: white;
  border-color: #059669;
}
.adf-box.danger {
  background: #ef4444;
  color: white;
  border-color: #dc2626;
}
.adf-arrow {
  color: #94a3b8;
  font-size: 1.25rem;
  margin: 0.5rem 0;
  font-weight: bold;
}
.approval-point {
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.adf-branch-container {
  height: 30px;
  display: flex;
  justify-content: center;
  margin-top: -2px;
}
.adf-split-row {
  display: flex;
  width: 100%;
  max-width: 480px;
  justify-content: space-between;
}
.adf-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
}
@media (max-width: 640px) {
  .adf-split-row {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .adf-branch-container {
    display: none;
  }
}
</style>
