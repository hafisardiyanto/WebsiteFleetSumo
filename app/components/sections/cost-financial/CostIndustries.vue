<template>
  <section class="cost-industries-wrapper">
    <div class="cost-industries-container">
      <div class="csi-header" data-aos="fade-up">
        <span class="csi-label">UNTUK BERBAGSistem INDUSTRI</span>
        <h2 class="csi-title">Pengendalian Biaya untuk BerbagSistem Operasional Armada</h2>
        <p class="csi-subtitle">Setiap industri memiliki karakteristik biaya operasional yang berbeda. FleetSumo membantu perusahaan mengelola dan memantau biaya yang berkaitan dengan armada secara lebih terstruktur.</p>
      </div>

      <div class="csi-grid">
         <div class="csi-item" data-aos="fade-up" data-aos-delay="100">
             <div class="csi-img-wrap"><img src="/assets/umum/backgrounds/solution-logistics.jpg" alt="Logistik & Transportasi" class="csi-img" /></div>
             <h3>Logistik & Transportasi</h3>
         </div>
         <div class="csi-item" data-aos="fade-up" data-aos-delay="150">
             <div class="csi-img-wrap"><img src="/assets/umum/backgrounds/solution-mining.jpg" alt="Pertambangan" class="csi-img" /></div>
             <h3>Pertambangan</h3>
         </div>
         <div class="csi-item" data-aos="fade-up" data-aos-delay="200">
             <div class="csi-img-wrap"><img src="/assets/umum/backgrounds/solution-plantation.jpg" alt="Perkebunan" class="csi-img" /></div>
             <h3>Perkebunan</h3>
         </div>
         <div class="csi-item" data-aos="fade-up" data-aos-delay="250">
             <div class="csi-img-wrap"><img src="/assets/umum/backgrounds/solution-construction.jpg" alt="Konstruksi" class="csi-img" /></div>
             <h3>Konstruksi</h3>
         </div>
         <div class="csi-item" data-aos="fade-up" data-aos-delay="300">
             <div class="csi-img-wrap"><img src="/assets/umum/backgrounds/industry-shared-2.jpg" alt="Manufaktur" class="csi-img" /></div>
             <h3>Manufaktur</h3>
         </div>
         <div class="csi-item" data-aos="fade-up" data-aos-delay="350">
             <div class="csi-img-wrap"><img src="/assets/umum/backgrounds/industry-shared-1.jpg" alt="Usaha Armada Lainnya" class="csi-img" /></div>
             <h3>Usaha Armada Lainnya</h3>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-industries-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.cost-industries-container {
  max-width: 1200px;
  width: 100%;
}
.csi-header {
  text-align: center;
  margin-bottom: 4rem;
}
.csi-label {
  display: inline-block;
  padding: 0.25rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}
.csi-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.csi-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.csi-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (min-width: 768px) {
  .csi-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .csi-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
.csi-item {
  text-align: center;
}
.csi-img-wrap {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 4px solid #f1f5f9;
}
.csi-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.csi-item:hover .csi-img {
  transform: scale(1.1);
}
.csi-item h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  line-height: 1.4;
}
</style>
