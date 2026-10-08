<template>
  <section class="tyre-preview-wrapper">
    <div class="tyre-preview-container">
      <div class="tpr-header" data-aos="fade-up">
        <span style="display:inline-block; padding: 0.25rem 1rem; background:rgba(59, 130, 246, 0.1); color:#3b82f6; font-size:0.875rem; font-weight:700; border-radius:20px; margin-bottom:1rem; letter-spacing:0.05em;">VISUAL OVERVIEW</span>
        <h2 class="tpr-title">Tampilan Antarmuka (Konsep Visual)</h2>
      </div>

      <div class="mpv-layout" style="display:flex; flex-direction:column; gap:4rem; margin-top:2rem;">
         
         <div class="preview-stack">
            <h3 style="color:#0f172a; margin-bottom:8px; text-align:center;">Daftar Kepemilikan (Inventory) Ban</h3>
            <p style="color:#64748b; margin-bottom:20px; text-align:center;">Monitor secara terpadu ban mana yang masih menjadi stok, yang sedang beroperasi di jalan, maupun yang sudah dilepas gantung/afkir.</p>
            <div class="mpv-mockup" data-aos="fade-up" data-aos-delay="100" style="max-width:960px; margin:0 auto; width:100%;">
                <img src="/assets/solusi/tyre-management/tyre-detail-hero.jpg" alt="Daftar Aset Ban FleetSumo" class="mpv-img" style="width:100%; border-radius:12px; box-shadow: 0px 4px 20px rgba(0,0,0,0.1);" />
            </div>
         </div>

         <div class="preview-stack">
            <h3 style="color:#0f172a; margin-bottom:8px; text-align:center;">Detail Registrasi Identitas dan Data Fisik</h3>
            <p style="color:#64748b; margin-bottom:20px; text-align:center;">Lacak kronologis pemasangan secara seri per seri beserta kedalaman tread (taplak alur) terakhir yang dilaporkan montir.</p>
            <div class="mpv-mockup" data-aos="fade-up" data-aos-delay="200" style="max-width:960px; margin:0 auto; width:100%;">
                <img src="/assets/solusi/tyre-management/tyre-detail-hero.jpg" alt="Detail Info Ban FleetSumo" class="mpv-img" style="width:100%; border-radius:12px; box-shadow: 0px 4px 20px rgba(0,0,0,0.1);" />
            </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-preview-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.tyre-preview-container {
  max-width: 1200px;
  width: 100%;
}
.tpr-header {
  text-align: center;
  margin-bottom: 4rem;
}
.tpr-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.tpr-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.tpr-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 350px;
  transition: transform 0.3s ease;
}
.tpr-card:hover {
  transform: translateY(-5px);
}
.tpr-img-wrapper {
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
}
.tpr-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.tpr-card:hover .tpr-img {
  transform: scale(1.05);
}
.tpr-info {
  padding: 1.5rem;
  text-align: center;
}
.tpr-info h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}
</style>
