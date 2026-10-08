<template>
  <section class="vm-evidence-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="vm-evidence-container" style="max-width:1200px; margin:0 auto;">
      <div class="vme-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span class="vme-label" style="color:#10b981; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">VISUAL OVERVIEW</span>
        <h2 class="vme-title" style="font-size:2.4rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Tinjauan Basis Profil Mitra</h2>
        <p class="vme-subtitle" style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">Mendokumentasikan korelasi entitas penyuplai eksternal demi mempertahankan kontrol pembukuan atas perbaikan dan pengisian BBM.</p>
      </div>

      <div class="vme-callout-grid" data-aos="fade-up" data-aos-delay="100" style="display:grid; grid-template-columns:350px 1fr; gap:3rem; align-items:center;">
        
        <div class="vme-callout-list" style="display:flex; flex-direction:column; gap:1.5rem;">
           <h3 style="font-size:1.5rem; font-weight:700; color:#1e293b; margin-bottom:0.5rem;">Kunci Klasifikasi Relasi</h3>
           <div class="vme-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #10b981; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Grup Kategori Jasa</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Membagi vendor berdasarkan layanan terapan bengkel servis luar (outsource) maupun penjualan komponen suku cadang lepas.</p>
           </div>
           
           <div class="vme-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #3b82f6; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Arsip Aktivitas Sentral</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Nama vendor menjadi jaring referensi tiap kali mereka disentuh dalam pembuatan form perawatan mobil FleetSumo.</p>
           </div>
           
        </div>

        <div class="vme-visual" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 15px 35px rgba(0,0,0,0.05); background:#f1f5f9; display:flex; flex-direction:column; gap:1rem; padding:1.5rem;">
           <img src="/assets/fitur/vendor/hero.jpg" alt="FleetSumo Vendor Overview Visualization" style="width:100%; display:block; height:auto; object-fit:cover; border-radius:8px; box-shadow:0 5px 15px rgba(0,0,0,0.05);" />
        </div>
        
      </div>
      
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 900px) {
  .vme-callout-grid {
    grid-template-columns: 1fr !important;
  }
  .vme-callout-item { text-align:left !important; border-right:none !important; border-left:4px solid #10b981; border-radius:0 8px 8px 0 !important; }
  .vme-callout-item:nth-child(3) { border-left-color:#3b82f6; }
}
</style>
