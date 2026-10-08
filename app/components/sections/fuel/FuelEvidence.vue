<template>
  <section class="fuel-evidence-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="fuel-evidence-container" style="max-width:1200px; margin:0 auto;">
      <div class="fue-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span class="fue-label" style="color:#10b981; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">PRODUCT CAPABILITY</span>
        <h2 class="fue-title" style="font-size:2.4rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Tampilan Rekap Konsumsi Liter</h2>
        <p class="fue-subtitle" style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">FleetSumo menertibkan catatan bahan bakar ke dalam tabel valid dengan parameter jarak mutlak.</p>
      </div>

      <div class="fue-callout-grid" data-aos="fade-up" data-aos-delay="100" style="display:grid; grid-template-columns:350px 1fr; gap:3rem; align-items:center;">
        
        <div class="fue-callout-list" style="display:flex; flex-direction:column; gap:1.5rem;">
           <h3 style="font-size:1.5rem; font-weight:700; color:#1e293b; margin-bottom:0.5rem;">Kunci Detail Dokumen</h3>
           <div class="fue-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #10b981; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Informasi Nilai Liter</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Status kuantitas besaran volume bahan bakar langsung tertera jelas sebelum dikalikan harga pom bensin vendor terkait.</p>
           </div>
           
           <div class="fue-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #3b82f6; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Riwayat Pelat Kendaraan</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Menghubungkan langsung nota transaksi dari dompet driver kepada catatan mobil/unit fisik yang diisi bensin secara aktual.</p>
           </div>
           
           <div class="fue-callout-item" style="padding:1.2rem; background:#f8fafc; border-right:4px solid #f59e0b; border-radius:8px 0 0 8px; text-align:right;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Lampiran Dokumen Struk</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Slot tautan dokumen visualisasi unggahan setruk kertas dari supir tersedia berdampingan pada baris entri.</p>
           </div>
        </div>

        <div class="fue-visual" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 15px 35px rgba(0,0,0,0.05); background:#f1f5f9; display:flex; flex-direction:column; gap:1rem; padding:1.5rem;">
           <img src="/assets/fitur/fuel/fuel-detail.png" alt="Fuel Detail Management FleetSumo" style="width:100%; display:block; height:auto; object-fit:cover; border-radius:8px; box-shadow:0 5px 15px rgba(0,0,0,0.05);" />
           <img src="/assets/fitur/fuel/fuel-list.png" alt="Daftar History BBM Armada" style="width:100%; display:block; height:auto; object-fit:cover; border-radius:8px; box-shadow:0 5px 15px rgba(0,0,0,0.05);" />
        </div>
        
      </div>
      
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 900px) {
  .fue-callout-grid {
    grid-template-columns: 1fr !important;
  }
  .fue-callout-item { text-align:left !important; border-right:none !important; border-left:4px solid #10b981; border-radius:0 8px 8px 0 !important; }
  .fue-callout-item:nth-child(3) { border-left-color:#3b82f6; }
  .fue-callout-item:nth-child(4) { border-left-color:#f59e0b; }
}
</style>
