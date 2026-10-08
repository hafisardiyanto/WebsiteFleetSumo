<template>
  <section class="cost-history-wrapper">
    <div class="cost-history-container">
      <div class="cost-history-header" data-aos="fade-up">
        <h2 class="cost-history-title">Telusuri Biaya dari Aktivitas hingga Riwayat</h2>
        <p class="cost-history-subtitle">
          Data historis membantu perusahaan memahami bagaimana biaya armada terakumulasi dari waktu ke waktu secara presisi.
        </p>
      </div>

      <!-- Cost File Detail HTML block -->
      <div class="cost-detail-box" data-aos="fade-up" data-aos-delay="100">
        
        <div class="cd-header">
           <div class="cd-title">
             <h3>Detail Transaksi: <span>#TRX-88019-FLT</span></h3>
             <span class="badge realized">Terealisasi</span>
           </div>
        </div>
        
        <div class="cd-grid">
           <!-- Card Specs -->
           <div class="cd-spec">
              <span>Kendaraan</span>
              <strong>B 1234 XYZ (Truk Kargo)</strong>
           </div>
           <div class="cd-spec">
              <span>Aktivitas</span>
              <strong>Maintenance Berkala</strong>
           </div>
           <div class="cd-spec">
              <span>Jenis Biaya</span>
              <strong>Sparepart (Oli & Filter)</strong>
           </div>
           <div class="cd-spec">
              <span>Vendor</span>
              <strong>Vendor Auto-Fix PT</strong>
           </div>
           <div class="cd-spec">
              <span>Tanggal Pembayaran</span>
              <strong>14 Oktober 2026</strong>
           </div>
           <div class="cd-spec highlight">
              <span>Nominal Realisasi</span>
              <strong>Rp 3.450.000</strong>
           </div>
        </div>

        <div class="cd-timeline">
           <h4>Life-cycle Pengajuan (Riwayat)</h4>
           <ul>
             <li><strong>11 Okt:</strong> Diajukan (Rp 3.500.000) oleh <i>Mekanik</i></li>
             <li><strong>12 Okt:</strong> Disetujui secara bersyarat (Rp 3.450.000) oleh <i>Finance</i></li>
             <li><strong>14 Okt:</strong> Invoice dicetak (Terealisasi) secara terpusat via sistem.</li>
           </ul>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/cost/cost-history.css" scoped></style>
