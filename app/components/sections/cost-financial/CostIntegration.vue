<template>
  <section class="cost-integration-wrapper">
    <div class="cost-integration-container">
      <div class="csi-header" data-aos="fade-up">
        <h2 class="csi-title">Biaya Terhubung dengan Aktivitas Armada</h2>
      </div>

      <div class="csi-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <!-- Top -->
         <div class="csi-row center-row">
            <div class="csi-box">Fleet &<br>Vehicle</div>
         </div>
         <div class="csi-arrow-vertical">↓</div>
         
         <div class="csi-connector-horizontal"></div>
         <div class="csi-row middle-row">
            <div class="csi-branch">
               <div class="csi-arrow-vertical branch-arrow">↓</div>
               <div class="csi-box side">Maintenance</div>
            </div>
            <div class="csi-branch">
               <div class="csi-arrow-vertical branch-arrow">↓</div>
               <div class="csi-box side">Fuel</div>
            </div>
            <div class="csi-branch">
               <div class="csi-arrow-vertical branch-arrow">↓</div>
               <div class="csi-box side">Tyre</div>
            </div>
            <div class="csi-branch">
               <div class="csi-arrow-vertical branch-arrow">↓</div>
               <div class="csi-box side">Sparepart</div>
            </div>
         </div>
         
         <div class="csi-row middle-row bottom-merge">
            <div class="csi-branch"><div class="csi-connector-vertical">│</div></div>
            <div class="csi-branch"><div class="csi-connector-vertical">│</div></div>
            <div class="csi-branch"><div class="csi-connector-vertical">│</div></div>
            <div class="csi-branch"><div class="csi-connector-vertical">│</div></div>
         </div>
         <div class="csi-connector-horizontal merge-line"></div>
         <div class="csi-arrow-vertical final-arrow">↓</div>

         <!-- Core Component -->
         <div class="csi-row center-row">
            <div class="csi-box core">COST<br>& FINANCIAL</div>
         </div>
         <div class="csi-arrow-vertical">↓</div>

         <!-- Final Status -->
         <div class="csi-row center-row">
            <div class="csi-box">Dashboard &<br>Reports</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-integration-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.cost-integration-container {
  max-width: 900px;
  width: 100%;
}
.csi-header {
  text-align: center;
  margin-bottom: 4rem;
}
.csi-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.csi-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.csi-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.center-row {
  justify-content: center;
}
.middle-row {
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}
.csi-branch {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.csi-box {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 150px;
}
.csi-box.side {
  width: 90%;
  padding: 1rem 0.5rem;
}
.csi-box.core {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
  padding: 1.25rem 2rem;
  font-size: 1.125rem;
  max-width: 250px;
}
.csi-arrow-vertical, 
.csi-connector-vertical {
  color: #94a3b8;
  font-size: 1.25rem;
  line-height: 1;
  margin: 0;
  padding: 0.25rem 0;
}
.csi-arrow-vertical {
  font-weight: bold;
}
.csi-connector-horizontal {
  height: 2px;
  background-color: #94a3b8;
  width: calc(100% - 25%);
  max-width: 600px;
}
.merge-line {
  margin-top: -0.25rem;
}

@media (max-width: 768px) {
  .middle-row {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  .csi-branch {
    flex: 0 0 calc(50% - 1rem); 
  }
  .csi-connector-horizontal {
    display: none;
  }
  .branch-arrow {
    display: none;
  }
  .bottom-merge, .merge-line, .final-arrow {
    display: none;
  }
}
</style>
