<template>
  <section class="tyre-industries-wrapper">
    <div class="tyre-industries-container">
      <div class="tid-header" data-aos="fade-up">
        <span class="tid-label">UNTUK BERBAGSistem INDUSTRI</span>
        <h2 class="tid-title">Pengelolaan Ban untuk BerbagSistem Jenis Armada</h2>
        <p class="tid-subtitle">Kebutuhan pengelolaan ban dapat berbeda pada setiap industri. FleetSumo membantu perusahaan mengelola data dan aktivitas ban sebagSistem bagian dari operasional armada.</p>
      </div>

      <div class="tid-grid">
         <div class="tid-item" data-aos="fade-up" data-aos-delay="100">
             <div class="tid-img-wrap"><img src="/assets/umum/backgrounds/solution-logistics.jpg" alt="Logistik & Transportasi" class="tid-img" /></div>
             <h3>Logistik & Transportasi</h3>
         </div>
         <div class="tid-item" data-aos="fade-up" data-aos-delay="150">
             <div class="tid-img-wrap"><img src="/assets/umum/backgrounds/solution-mining.jpg" alt="Pertambangan" class="tid-img" /></div>
             <h3>Pertambangan</h3>
         </div>
         <div class="tid-item" data-aos="fade-up" data-aos-delay="200">
             <div class="tid-img-wrap"><img src="/assets/umum/backgrounds/solution-plantation.jpg" alt="Perkebunan" class="tid-img" /></div>
             <h3>Perkebunan</h3>
         </div>
         <div class="tid-item" data-aos="fade-up" data-aos-delay="250">
             <div class="tid-img-wrap"><img src="/assets/umum/backgrounds/solution-construction.jpg" alt="Konstruksi" class="tid-img" /></div>
             <h3>Konstruksi</h3>
         </div>
         <div class="tid-item" data-aos="fade-up" data-aos-delay="300">
             <div class="tid-img-wrap"><img src="/assets/umum/backgrounds/industry-shared-2.jpg" alt="Manufaktur" class="tid-img" /></div>
             <h3>Manufaktur</h3>
         </div>
         <div class="tid-item" data-aos="fade-up" data-aos-delay="350">
             <div class="tid-img-wrap"><img src="/assets/umum/backgrounds/industry-shared-1.jpg" alt="Usaha Armada Lainnya" class="tid-img" /></div>
             <h3>Usaha Armada Lainnya</h3>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-industries-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.tyre-industries-container {
  max-width: 1200px;
  width: 100%;
}
.tid-header {
  text-align: center;
  margin-bottom: 4rem;
}
.tid-label {
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
.tid-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.tid-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.tid-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (min-width: 768px) {
  .tid-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .tid-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
.tid-item {
  text-align: center;
}
.tid-img-wrap {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 4px solid #f1f5f9;
}
.tid-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.tid-item:hover .tid-img {
  transform: scale(1.1);
}
.tid-item h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  line-height: 1.4;
}
</style>
