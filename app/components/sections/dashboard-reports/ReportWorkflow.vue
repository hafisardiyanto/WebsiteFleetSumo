<template>
  <section class="report-workflow-wrapper">
    <div class="report-workflow-container">
      <div class="rpw-header" data-aos="fade-up">
        <h2 class="rpw-title">Dari Data Operasional Menjadi Informasi</h2>
      </div>

      <div class="rpw-diagram" data-aos="fade-up" data-aos-delay="200">
         
         <div class="rpw-data-grid">
            <div class="rpw-data-box">Fleet</div>
            <div class="rpw-data-box">Maintenance</div>
            <div class="rpw-data-box">Fuel</div>
            <div class="rpw-data-box">Tyre</div>
            <div class="rpw-data-box">Sparepart</div>
            <div class="rpw-data-box">Cost</div>
         </div>
         
         <div class="rpw-arrow-group">
            <div class="rpw-arrow-vertical multi">↓</div>
         </div>

         <div class="rpw-step">
            <div class="rpw-box highlight">INTEGRASI DATA</div>
            <div class="rpw-arrow">↓</div>
         </div>
         <div class="rpw-step">
            <div class="rpw-box">DASHBOARD</div>
            <div class="rpw-arrow">↓</div>
         </div>
         <div class="rpw-step">
            <div class="rpw-box">REPORTING</div>
            <div class="rpw-arrow">↓</div>
         </div>
         <div class="rpw-step">
            <div class="rpw-box highlight-alt">MONITORING</div>
            <div class="rpw-arrow">↓</div>
         </div>
         <div class="rpw-step final">
            <div class="rpw-box dark">EVALUASI</div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.report-workflow-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.report-workflow-container {
  max-width: 900px;
  width: 100%;
}
.rpw-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rpw-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.rpw-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rpw-data-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 800px;
  margin-bottom: 1rem;
}
.rpw-data-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  color: #475569;
  font-weight: 600;
  font-size: 0.95rem;
}
.rpw-arrow-group {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
}
.rpw-arrow-vertical.multi {
  font-size: 1.5rem;
  color: #94a3b8;
  font-weight: bold;
}

.rpw-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.rpw-box {
  background: #ffffff;
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
  margin: 0.25rem 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.rpw-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
.rpw-box.highlight {
  background: #e0f2fe;
  border-color: #7dd3fc;
  color: #0369a1;
}
.rpw-box.highlight-alt {
  background: #2563eb;
  border-color: #1d4ed8;
  color: #ffffff;
}
.rpw-box.dark {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
}
.rpw-arrow {
  color: #94a3b8;
  font-size: 1.5rem;
  font-weight: bold;
  animation: pulseArrow 2s infinite;
}
@keyframes pulseArrow {
  0%, 100% { opacity: 0.5; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(5px); }
}
.rpw-step.final .rpw-arrow {
  display: none;
}
</style>
