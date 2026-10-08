<template>
  <section class="dm-usecase-wrapper" style="padding:4rem 1rem; background-color:#f1f5f9;">
    <div class="dm-usecase-container" style="max-width:1200px; margin:0 auto; text-align:center;">
      <div class="uc-header" data-aos="fade-up">
        <h2 style="font-size:2.2rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Transformasi Pengelolaan Data Pengemudi</h2>
        <p style="color:#475569; font-size:1.1rem; max-width:700px; margin:0 auto 3rem;">Mengubah metode pengarsipan manual menjadi sistem informasi operasional yang terpusat.</p>
      </div>

      <div class="uc-table-grid" data-aos="fade-up" data-aos-delay="100" style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; text-align:left;">
        <!-- Sebelum -->
        <div class="uc-card before-card" style="background:#fff; border-radius:12px; padding:2rem; border-top:4px solid #ef4444; box-shadow:0 10px 15px rgba(0,0,0,0.02);">
           <h3 style="font-size:1.3rem; color:#ef4444; margin-bottom:1.5rem; display:flex; align-items:center; gap:0.5rem;"><span style="font-size:1.5rem;">⚠️</span> Sebelum FleetSumo</h3>
           <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:1rem;">
             <li style="display:flex; gap:0.8rem; align-items:flex-start;"><span style="color:#ef4444;">❌</span> Data lisensi SIM, KTP, dan sertifikasi driver tercecer dalam format dokumen kertas.</li>
             <li style="display:flex; gap:0.8rem; align-items:flex-start;"><span style="color:#ef4444;">❌</span> Kesulitan mengingat batas tenggat jatuh tempo pembaruan SIM harian.</li>
             <li style="display:flex; gap:0.8rem; align-items:flex-start;"><span style="color:#ef4444;">❌</span> Pemantauan status ketersediaan driver di pool hanya berbasis grup WhatsApp yang bertumpuk.</li>
           </ul>
        </div>
        
        <!-- Sesudah -->
        <div class="uc-card after-card" style="background:#fff; border-radius:12px; padding:2rem; border-top:4px solid #10b981; box-shadow:0 10px 15px rgba(0,0,0,0.05);">
           <h3 style="font-size:1.3rem; color:#10b981; margin-bottom:1.5rem; display:flex; align-items:center; gap:0.5rem;"><span style="font-size:1.5rem;">✅</span> Dengan FleetSumo</h3>
           <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:1rem;">
             <li style="display:flex; gap:0.8rem; align-items:flex-start;"><span style="color:#10b981;">✔️</span> Database seluruh biodata pengemudi beserta riwayat tugas berada pada satu sistem cloud.</li>
             <li style="display:flex; gap:0.8rem; align-items:flex-start;"><span style="color:#10b981;">✔️</span> Parameter masa berlaku lisensi tercatat rapi sehingga staf operasional bisa memonitor.</li>
             <li style="display:flex; gap:0.8rem; align-items:flex-start;"><span style="color:#10b981;">✔️</span> Status penempatan unit dan ketersediaan ditautkan langsung menjadi pilar informasi operasional tim.</li>
           </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 768px) {
  .uc-table-grid { grid-template-columns: 1fr !important; }
}
</style>
