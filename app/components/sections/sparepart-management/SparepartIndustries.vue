<template>
  <section class="sparepart-industries-wrapper">
    <div class="sparepart-industries-container">
      <div class="sid-header" data-aos="fade-up">
        <span class="sid-label">UNTUK BERBAGSistem INDUSTRI</span>
        <h2 class="sid-title">Pengelolaan Sparepart untuk BerbagSistem Kebutuhan Armada</h2>
        <p class="sid-subtitle">Setiap perusahaan memiliki kebutuhan inventory yang berbeda. FleetSumo membantu mengelola sparepart sebagSistem bagian dari operasional armada secara lebih terstruktur.</p>
      </div>

      <div class="sid-grid">
         <div class="sid-item" data-aos="fade-up" data-aos-delay="100">
             <div class="sid-img-wrap"><img src="/assets/umum/backgrounds/solution-logistics.jpg" alt="Logistik & Transportasi" class="sid-img" /></div>
             <h3>Logistik & Transportasi</h3>
         </div>
         <div class="sid-item" data-aos="fade-up" data-aos-delay="150">
             <div class="sid-img-wrap"><img src="/assets/umum/backgrounds/solution-mining.jpg" alt="Pertambangan" class="sid-img" /></div>
             <h3>Pertambangan</h3>
         </div>
         <div class="sid-item" data-aos="fade-up" data-aos-delay="200">
             <div class="sid-img-wrap"><img src="/assets/umum/backgrounds/solution-plantation.jpg" alt="Perkebunan" class="sid-img" /></div>
             <h3>Perkebunan</h3>
         </div>
         <div class="sid-item" data-aos="fade-up" data-aos-delay="250">
             <div class="sid-img-wrap"><img src="/assets/umum/backgrounds/solution-construction.jpg" alt="Konstruksi" class="sid-img" /></div>
             <h3>Konstruksi</h3>
         </div>
         <div class="sid-item" data-aos="fade-up" data-aos-delay="300">
             <div class="sid-img-wrap"><img src="/assets/umum/backgrounds/industry-shared-2.jpg" alt="Manufaktur" class="sid-img" /></div>
             <h3>Manufaktur</h3>
         </div>
         <div class="sid-item" data-aos="fade-up" data-aos-delay="350">
             <div class="sid-img-wrap"><img src="/assets/umum/backgrounds/industry-shared-1.jpg" alt="Usaha Armada Lainnya" class="sid-img" /></div>
             <h3>Usaha Armada Lainnya</h3>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-industries-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.sparepart-industries-container {
  max-width: 1200px;
  width: 100%;
}
.sid-header {
  text-align: center;
  margin-bottom: 4rem;
}
.sid-label {
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
.sid-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.sid-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.sid-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (min-width: 768px) {
  .sid-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .sid-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
.sid-item {
  text-align: center;
}
.sid-img-wrap {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 4px solid #f1f5f9;
}
.sid-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.sid-item:hover .sid-img {
  transform: scale(1.1);
}
.sid-item h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  line-height: 1.4;
}
</style>
