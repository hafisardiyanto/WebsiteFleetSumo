<template>
  <section class="approval-workflow-wrapper">
    <div class="approval-workflow-container">
      <div class="apw-header" data-aos="fade-up">
        <h2 class="apw-title">Dari Pengajuan hingga SelesSistem dalam Alur yang Terstruktur</h2>
      </div>

      <div class="apw-content" data-aos="fade-up" data-aos-delay="200">
         <div class="apw-diagram">
            <div class="apw-step">
               <div class="apw-box">PENGAJUAN</div>
               <div class="apw-arrow">↓</div>
            </div>
            <div class="apw-step">
               <div class="apw-box">REVIEW</div>
               <div class="apw-arrow">↓</div>
            </div>
            <div class="apw-step approval-point">
               <div class="apw-box highlight">APPROVAL</div>
               <div class="apw-branch-container">
                  <svg width="200" height="30" viewBox="0 0 200 30" class="apw-branch-svg">
                     <path d="M100,0 L100,10 L10,10 L10,30" fill="none" stroke="#94a3b8" stroke-width="2"/>
                     <path d="M100,0 L100,10 L190,10 L190,30" fill="none" stroke="#94a3b8" stroke-width="2"/>
                  </svg>
               </div>
            </div>
            <div class="apw-split-row">
               <div class="apw-col">
                  <div class="apw-box success">DISETUJUI</div>
                  <div class="apw-arrow">↓</div>
                  <div class="apw-box">TINDAK LANJUT</div>
                  <div class="apw-arrow">↓</div>
                  <div class="apw-box">REALISASI</div>
                  <div class="apw-arrow">↓</div>
                  <div class="apw-box dark">SELESSistem</div>
               </div>
               <div class="apw-col">
                  <div class="apw-box danger">DITOLAK</div>
               </div>
            </div>
         </div>
         
         <div class="apw-info">
            <div class="apw-info-item">
               <h4>Pengajuan</h4>
               <p>Permintaan dibuat oleh pengguna.</p>
            </div>
            <div class="apw-info-item">
               <h4>Review</h4>
               <p>Pengajuan diperiksa sesuSistem kebutuhan proses.</p>
            </div>
            <div class="apw-info-item highlight-info">
               <h4>Approval</h4>
               <p>Pihak yang berwenang memberikan keputusan.</p>
            </div>
            <div class="apw-info-item">
               <h4>Tindak Lanjut</h4>
               <p>Pengajuan yang disetujui diteruskan ke proses berikutnya.</p>
            </div>
            <div class="apw-info-item">
               <h4>Realisasi</h4>
               <p>Aktivitas dilaksanakan dan dicatat.</p>
            </div>
            <div class="apw-info-item">
               <h4>SelesSistem</h4>
               <p>Proses tersimpan sebagSistem riwayat.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-workflow-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.approval-workflow-container {
  max-width: 1200px;
  width: 100%;
}
.apw-header {
  text-align: center;
  margin-bottom: 4rem;
}
.apw-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.apw-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .apw-content {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
}

.apw-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8fafc;
  padding: 3rem 2rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.apw-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.apw-box {
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
.apw-box.dark {
  background: #1e293b;
  color: white;
  border-color: #0f172a;
}
.apw-box.highlight {
  background: #2563eb;
  color: white;
  border-color: #1d4ed8;
  padding: 1.25rem 2rem;
  font-size: 1.05rem;
}
.apw-box.success {
  background: #10b981;
  color: white;
  border-color: #059669;
}
.apw-box.danger {
  background: #ef4444;
  color: white;
  border-color: #dc2626;
}
.apw-arrow {
  color: #94a3b8;
  font-size: 1.25rem;
  margin: 0.5rem 0;
  font-weight: bold;
}
.approval-point {
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.apw-branch-container {
  height: 30px;
  display: flex;
  justify-content: center;
  margin-top: -2px;
}
.apw-split-row {
  display: flex;
  width: 100%;
  max-width: 480px;
  justify-content: space-between;
}
.apw-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
}
@media (max-width: 640px) {
  .apw-split-row {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .apw-branch-container {
    display: none;
  }
}

.apw-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.apw-info-item {
  background: #f8fafc;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #cbd5e1;
}
.apw-info-item.highlight-info {
  border-left-color: #2563eb;
  background: #eff6ff;
}
.apw-info-item h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.apw-info-item p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
