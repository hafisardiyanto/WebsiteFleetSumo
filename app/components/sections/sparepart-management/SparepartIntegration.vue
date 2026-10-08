<template>
  <section class="sparepart-integration-wrapper">
    <div class="sparepart-integration-container">
      <div class="spi-header" data-aos="fade-up">
        <h2 class="spi-title">Sparepart Terhubung dengan Operasional Armada</h2>
      </div>

      <div class="spi-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <!-- Top -->
         <div class="spi-row center-row">
            <div class="spi-box">Fleet & Vehicle</div>
         </div>
         <div class="spi-arrow-vertical">↓</div>
         
         <!-- Middle -->
         <div class="spi-row middle-row">
            <div class="spi-box side">Maintenance</div>
            <div class="spi-arrow-horizontal left-arrow">←</div>
            <div class="spi-box core">Sparepart</div>
            <div class="spi-arrow-horizontal right-arrow">→</div>
            <div class="spi-box side">Cost</div>
         </div>

         <!-- Bottom -->
         <div class="spi-arrow-vertical">↓</div>
         <div class="spi-row center-row">
            <div class="spi-box">Dashboard & Reports</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-integration-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.sparepart-integration-container {
  max-width: 900px;
  width: 100%;
}
.spi-header {
  text-align: center;
  margin-bottom: 4rem;
}
.spi-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.spi-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.spi-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.middle-row {
  gap: 1rem;
  flex-wrap: nowrap;
}
@media (max-width: 768px) {
  .middle-row {
    flex-direction: column;
  }
  .spi-arrow-horizontal.left-arrow, 
  .spi-arrow-horizontal.right-arrow {
    transform: rotate(90deg);
    margin: 1rem 0;
  }
}
.spi-box {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  min-width: 180px;
}
.spi-box.core {
  background: #2563eb;
  border-color: #1d4ed8;
  color: #ffffff;
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}
.spi-arrow-vertical {
  color: #94a3b8;
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: bold;
}
.spi-arrow-horizontal {
  color: #94a3b8;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
