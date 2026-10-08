<template>
  <section class="vendor-integration-wrapper">
    <div class="vendor-integration-container">
      <div class="vni-header" data-aos="fade-up">
        <h2 class="vni-title">Vendor Terhubung dengan Kebutuhan Operasional Armada</h2>
      </div>

      <div class="vni-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <!-- Top -->
         <div class="vni-row center-row">
            <div class="vni-box">Fleet & Vehicle</div>
         </div>
         <div class="vni-arrow-vertical">↓</div>
         
         <!-- Middle -->
         <div class="vni-row middle-row">
            <div class="vni-box side">Maintenance</div>
            <div class="vni-arrow-horizontal left-arrow">←</div>
            <div class="vni-box core">Vendor</div>
            <div class="vni-arrow-horizontal right-arrow">→</div>
            <div class="vni-box side">Sparepart</div>
         </div>

         <!-- Bottom -->
         <div class="vni-arrow-vertical">↓</div>
         <div class="vni-row center-row">
            <div class="vni-box">Cost</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-integration-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.vendor-integration-container {
  max-width: 900px;
  width: 100%;
}
.vni-header {
  text-align: center;
  margin-bottom: 4rem;
}
.vni-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.vni-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vni-row {
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
  .vni-arrow-horizontal.left-arrow, 
  .vni-arrow-horizontal.right-arrow {
    transform: rotate(90deg);
    margin: 1rem 0;
  }
}
.vni-box {
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
.vni-box.core {
  background: #2563eb;
  border-color: #1d4ed8;
  color: #ffffff;
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}
.vni-arrow-vertical {
  color: #94a3b8;
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: bold;
}
.vni-arrow-horizontal {
  color: #94a3b8;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
