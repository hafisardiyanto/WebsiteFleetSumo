<template>
  <section class="report-industries-wrapper">
    <div class="report-industries-container">
      <div class="ri-header" data-aos="fade-up">
        <span class="ri-label">UNTUK BERBAGSistem INDUSTRI</span>
        <h2 class="ri-title">Dashboard dan Laporan untuk BerbagSistem Kebutuhan Armada</h2>
        <p class="ri-subtitle">Setiap perusahaan memiliki karakteristik operasional yang berbeda. FleetSumo membantu menyajikan informasi armada sesuSistem dengan data dan aktivitas yang dikelola perusahaan.</p>
      </div>

      <div class="ri-grid">
         <div class="ri-item" data-aos="fade-up" data-aos-delay="100">
             <div class="ri-img-wrap"><img src="/assets/umum/backgrounds/solution-logistics.jpg" alt="Logistik & Transportasi" class="ri-img" /></div>
             <h3>Logistik & Transportasi</h3>
             <p>Monitoring kendaraan dan aktivitas operasional armada.</p>
         </div>
         <div class="ri-item" data-aos="fade-up" data-aos-delay="150">
             <div class="ri-img-wrap"><img src="/assets/umum/backgrounds/solution-mining.jpg" alt="Pertambangan" class="ri-img" /></div>
             <h3>Pertambangan</h3>
             <p>Mendukung monitoring armada yang digunakan dalam aktivitas operasional.</p>
         </div>
         <div class="ri-item" data-aos="fade-up" data-aos-delay="200">
             <div class="ri-img-wrap"><img src="/assets/umum/backgrounds/solution-plantation.jpg" alt="Perkebunan" class="ri-img" /></div>
             <h3>Perkebunan</h3>
             <p>Membantu pengelolaan dan monitoring kendaraan operasional.</p>
         </div>
         <div class="ri-item" data-aos="fade-up" data-aos-delay="250">
             <div class="ri-img-wrap"><img src="/assets/umum/backgrounds/solution-construction.jpg" alt="Konstruksi" class="ri-img" /></div>
             <h3>Konstruksi</h3>
             <p>Mendukung pemantauan kendaraan dan biaya operasional.</p>
         </div>
         <div class="ri-item" data-aos="fade-up" data-aos-delay="300">
             <div class="ri-img-wrap"><img src="/assets/umum/backgrounds/industry-shared-2.jpg" alt="Manufaktur" class="ri-img" /></div>
             <h3>Manufaktur</h3>
             <p>Membantu monitoring armada pendukung aktivitas perusahaan.</p>
         </div>
         <div class="ri-item" data-aos="fade-up" data-aos-delay="350">
             <div class="ri-img-wrap"><img src="/assets/umum/backgrounds/industry-shared-1.jpg" alt="Usaha Armada Lainnya" class="ri-img" /></div>
             <h3>Usaha Armada Lainnya</h3>
             <p>Dapat digunakan untuk berbagSistem kebutuhan pengelolaan armada.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.report-industries-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.report-industries-container {
  max-width: 1200px;
  width: 100%;
}
.ri-header {
  text-align: center;
  margin-bottom: 4rem;
}
.ri-label {
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
.ri-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.ri-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.ri-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (min-width: 768px) {
  .ri-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.ri-item {
  text-align: center;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease;
}
.ri-item:hover {
  transform: translateY(-5px);
  background: #fff;
  border-color: #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
}
.ri-img-wrap {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  border: 4px solid #fff;
}
.ri-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.ri-item:hover .ri-img {
  transform: scale(1.1);
}
.ri-item h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.ri-item p {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
</style>
