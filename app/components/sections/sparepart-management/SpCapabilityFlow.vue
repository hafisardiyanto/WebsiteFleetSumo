<template>
  <section class="sp-capability-wrapper" style="padding:4rem 1rem; background-color:#f1f5f9;">
    <div class="sp-capability-container" style="max-width:1200px; margin:0 auto; text-align:center;">
      <div class="spc-header" data-aos="fade-up">
        <h2 style="font-size:2.2rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Alur Pemakaian Inventaris Garasi</h2>
        <p style="color:#475569; font-size:1.1rem; max-width:700px; margin:0 auto 3rem;">Sirkulasi pencatatan komponen suku cadang dirancang berjejak pada laporan mekanik setiap kali perbaikan dilakukan.</p>
      </div>

      <div class="spc-workflow" data-aos="fade-up" data-aos-delay="100" style="display:flex; flex-direction:column; gap:1.5rem; max-width:800px; margin:0 auto;">
         
         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">01</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Data Sparepart</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Penginputan basis data komponen (master data suku cadang) mencakup nama parts, identitas unik/kode pabrik, dan kategori logistik.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">02</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Pencatatan Jumlah Stok</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Staf logistik memasukkan rasio ketersediaan satuan/boks secara manual menjadi daftar angka inventaris gudang yang valid.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">03</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Penggunaan</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Mekanik mengambil/meminta keluar barang dari gudang bertepatan dengan berjalannya proses pemeriksaan unit di lapangan bengkel.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">04</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Pengaitan Laporan Maintenance</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Stok suku cadang divariasikan sebagai alat tempel yang dicatat pada form Work Order (WO) Servis perbaikan kendaraan terkait.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">05</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Riwayat Mutasi</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Mengarsipkan log abadi tentang kapan barang tersebut dikeluarkan, unit armada mana yang menerimanya, dan siapa yang merealisasikannya.</p>
            </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 600px) {
  .workflow-step { flex-direction:column; text-align:center; padding:1rem; }
  .workflow-step div:first-child { border-right:none; border-bottom:2px solid #e2e8f0; margin-right:0; margin-bottom:1rem; padding-bottom:10px; }
}
</style>
