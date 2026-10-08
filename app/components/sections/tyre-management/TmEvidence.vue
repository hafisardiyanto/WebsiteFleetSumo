<template>
  <section class="tm-evidence-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="tm-evidence-container" style="max-width:1200px; margin:0 auto;">
      <div class="tme-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span class="tme-label" style="color:#10b981; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">PRODUCT CAPABILITY</span>
        <h2 class="tme-title" style="font-size:2.4rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Tampilan Log Fisik & Posisi Ban</h2>
        <p class="tme-subtitle" style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">Membedah pencatatan identitas aset dan kondisi fisik ban, termasuk parameter tread depth.</p>
      </div>

      <div class="tme-callout-grid" data-aos="fade-up" data-aos-delay="100" style="display:grid; grid-template-columns:350px 1fr; gap:3rem; align-items:center;">
        
        <div class="tme-callout-list" style="display:flex; flex-direction:column; gap:1.5rem;">
           <h3 style="font-size:1.5rem; font-weight:700; color:#1e293b; margin-bottom:0.5rem;">Kunci Detail Aset</h3>
           <div class="tme-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #10b981; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Identitas Aset (Seri & Merek)</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Nomor seri individual tapak ban melekat pada profil pelacakan mandiri terpisah dari aset kendaraan.</p>
           </div>
           
           <div class="tme-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #3b82f6; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Histori Posisi & Instalasi</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Status mencatat presisi roda sayap kanan/kiri mana yang tengah dipasangi profil sasis ini sekarang.</p>
           </div>
           
           <div class="tme-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #f59e0b; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Status Kondisi Ban (Afkir)</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Level keausan tapak terpantau sebagai parameter batas pelepasan logistik menuju status digudangkan.</p>
           </div>
        </div>

        <div class="tme-visual" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 15px 35px rgba(0,0,0,0.05); background:#f1f5f9; display:flex; flex-direction:column; gap:1rem; padding:1.5rem;">
           <img src="/assets/solusi/tyre-management/tyre-detail-hero.jpg" alt="FleetSumo Tyre Asset Details" style="width:100%; display:block; height:auto; object-fit:cover; border-radius:8px; box-shadow:0 5px 15px rgba(0,0,0,0.05);" />
        </div>
        
      </div>
      
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 900px) {
  .tme-callout-grid {
    grid-template-columns: 1fr !important;
  }
  .tme-callout-item { text-align:left !important; border-right:none !important; border-left:4px solid #10b981; border-radius:0 8px 8px 0 !important; }
  .tme-callout-item:nth-child(3) { border-left-color:#3b82f6; }
  .tme-callout-item:nth-child(4) { border-left-color:#f59e0b; }
}
</style>
