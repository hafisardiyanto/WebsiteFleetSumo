<template>
  <section class="mon-preview-wrapper" style="padding:4rem 1rem; background-color:#f8fafc;">
    <div class="mon-preview-container" style="max-width:1200px; margin:0 auto; text-align:center;">
      <div class="mpv-header" data-aos="fade-up">
        <span class="mpv-label" style="color:#2563eb; font-weight:600; text-transform:uppercase; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem; font-size:0.9rem;">PRODUCT EVIDENCE</span>
        <h2 class="mpv-title" style="font-size:2.5rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Visualisasi Laporan dan Monitoring</h2>
        <p class="mpv-subtitle" style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto 3rem; line-height:1.6;">Layar antarmuka pelaporan dan kontrol operasional armada yang menghubungkan rekapan finansial dengan aktivitas harian secara transparan.</p>
      </div>

      <div class="mpv-grid" data-aos="fade-up" data-aos-delay="200" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap:2rem;">
         <div class="mpv-card" style="background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
            <div class="mpv-img-wrap" style="height:250px; background:#f1f5f9; display:flex; align-items:center; justify-content:center; overflow:hidden;">
               <img src="/assets/fitur/fleet-vehicle/vehicle-dashboard.jpg" alt="Vehicle Dashboard Overview FleetSumo" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <div class="mpv-info" style="padding:1.5rem; text-align:left;">
               <h4 style="font-size:1.25rem; font-weight:600; color:#1e293b; margin-bottom:0.5rem;">Vehicle Dashboard</h4>
               <p style="color:#64748b; line-height:1.5;">Gambaran ringkas persebaran unit-unit operasional aktif.</p>
            </div>
         </div>

         <div class="mpv-card" style="background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
            <div class="mpv-img-wrap" style="height:250px; background:#f1f5f9; display:flex; align-items:center; justify-content:center; overflow:hidden;">
               <img src="/assets/fitur/fuel/fuel-dashboard.png" alt="Fuel Status Dashboard FleetSumo" style="width:100%; height:100%; object-fit:cover; object-position:top;" />
            </div>
            <div class="mpv-info" style="padding:1.5rem; text-align:left;">
               <h4 style="font-size:1.25rem; font-weight:600; color:#1e293b; margin-bottom:0.5rem;">Fuel Dashboard</h4>
               <p style="color:#64748b; line-height:1.5;">Laporan serapan transaksi dan rincian performa bahan bakar.</p>
            </div>
         </div>

         <div class="mpv-card" style="background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
            <div class="mpv-img-wrap" style="height:250px; background:#f1f5f9; display:flex; align-items:center; justify-content:center; overflow:hidden;">
               <img src="/assets/fitur/maintenance/maintenance-detail.png" alt="Detail Rekapan Servis Bengkel FleetSumo" style="width:100%; height:100%; object-fit:cover; object-position:top;" />
            </div>
            <div class="mpv-info" style="padding:1.5rem; text-align:left;">
               <h4 style="font-size:1.25rem; font-weight:600; color:#1e293b; margin-bottom:0.5rem;">Detail Maintenance</h4>
               <p style="color:#64748b; line-height:1.5;">Rekaman data faktur penggantian suku cadang dan jasa bengkel rute.</p>
            </div>
         </div>

         <div class="mpv-card" style="background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
            <div class="mpv-img-wrap" style="height:250px; background:#f1f5f9; display:flex; align-items:center; justify-content:center; overflow:hidden;">
               <img src="/assets/fitur/dashboard-reports/vehicle-report.png" alt="Laporan Finansial Tutup Buku FleetSumo" style="width:100%; height:100%; object-fit:cover; object-position:top;" />
            </div>
            <div class="mpv-info" style="padding:1.5rem; text-align:left;">
               <h4 style="font-size:1.25rem; font-weight:600; color:#1e293b; margin-bottom:0.5rem;">Vehicle Report Summary</h4>
               <p style="color:#64748b; line-height:1.5;">Rekapitulasi beban biaya menyeluruh untuk kalkulasi profitabilitas transportasi.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 768px) {
  .mpv-grid {
     grid-template-columns: 1fr !important;
  }
}
</style>
