<template>
  <section class="cost-preview-wrapper">
    <div class="cost-preview-container">
      <div class="cpr-header" data-aos="fade-up">
        <h2 class="cpr-title">Lihat Cost & Financial dalam FleetSumo</h2>
      </div>

      <div class="cpr-gallery">
         <div class="cpr-card" data-aos="fade-up" data-aos-delay="100">
             <div class="cpr-img-wrapper">
                 <img src="/assets/umum/backgrounds/hero-cost.jpg" alt="Laporan Kendaraan / Cost Report" class="cpr-img" />
             </div>
             <div class="cpr-info">
                 <h3>01 — Laporan Kendaraan</h3>
             </div>
         </div>

         <div class="cpr-card" data-aos="fade-up" data-aos-delay="150">
             <div class="cpr-img-wrapper">
                 <img src="/assets/umum/backgrounds/hero-cost.jpg" alt="Detail Biaya" class="cpr-img" />
             </div>
             <div class="cpr-info">
                 <h3>02 — Detail Biaya</h3>
             </div>
         </div>

         <div class="cpr-card" data-aos="fade-up" data-aos-delay="200">
             <div class="cpr-img-wrapper">
                 <img src="/assets/umum/backgrounds/hero-cost.jpg" alt="Daftar Biaya" class="cpr-img" />
             </div>
             <div class="cpr-info">
                 <h3>03 — Daftar Biaya</h3>
             </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cost-preview-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.cost-preview-container {
  max-width: 1200px;
  width: 100%;
}
.cpr-header {
  text-align: center;
  margin-bottom: 4rem;
}
.cpr-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.cpr-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.cpr-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 350px;
  transition: transform 0.3s ease;
}
.cpr-card:hover {
  transform: translateY(-5px);
}
.cpr-img-wrapper {
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
}
.cpr-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.cpr-card:hover .cpr-img {
  transform: scale(1.05);
}
.cpr-info {
  padding: 1.5rem;
  text-align: center;
}
.cpr-info h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}
</style>
