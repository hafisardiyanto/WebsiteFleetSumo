<template>
  <section class="approval-integration-wrapper">
    <div class="approval-integration-container">
      <div class="api-header" data-aos="fade-up">
        <h2 class="api-title">Satu Workflow untuk BerbagSistem Aktivitas Operasional</h2>
      </div>

      <div class="api-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <!-- Top -->
         <div class="api-row center-row">
            <div class="api-box core">APPROVAL &<br>WORKFLOW</div>
         </div>
         
         <!-- Middle Branching -->
         <div class="api-connector-vertical">│</div>
         <div class="api-connector-horizontal"></div>
         <div class="api-row middle-row">
            <div class="api-branch">
               <div class="api-arrow-vertical">↓</div>
               <div class="api-box side">Maintenance</div>
            </div>
            <div class="api-branch">
               <div class="api-arrow-vertical">↓</div>
               <div class="api-box side">Cost</div>
            </div>
            <div class="api-branch">
               <div class="api-arrow-vertical">↓</div>
               <div class="api-box side">Sparepart</div>
            </div>
         </div>

         <!-- Bottom Merging -->
         <div class="api-row middle-row bottom-merge">
            <div class="api-branch"><div class="api-connector-vertical">│</div></div>
            <div class="api-branch"><div class="api-connector-vertical">│</div></div>
            <div class="api-branch"><div class="api-connector-vertical">│</div></div>
         </div>
         <div class="api-connector-horizontal merge-line"></div>
         <div class="api-arrow-vertical final-arrow">↓</div>
         
         <!-- Final -->
         <div class="api-row center-row">
            <div class="api-box">Monitoring<br>& Reports</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-integration-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.approval-integration-container {
  max-width: 900px;
  width: 100%;
}
.api-header {
  text-align: center;
  margin-bottom: 4rem;
}
.api-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.api-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.api-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.center-row {
  justify-content: center;
}
.middle-row {
  gap: 2rem;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
}
.api-branch {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.api-box {
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
.api-box.core {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
  padding: 1.25rem 2rem;
  font-size: 1.125rem;
  max-width: 250px;
}
.api-arrow-vertical, 
.api-connector-vertical {
  color: #94a3b8;
  font-size: 1.25rem;
  line-height: 1;
  margin: 0;
  padding: 0.25rem 0;
}
.api-arrow-vertical {
  font-weight: bold;
}
.api-connector-horizontal {
  height: 2px;
  background-color: #94a3b8;
  width: calc(100% - 33.33%);
  max-width: 400px;
}
.merge-line {
  margin-top: -0.25rem;
}

@media (max-width: 640px) {
  .middle-row {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .api-connector-horizontal {
    display: none;
  }
  .api-arrow-vertical {
    margin: 0.5rem 0;
  }
  .bottom-merge, .merge-line, .final-arrow {
    display: none;
  }
}
</style>
