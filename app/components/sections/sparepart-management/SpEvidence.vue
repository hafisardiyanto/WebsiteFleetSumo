<template>
  <section class="sp-evidence-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="sp-evidence-container" style="max-width:1200px; margin:0 auto;">
      <div class="spe-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span class="spe-label" style="color:#10b981; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">VISUAL OVERVIEW</span>
        <h2 class="spe-title" style="font-size:2.4rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Tampilan Identitas & Ketersediaan</h2>
        <p class="spe-subtitle" style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">Monitor kuantitas ketersediaan stok fisik berdampingan dengan identitas logistik.</p>
      </div>

      <div class="spe-callout-grid" data-aos="fade-up" data-aos-delay="100" style="display:grid; grid-template-columns:350px 1fr; gap:3rem; align-items:center;">
        
        <div class="spe-callout-list" style="display:flex; flex-direction:column; gap:1.5rem;">
           <h3 style="font-size:1.5rem; font-weight:700; color:#1e293b; margin-bottom:0.5rem;">Kunci Detail Sparepart</h3>
           <div class="spe-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #10b981; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Nama & Kode Induk</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Nama spesifik komponen didentifikasi dengan kode referensi untuk menghindari duplikasi pelaporan alat.</p>
           </div>
           
           <div class="spe-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #3b82f6; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Indikator Stok</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Rekapan instan kuantitas angka terisisa yang belum disalurkan kepada log kebutuhan mekanik.</p>
           </div>
           
           <div class="spe-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #f59e0b; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Grup Kategori</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Klasifikasi bebas untuk mengelompokkan suku cadang dalam area pemakaian yang ekuivalen (Cth: kelistrikan, sasis, rem).</p>
           </div>
        </div>

        <div class="spe-visual" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 15px 35px rgba(0,0,0,0.05); background:#f1f5f9; display:flex; flex-direction:column; gap:1rem; padding:1.5rem;">
           <img src="/assets/fitur/sparepart/hero.jpg" alt="FleetSumo Sparepart Inventory UI" style="width:100%; display:block; height:auto; object-fit:cover; border-radius:8px; box-shadow:0 5px 15px rgba(0,0,0,0.05);" />
        </div>
        
      </div>
      
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 900px) {
  .spe-callout-grid {
    grid-template-columns: 1fr !important;
  }
  .spe-callout-item { text-align:left !important; border-right:none !important; border-left:4px solid #10b981; border-radius:0 8px 8px 0 !important; }
  .spe-callout-item:nth-child(3) { border-left-color:#3b82f6; }
  .spe-callout-item:nth-child(4) { border-left-color:#f59e0b; }
}
</style>
