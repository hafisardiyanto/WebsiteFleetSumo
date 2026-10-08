<template>
  <section class="vendor-preview-wrapper">
    <div class="vendor-preview-container">
      <div class="vpr-header" data-aos="fade-up">
        <h2 class="vpr-title">Lihat Vendor Management dalam FleetSumo</h2>
      </div>

      <div class="vpr-gallery">
         <div class="vpr-card" data-aos="fade-up" data-aos-delay="100">
             <div class="vpr-img-wrapper">
                 <img src="/assets/fitur/vendor/hero.jpg" alt="Daftar Vendor" class="vpr-img" />
             </div>
             <div class="vpr-info">
                 <h3>01 — Daftar Vendor</h3>
             </div>
         </div>

         <div class="vpr-card" data-aos="fade-up" data-aos-delay="150">
             <div class="vpr-img-wrapper">
                 <img src="/assets/fitur/vendor/hero.jpg" alt="Detail Vendor" class="vpr-img" />
             </div>
             <div class="vpr-info">
                 <h3>02 — Detail Vendor</h3>
             </div>
         </div>

         <div class="vpr-card" data-aos="fade-up" data-aos-delay="200">
             <div class="vpr-img-wrapper">
                 <img src="/assets/fitur/vendor/hero.jpg" alt="Form Tambah/Edit Vendor" class="vpr-img" />
             </div>
             <div class="vpr-info">
                 <h3>03 — Form Tambah/Edit Vendor</h3>
             </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-preview-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.vendor-preview-container {
  max-width: 1200px;
  width: 100%;
}
.vpr-header {
  text-align: center;
  margin-bottom: 4rem;
}
.vpr-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.vpr-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.vpr-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 350px;
  transition: transform 0.3s ease;
}
.vpr-card:hover {
  transform: translateY(-5px);
}
.vpr-img-wrapper {
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
}
.vpr-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.vpr-card:hover .vpr-img {
  transform: scale(1.05);
}
.vpr-info {
  padding: 1.5rem;
  text-align: center;
}
.vpr-info h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}
</style>
