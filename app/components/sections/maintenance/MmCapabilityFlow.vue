<template>
  <section class="mm-capability-wrapper" style="padding:4rem 1rem; background-color:#f1f5f9;">
    <div class="mm-capability-container" style="max-width:1200px; margin:0 auto; text-align:center;">
      <div class="mmc-header" data-aos="fade-up">
        <h2 style="font-size:2.2rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Struktur Pekerjaan Perawatan Bengkel</h2>
        <p style="color:#475569; font-size:1.1rem; max-width:700px; margin:0 auto 3rem;">Alur pencatatan dari saat armada dilaporkan rusak hingga perbaikan selesai dibukukan.</p>
      </div>

      <div class="mmc-workflow" data-aos="fade-up" data-aos-delay="100" style="display:flex; flex-direction:column; gap:1.5rem; max-width:800px; margin:0 auto;">
         
         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">01</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Pengajuan (Request)</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Pengajuan tiket keluhan (Work Request). Staf melaporkan adanya indikasi kerusakan/suara bising kepada tim mekanik.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">02</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Detail Cek Kelayakan (Review)</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Mekanik menjabarkan rencana suku cadang yang butuh diganti beserta estimasi perbandingan harga antar vendor.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">03</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Klaim Persetujuan (Approval)</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Otoritasi manajer untuk menyetujui anggaran perbaikan sebelum dibelanjakan ke bengkel terkait.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">04</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Pengerjaan (Work Order)</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Mobil memasuki garasi bengkel, log aktivitas pengerjaan dicatat hingga selesai dikembalikan ke pool operasional.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">05</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Riwayat Akhir (History)</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Seluruh bukti perbaikan disimpan permanen di buku rekapan unit, menjadi bahan acuan jadwal preventif selanjutnya.</p>
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
