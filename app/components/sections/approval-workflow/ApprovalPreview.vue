<template>
  <section class="approval-preview-wrapper">
    <div class="approval-preview-container">
      <div class="apr-header" data-aos="fade-up">
        <h2 class="apr-title">Lihat Approval & Workflow dalam FleetSumo</h2>
      </div>

      <div class="apr-gallery">
         <div class="apr-card" data-aos="fade-up" data-aos-delay="100">
             <div class="apr-img-wrapper">
                 <img src="/assets/fitur/approval-workflow/hero.jpg" alt="Daftar Pengajuan/Approval" class="apr-img" />
             </div>
             <div class="apr-info">
                 <h3>01 — Daftar Pengajuan/Approval</h3>
             </div>
         </div>

         <div class="apr-card" data-aos="fade-up" data-aos-delay="150">
             <div class="apr-img-wrapper">
                 <img src="/assets/fitur/approval-workflow/hero.jpg" alt="Detail Pengajuan" class="apr-img" />
             </div>
             <div class="apr-info">
                 <h3>02 — Detail Pengajuan</h3>
             </div>
         </div>

         <div class="apr-card" data-aos="fade-up" data-aos-delay="200">
             <div class="apr-img-wrapper">
                 <img src="/assets/fitur/approval-workflow/hero.jpg" alt="Form Pengajuan" class="apr-img" />
             </div>
             <div class="apr-info">
                 <h3>03 — Form/Halaman Approval</h3>
             </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-preview-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.approval-preview-container {
  max-width: 1200px;
  width: 100%;
}
.apr-header {
  text-align: center;
  margin-bottom: 4rem;
}
.apr-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.apr-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.apr-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 350px;
  transition: transform 0.3s ease;
}
.apr-card:hover {
  transform: translateY(-5px);
}
.apr-img-wrapper {
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
}
.apr-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.apr-card:hover .apr-img {
  transform: scale(1.05);
}
.apr-info {
  padding: 1.5rem;
  text-align: center;
}
.apr-info h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}
</style>
