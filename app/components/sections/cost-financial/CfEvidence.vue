<template>
  <section class="cf-evidence-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="cf-evidence-container" style="max-width:1200px; margin:0 auto;">
      <div class="cfe-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span class="cfe-label" style="color:#10b981; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">PRODUCT EVIDENCE</span>
        <h2 class="cfe-title" style="font-size:2.4rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Transparansi Pemantauan Beban Armada</h2>
        <p class="cfe-subtitle" style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">Catatan laporan pengeluaran diputar dan difilter dengan fokus utama mengevaluasi Total Biaya tertinggi berdasar individu aset secara faktual.</p>
      </div>

      <div class="cfe-callout-grid" data-aos="fade-up" data-aos-delay="100" style="display:grid; grid-template-columns:350px 1fr; gap:3rem; align-items:center;">
        
        <div class="cfe-callout-list" style="display:flex; flex-direction:column; gap:1.5rem;">
           <h3 style="font-size:1.5rem; font-weight:700; color:#1e293b; margin-bottom:0.5rem;">Analisis Vehicle Report</h3>
           <div class="cfe-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #10b981; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Perbandingan Lintas Bulan</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Cermati komparasi Total Biaya bulanan guna menangkap tren membengkak yang tidak normal di tengah operasional stabil armada logistik Anda.</p>
           </div>
           
           <div class="cfe-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #3b82f6; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Kendali Titik Biaya Tertinggi</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Laporan menyajikan pemetaan kendaraan dengan beban pengeluaran terberat guna mengevaluasi perlunya pergantian peremajaan aset truk.</p>
           </div>
           
        </div>

        <div class="cfe-visual" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 15px 35px rgba(0,0,0,0.05); background:#f1f5f9; display:flex; flex-direction:column; gap:1rem; padding:1.5rem;">
           <img src="/assets/fitur/dashboard-reports/vehicle-report.png" alt="FleetSumo Vehicle Status Summary" style="width:100%; display:block; height:auto; object-fit:cover; border-radius:8px; box-shadow:0 5px 15px rgba(0,0,0,0.05);" />
        </div>
        
      </div>
      
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 900px) {
  .cfe-callout-grid {
    grid-template-columns: 1fr !important;
  }
  .cfe-callout-item { text-align:left !important; border-right:none !important; border-left:4px solid #10b981; border-radius:0 8px 8px 0 !important; }
  .cfe-callout-item:nth-child(3) { border-left-color:#3b82f6; }
}
</style>
