<template>
  <section class="fv-evidence-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="fv-evidence-container" style="max-width:1200px; margin:0 auto;">
      <div class="fve-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span class="fve-label" style="color:#10b981; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">PRODUCT CAPABILITY</span>
        <h2 class="fve-title" style="font-size:2.5rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Tampilan Profil Kendaraan</h2>
        <p class="fve-subtitle" style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">Catat dan telusuri seluruh informasi spesifikasi, dokumen KIR, serta jadwal maintenance langsung pada satu halaman profil kendaraan.</p>
      </div>

      <div class="fve-callout-grid" data-aos="fade-up" data-aos-delay="100" style="display:grid; grid-template-columns:1fr 350px; gap:3rem; align-items:center;">
        <div class="fve-visual" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 15px 35px rgba(0,0,0,0.05); background:#f1f5f9;">
           <!-- Evidence Using Real App Screenshot -->
           <img src="/assets/fitur/fleet-vehicle/vehicle-detail.png" alt="Detail Master Data Kendaraan FleetSumo" style="width:100%; display:block; height:auto; object-fit:cover;" />
        </div>
        
        <div class="fve-callout-list" style="display:flex; flex-direction:column; gap:1.5rem;">
           <h3 style="font-size:1.5rem; font-weight:700; color:#1e293b; margin-bottom:0.5rem;">Elemen Data Kendaraan</h3>
           <div class="fve-callout-item" style="padding:1.2rem; background:#f8fafc; border-left:4px solid #10b981; border-radius:0 8px 8px 0;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Spesifikasi & Identitas</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Mencakup nomor polisi, tipe bak karoseri, kapasitas muatan tonase, serta data pendaftaran sasis murni.</p>
           </div>
           
           <div class="fve-callout-item" style="padding:1.2rem; background:#f8fafc; border-left:4px solid #3b82f6; border-radius:0 8px 8px 0;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Status Legalitas (Pajak/KIR)</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Tanggal tenggat waktu perpanjangan surat kendaraan tertera jelas sehingga meminimalisasi risiko penilangan armada aktif.</p>
           </div>
           
           <div class="fve-callout-item" style="padding:1.2rem; background:#f8fafc; border-left:4px solid #f59e0b; border-radius:0 8px 8px 0;">
              <h4 style="font-size:1.1rem; font-weight:600; color:#0f172a; margin-bottom:0.4rem;">Asignasi Supir (Driver)</h4>
              <p style="color:#475569; font-size:0.95rem; line-height:1.5; margin:0;">Koneksi langsung menuju database profil pengemudi yang sedang aktif memegang kunci unit armada.</p>
           </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 900px) {
  .fve-callout-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
