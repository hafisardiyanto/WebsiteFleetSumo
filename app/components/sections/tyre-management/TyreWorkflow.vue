<template>
  <section class="tyre-workflow-wrapper">
    <div class="tyre-workflow-container">
      <div class="twf-header" data-aos="fade-up">
        <h2 class="twf-title">Kelola Siklus Ban Secara Terstruktur</h2>
      </div>

      <div class="twf-diagram" data-aos="fade-up" data-aos-delay="200">
         <div class="twf-step">
            <div class="twf-box">DATA BAN</div>
            <div class="twf-arrow">↓</div>
         </div>
         <div class="twf-step">
            <div class="twf-box highlight">PEMASANGAN</div>
            <div class="twf-arrow">↓</div>
         </div>
         <div class="twf-step">
            <div class="twf-box">POSISI BAN</div>
            <div class="twf-arrow">↓</div>
         </div>
         <div class="twf-step">
            <div class="twf-box">PENGGUNAAN</div>
            <div class="twf-arrow">↓</div>
         </div>
         <div class="twf-step">
            <div class="twf-box">MONITORING</div>
            <div class="twf-arrow">↓</div>
         </div>
         <div class="twf-step">
            <div class="twf-box highlight">PERUBAHAN POSISI</div>
            <div class="twf-arrow">↓</div>
         </div>
         <div class="twf-step">
            <div class="twf-box highlight">PELEPASAN</div>
            <div class="twf-arrow">↓</div>
         </div>
         <div class="twf-step final">
            <div class="twf-box dark">RIWAYAT BAN</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-workflow-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.tyre-workflow-container {
  max-width: 800px;
  width: 100%;
}
.twf-header {
  text-align: center;
  margin-bottom: 4rem;
}
.twf-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.twf-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.twf-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.twf-box {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.05em;
  width: 100%;
  max-width: 320px;
  text-align: center;
  margin: 0.5rem 0;
}
.twf-box.highlight {
  background: #e0f2fe;
  border-color: #7dd3fc;
  color: #0369a1;
}
.twf-box.dark {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
}
.twf-arrow {
  color: #94a3b8;
  font-size: 1.5rem;
  font-weight: bold;
}
.twf-step.final .twf-arrow {
  display: none;
}
</style>
