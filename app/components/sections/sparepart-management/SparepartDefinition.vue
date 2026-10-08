<template>
  <section class="sparepart-def-wrapper">
    <div class="sparepart-def-container">
      <div class="sdf-header" data-aos="fade-up">
        <h2 class="sdf-title">Satu Sistem untuk Mengelola Sparepart Armada</h2>
        <p class="sdf-subtitle">Sparepart Management membantu perusahaan mengelola data dan aktivitas sparepart, mulSistem dari pencatatan barang, stok, transaksi, penggunaan, hingga riwayat sparepart dalam satu sistem.</p>
      </div>

      <div class="sdf-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="sdf-step">
            <div class="sdf-box">DATA SPAREPART</div>
            <div class="sdf-arrow">▼</div>
         </div>
         <div class="sdf-step">
            <div class="sdf-box">STOK</div>
            <div class="sdf-arrow">▼</div>
         </div>
         <div class="sdf-step">
            <div class="sdf-box">TRANSAKSI</div>
            <div class="sdf-arrow">▼</div>
         </div>
         <div class="sdf-step">
            <div class="sdf-box">PENGGUNAAN</div>
            <div class="sdf-arrow">▼</div>
         </div>
         <div class="sdf-step">
            <div class="sdf-box">MONITORING</div>
            <div class="sdf-arrow">▼</div>
         </div>
         <div class="sdf-step">
            <div class="sdf-box">RIWAYAT</div>
            <div class="sdf-arrow">▼</div>
         </div>
         <div class="sdf-step final">
            <div class="sdf-box">LAPORAN</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-def-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.sparepart-def-container {
  max-width: 1200px;
  width: 100%;
}
.sdf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.sdf-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}
.sdf-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.sdf-diagram {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sdf-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.sdf-box {
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
.sdf-box:hover {
  transform: translateY(-2px);
  border-color: #94a3b8;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.sdf-arrow {
  color: #94a3b8;
  font-size: 1.25rem;
  margin: 0.75rem 0;
}
@media (min-width: 1024px) {
  .sdf-diagram {
    max-width: 1000px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  .sdf-step {
    width: auto;
    flex-direction: row;
  }
  .sdf-arrow {
    transform: rotate(-90deg);
    margin: 0 1rem;
  }
  .sdf-step.final .sdf-arrow {
    display: none;
  }
}
</style>
