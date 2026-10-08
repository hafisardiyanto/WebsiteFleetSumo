<template>
  <section class="sparepart-workflow-wrapper">
    <div class="sparepart-workflow-container">
      <div class="spw-header" data-aos="fade-up">
        <h2 class="spw-title">Kelola Sparepart dari Stok hingga Penggunaan</h2>
      </div>

      <div class="spw-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="spw-step">
            <div class="spw-box">DATA SPAREPART</div>
            <div class="spw-arrow">↓</div>
         </div>
         <div class="spw-step">
            <div class="spw-box highlight">PENCATATAN STOK</div>
            <div class="spw-arrow">↓</div>
         </div>
         <div class="spw-step">
            <div class="spw-box highlight">TRANSAKSI</div>
            <div class="spw-arrow">↓</div>
         </div>
         <div class="spw-step">
            <div class="spw-box highlight">PERUBAHAN STOK</div>
            <div class="spw-arrow">↓</div>
         </div>
         <div class="spw-step">
            <div class="spw-box">PENGGUNAAN</div>
            <div class="spw-arrow">↓</div>
         </div>
         <div class="spw-step">
            <div class="spw-box">MONITORING</div>
            <div class="spw-arrow">↓</div>
         </div>
         <div class="spw-step final">
            <div class="spw-box dark">RIWAYAT</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-workflow-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.sparepart-workflow-container {
  max-width: 800px;
  width: 100%;
}
.spw-header {
  text-align: center;
  margin-bottom: 4rem;
}
.spw-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.spw-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.spw-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.spw-box {
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
.spw-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
.spw-box.highlight {
  background: #e0f2fe;
  border-color: #7dd3fc;
  color: #0369a1;
}
.spw-box.dark {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
}
.spw-arrow {
  color: #94a3b8;
  font-size: 1.5rem;
  font-weight: bold;
}
.spw-step.final .spw-arrow {
  display: none;
}
</style>
