<template>
  <section class="sparepart-preview-wrapper">
    <div class="sparepart-preview-container">
      <div class="spr-header" data-aos="fade-up">
        <h2 class="spr-title">Lihat Sparepart Management dalam FleetSumo</h2>
      </div>

      <div class="spr-gallery">
         <div class="spr-card" data-aos="fade-up" data-aos-delay="100">
             <div class="spr-img-wrapper">
                 <img src="/assets/fitur/sparepart/hero.jpg" alt="Daftar Sparepart" class="spr-img" />
             </div>
             <div class="spr-info">
                 <h3>01 — Daftar Sparepart</h3>
             </div>
         </div>

         <div class="spr-card" data-aos="fade-up" data-aos-delay="150">
             <div class="spr-img-wrapper">
                 <img src="/assets/fitur/sparepart/hero.jpg" alt="Detail Sparepart" class="spr-img" />
             </div>
             <div class="spr-info">
                 <h3>02 — Detail Sparepart</h3>
             </div>
         </div>

         <div class="spr-card" data-aos="fade-up" data-aos-delay="200">
             <div class="spr-img-wrapper">
                 <img src="/assets/fitur/sparepart/hero.jpg" alt="Form Sparepart" class="spr-img" />
             </div>
             <div class="spr-info">
                 <h3>03 — Form Tambah/Edit Sparepart</h3>
             </div>
         </div>

         <div class="spr-card" data-aos="fade-up" data-aos-delay="250">
             <div class="spr-img-wrapper">
                 <img src="/assets/fitur/sparepart/hero.jpg" alt="Transaksi Stok" class="spr-img" />
             </div>
             <div class="spr-info">
                 <h3>04 — Transaksi/Pergerakan Stok</h3>
             </div>
         </div>

         <div class="spr-card" data-aos="fade-up" data-aos-delay="300">
             <div class="spr-img-wrapper">
                 <img src="/assets/fitur/sparepart/hero.jpg" alt="Dashboard Sparepart" class="spr-img" />
             </div>
             <div class="spr-info">
                 <h3>05 — Dashboard atau Laporan Sparepart</h3>
             </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-preview-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.sparepart-preview-container {
  max-width: 1200px;
  width: 100%;
}
.spr-header {
  text-align: center;
  margin-bottom: 4rem;
}
.spr-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.spr-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.spr-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 350px;
  transition: transform 0.3s ease;
}
.spr-card:hover {
  transform: translateY(-5px);
}
.spr-img-wrapper {
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
}
.spr-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.spr-card:hover .spr-img {
  transform: scale(1.05);
}
.spr-info {
  padding: 1.5rem;
  text-align: center;
}
.spr-info h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}
</style>
