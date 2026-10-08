<template>
  <section class="aw-capability-wrapper" style="padding:4rem 1rem; background-color:#f1f5f9;">
    <div class="aw-capability-container" style="max-width:1200px; margin:0 auto; text-align:center;">
      <div class="awc-header" data-aos="fade-up">
        <h2 style="font-size:2.2rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Mekanisme Persetujuan Multi-Proses</h2>
        <p style="color:#475569; font-size:1.1rem; max-width:700px; margin:0 auto 3rem;">Mengamankan standar keputusan perusahaan di berbagai departemen dengan kontrol bertingkat—mulai dari perbaikan aset hingga logistik.</p>
      </div>

      <div class="awc-workflow" data-aos="fade-up" data-aos-delay="100" style="display:flex; flex-direction:column; gap:1.5rem; max-width:800px; margin:0 auto;">
         
         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">01</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Pengajuan (Request)</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Pembuatan form lintas modul dimulai dengan pelaporan dasar, contohnya: pengusulan Work Order servis, permintaan sparepart, maupun insiden armada di lapangan.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">02</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Review</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Supervisor bertugas memeriksa kelengkapan administrasi pengusul seperti spesifikasi pekerjaan dan alasan kebutuhan komponen sebelum diteruskan.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">03</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Persetujuan Pejabat Unit (Approval)</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Instansi manajemen berwenang (misal manajer operasional) memberikan otorisasi penyetujuan final atau modifikasi tindakan prioritas.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">04</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Status</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Transisi status otomatis akan memperbarui form ke tahap berikutnya seperti <em>Approved</em> atau <em>Dalam Pengerjaan</em>, bergantung pada relasi modul terkait.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">05</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Riwayat Persetujuan</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Rekaman permanen tanggal persetujuan dan identitas pejabat eksekutor menjadi acuan integritas dan audit sistem penugasan internal perusahaan.</p>
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
