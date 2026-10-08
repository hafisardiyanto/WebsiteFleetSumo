<template>
  <section class="cf-capability-wrapper" style="padding:4rem 1rem; background-color:#f1f5f9;">
    <div class="cf-capability-container" style="max-width:1200px; margin:0 auto; text-align:center;">
      <div class="cfc-header" data-aos="fade-up">
        <h2 style="font-size:2.2rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Alur Analisis Biaya Armada</h2>
        <p style="color:#475569; font-size:1.1rem; max-width:700px; margin:0 auto 3rem;">Mengumpulkan kepingan biaya operasional harian yang terpencar untuk dialokasikan secara akurat pada performa biaya setiap kendaraan.</p>
      </div>

      <div class="cfc-workflow" data-aos="fade-up" data-aos-delay="100" style="display:flex; flex-direction:column; gap:1.5rem; max-width:800px; margin:0 auto;">
         
         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">01</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Pendataan Histori Biaya</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Catatan pengeluaran dikonsolidasikan langsung dari berbagai transaksi lapangan seperti perbaikan sasis bengkel maupun distribusi pelumas rutin.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">02</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Kategorisasi Pengeluaran</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Elemen biaya dikelompokkan ke dalam kategori seragam supaya Anda mudah melacak ke mana mayoritas konsumsi anggaran tersebut mengalir.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">03</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Pembebanan ke Kendaraan</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Pengeluaran dipetakan secara terpusat langsung kepada aset kendaraan terkait guna menentukan profitabilitas individu truk dengan akurat.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">04</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Perbandingan Tren Biaya</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Melacak data beban pengeluaran yang muncul pada jenis mobil sejenis sepanjang bulan demi melihat rasio proporsi secara historis.</p>
            </div>
         </div>

         <div class="workflow-step" style="background:#fff; border-radius:8px; padding:1.5rem; display:flex; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.02); text-align:left;">
            <div style="font-size:1.5rem; font-weight:900; color:#10b981; margin-right:1.5rem; padding:15px; border-right:2px solid #e2e8f0;">05</div>
            <div>
               <h4 style="font-size:1.2rem; font-weight:700; color:#1e293b; margin-bottom:0.3rem;">Riwayat Pemantauan Aktual</h4>
               <p style="color:#475569; margin:0; line-height:1.5;">Laporan total rekapitulasi disajikan utuh menjadikannya landasan krusial saat tim penilai aset melakukan penghitungan valuasi pengembalian modal kendaraan.</p>
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
