<template>
  <section class="fuel-capability-wrapper" style="padding:4rem 1rem; background-color:#f1f5f9;">
    <div class="fuel-capability-container" style="max-width:1200px; margin:0 auto; text-align:center;">
      <div class="fuc-header" data-aos="fade-up">
        <h2 style="font-size:2.2rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Alur Logistik Pencatatan BBM</h2>
        <p style="color:#475569; font-size:1.1rem; max-width:700px; margin:0 auto 3rem;">Bagaimana sistem menangkap data kalkulasi liter bahan bakar dari lapangan hingga tabel visualisasi riwayat.</p>
      </div>

      <div class="fuc-workflow" data-aos="fade-up" data-aos-delay="100" style="display:flex; flex-direction:column; gap:1.5rem; max-width:800px; margin:0 auto;">
         
         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">01</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Input Transaksi</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Pengemudi atau operator SPBU menginput jumlah liter yang diisi, melampirkan angka besaran harga beli.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">02</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Detail Pengisian</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Catatan disinkronkan ke dalam dashboard manajerial, menyertakan atribut stasiun isi ulang, truk yang diisi, dan pratinjau bukti nota asli.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">03</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Angka Odometer</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Parameter Odometer (KM indikator di panel mobil) disertakan sewaktu input BBM untuk mengkalkulasi selisih kilometer lintas logistik.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">04</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Riwayat Penggunaan</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Entri baru tadi bersanding pada log *History* abadi pelat nomor unit truk terkait.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">05</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Data Siap Direkap & Dilaporkan</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Kalkulasi seluruh log transaksi dalam sebuah blok rentang waktu berubah menjadi representasi rasio laporan utuh.</p>
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
