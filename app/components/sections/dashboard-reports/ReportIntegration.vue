<template>
  <section class="report-integration-wrapper">
    <div class="report-integration-container">
      <div class="rpi-header" data-aos="fade-up">
        <h2 class="rpi-title">Dashboard Terhubung dengan Aktivitas Armada</h2>
        <p class="rpi-subtitle">Informasi pada dashboard dan laporan berasal dari aktivitas yang dikelola melalui berbagSistem modul FleetSumo.</p>
      </div>

      <div class="rpi-layout">
         
         <div class="rpi-content" data-aos="fade-right" data-aos-delay="100">
             <div class="rpi-item">
                 <h4>Fleet & Vehicle</h4>
                 <p>Data kendaraan menjadi salah satu dasar informasi armada.</p>
             </div>
             <div class="rpi-item">
                 <h4>Maintenance</h4>
                 <p>Aktivitas maintenance dapat menjadi bagian dari informasi monitoring.</p>
             </div>
             <div class="rpi-item">
                 <h4>Fuel</h4>
                 <p>Data BBM dapat digunakan untuk melihat aktivitas dan biaya kendaraan.</p>
             </div>
             <div class="rpi-item">
                 <h4>Tyre</h4>
                 <p>Informasi ban dapat digunakan untuk memantau kondisi dan riwayat penggunaan.</p>
             </div>
             <div class="rpi-item">
                 <h4>Sparepart</h4>
                 <p>Aktivitas sparepart dapat mendukung informasi operasional armada.</p>
             </div>
             <div class="rpi-item">
                 <h4>Cost & Financial</h4>
                 <p>Informasi biaya membantu perusahaan melihat kondisi biaya kendaraan.</p>
             </div>
         </div>

         <div class="rpi-diagram" data-aos="fade-left" data-aos-delay="200">
             
             <!-- Diagram Layout -->
             <div class="diagram-grid">
               <!-- Left Column -->
               <div class="col-left">
                 <div class="diagram-node side">Fleet & Vehicle</div>
                 <div class="diagram-node side">Tyre</div>
                 <div class="diagram-node side">Sparepart</div>
               </div>

               <!-- Center Column -->
               <div class="col-center">
                 <div class="diagram-node">Maintenance</div>
                 <div class="diagram-connector-down">↓</div>
                 <div class="diagram-node core">DASHBOARD &<br>REPORTS</div>
                 <div class="diagram-connector-up">↑</div>
                 <div class="diagram-node">Cost</div>
               </div>

               <!-- Right Column -->
               <div class="col-right">
                 <div class="diagram-node side">Fuel</div>
               </div>
             </div>

             <!-- SVG Lines overlay for complex paths would go here, 
                  but for simplicity and responsive design, we place decorative lines contextually. -->
             
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.report-integration-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.report-integration-container {
  max-width: 1200px;
  width: 100%;
}
.rpi-header {
  text-align: center;
  margin-bottom: 4rem;
}
.rpi-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.rpi-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}

.rpi-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .rpi-layout {
    grid-template-columns: 1fr 1fr;
  }
}

.rpi-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.rpi-item h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.25rem;
}
.rpi-item p {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}

.rpi-diagram {
  background: #ffffff;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  display: flex;
  justify-content: center;
}
.diagram-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
}
.col-left, .col-center, .col-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.diagram-node {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 1rem;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  text-align: center;
  min-width: 120px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: relative;
}
.diagram-node.side {
  background: #ffffff;
}
.diagram-node.core {
  background: #1e293b;
  border-color: #0f172a;
  color: #ffffff;
  padding: 1.5rem;
  font-size: 1.125rem;
}
.diagram-connector-down,
.diagram-connector-up {
  color: #94a3b8;
  font-weight: bold;
  font-size: 1.5rem;
}
@media (max-width: 768px) {
  .diagram-grid {
    flex-direction: column;
  }
}
</style>
