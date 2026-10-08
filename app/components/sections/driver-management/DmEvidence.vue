<template>
  <section class="dm-evidence-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="dm-evidence-container" style="max-width:1200px; margin:0 auto;">
      <div class="dme-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span class="dme-label" style="color:#2563eb; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">PRODUCT CAPABILITY</span>
        <h2 class="dme-title" style="font-size:2.5rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Tampilan Informasi Pengemudi</h2>
        <p class="dme-subtitle" style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">FleetSumo memberikan antarmuka yang terstruktur untuk mengumpulkan dan memvisualisasikan seluruh data pengemudi di lapangan.</p>
      </div>

      <!-- Screenshot with Callouts (Detail View) -->
      <div class="dme-callout-grid" data-aos="fade-up" data-aos-delay="100" style="display:grid; grid-template-columns:1fr 350px; gap:3rem; align-items:center;">
        <div class="dme-visual" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 15px 35px rgba(0,0,0,0.05); background:#f1f5f9;">
           <img src="/assets/fitur/driver-management/driver-detail.png" alt="Detail Driver Management FleetSumo" style="width:100%; display:block; height:auto; object-fit:cover;" />
        </div>
        
        <div class="dme-callout-list" style="display:flex; flex-direction:column; gap:1.5rem;">
           <h3 style="font-size:1.5rem; font-weight:700; color:#1e293b; margin-bottom:0.5rem;">Elemen Data Utama</h3>
           <div class="dme-callout-item" style="padding:1.2rem; background:#f8fafc; border-left:4px solid #3b82f6; border-radius:0 8px 8px 0;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Informasi Lengkap Profil</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Merekam data pribadi, kontak darurat, usia lisensi (SIM), dan lokasi depot asignment.</p>
           </div>
           
           <div class="dme-callout-item" style="padding:1.2rem; background:#f8fafc; border-left:4px solid #10b981; border-radius:0 8px 8px 0;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Status Ketersediaan Driver</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Label operasional terverifikasi apakah sedang *Available*, *On Trip*, atau *Off Duty*.</p>
           </div>
           
           <div class="dme-callout-item" style="padding:1.2rem; background:#f8fafc; border-left:4px solid #f59e0b; border-radius:0 8px 8px 0;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Tautan ke Histori Armada</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Menampilkan rekapan unit mana saja yang pernah dipasangkan dengan profil pengemudi.</p>
           </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 900px) {
  .dme-callout-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
