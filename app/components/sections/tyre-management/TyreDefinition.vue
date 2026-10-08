<template>
  <section class="tyre-def-wrapper">
    <div class="tyre-def-container">
      <div class="tdf-header" data-aos="fade-up">
        <h2 class="tdf-title">Satu Sistem untuk Mengelola Siklus Penggunaan Ban</h2>
        <p class="tdf-subtitle">Tyre Management membantu perusahaan mengelola informasi ban sejak pencatatan data, pemasangan pada kendaraan, posisi ban, penggunaan, perubahan posisi, hingga riwayat ban.</p>
      </div>

      <div class="tdf-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="tdf-step">
            <div class="tdf-box">DATA BAN</div>
            <div class="tdf-arrow">▼</div>
         </div>
         <div class="tdf-step">
            <div class="tdf-box">PEMASANGAN</div>
            <div class="tdf-arrow">▼</div>
         </div>
         <div class="tdf-step">
            <div class="tdf-box">POSISI BAN</div>
            <div class="tdf-arrow">▼</div>
         </div>
         <div class="tdf-step">
            <div class="tdf-box">PENGGUNAAN</div>
            <div class="tdf-arrow">▼</div>
         </div>
         <div class="tdf-step">
            <div class="tdf-box">MONITORING</div>
            <div class="tdf-arrow">▼</div>
         </div>
         <div class="tdf-step">
            <div class="tdf-box">PERUBAHAN POSISI</div>
            <div class="tdf-arrow">▼</div>
         </div>
         <div class="tdf-step">
            <div class="tdf-box">PELEPASAN</div>
            <div class="tdf-arrow">▼</div>
         </div>
         <div class="tdf-step final">
            <div class="tdf-box">RIWAYAT BAN</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-def-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}

.tyre-def-container {
  max-width: 1200px;
  width: 100%;
}

.tdf-header {
  text-align: center;
  margin-bottom: 4rem;
}

.tdf-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.tdf-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.tdf-diagram {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.tdf-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
}

.tdf-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
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

.tdf-box:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.tdf-arrow {
  color: #94a3b8;
  font-size: 1.25rem;
  margin: 0.75rem 0;
}

@media (min-width: 768px) {
  .tdf-diagram {
    max-width: 1000px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .tdf-step {
    width: auto;
    flex-direction: row;
  }
  
  .tdf-arrow {
    transform: rotate(-90deg);
    margin: 0 1rem;
  }
  
  .tdf-step.final .tdf-arrow {
    display: none;
  }
}
</style>
