<template>
  <section class="mm-evidence-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="mm-evidence-container" style="max-width:1200px; margin:0 auto;">
      <div class="mme-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span class="mme-label" style="color:#10b981; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">PRODUCT CAPABILITY</span>
        <h2 class="mme-title" style="font-size:2.4rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Tampilan Rekap Persetujuan Bengkel</h2>
        <p class="mme-subtitle" style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">FleetSumo menertibkan tagihan dan riwayat suku cadang menjadi data logistik yang rapi.</p>
      </div>

      <div class="mme-callout-grid" data-aos="fade-up" data-aos-delay="100" style="display:grid; grid-template-columns:350px 1fr; gap:3rem; align-items:center;">
        
        <div class="mme-callout-list" style="display:flex; flex-direction:column; gap:1.5rem;">
           <h3 style="font-size:1.5rem; font-weight:700; color:#1e293b; margin-bottom:0.5rem;">Kunci Detail Dokumen</h3>
           <div class="mme-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #10b981; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Status Otorisasi Dokumen</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Status berlabel menunjukkan tingkatan klaim surat perbaikan bengkel apa sudah di-Approve manajer atau masih Draft.</p>
           </div>
           
           <div class="mme-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #3b82f6; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Informasi Pembebanan Kendaraan</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Keterkaitan tagihan mekanik dilekatkan ke nomor polisi truk spesifik tanpa bingung siapa yang membawa mobil tersebut.</p>
           </div>
           
           <div class="mme-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #f59e0b; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Daftar Suku Cadang Ditukar</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Transparansi item material apa saja yang dikonsumsi bengkel terpampang berderet di rekaman perbaikan.</p>
           </div>
        </div>

        <div class="mme-visual" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 15px 35px rgba(0,0,0,0.05); background:#f1f5f9; display:flex; flex-direction:column; gap:1rem; padding:1.5rem;">
           <img src="/assets/fitur/maintenance/maintenance-approval.png" alt="Approval Bengkel Management FleetSumo" style="width:100%; display:block; height:auto; object-fit:cover; border-radius:8px; box-shadow:0 5px 15px rgba(0,0,0,0.05);" />
           <img src="/assets/fitur/maintenance/maintenance-history.png" alt="Riwayat Servis Armada FleetSumo" style="width:100%; display:block; height:auto; object-fit:cover; border-radius:8px; box-shadow:0 5px 15px rgba(0,0,0,0.05);" />
        </div>
        
      </div>
      
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 900px) {
  .mme-callout-grid {
    grid-template-columns: 1fr !important;
  }
  .mme-callout-item { text-align:left !important; border-right:none !important; border-left:4px solid #10b981; border-radius:0 8px 8px 0 !important; }
  .mme-callout-item:nth-child(3) { border-left-color:#3b82f6; }
  .mme-callout-item:nth-child(4) { border-left-color:#f59e0b; }
}
</style>
