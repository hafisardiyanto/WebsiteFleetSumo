<template>
  <section class="approval-detail-wrapper">
    <div class="approval-detail-container">
      <div class="apd-header" data-aos="fade-up">
        <h2 class="apd-title">Lihat Detail Pengajuan dan Proses Persetujuan</h2>
        <p class="apd-subtitle">Halaman detail memberikan informasi lebih lengkap mengenSistem pengajuan, status, dan proses persetujuan yang berkaitan dengan aktivitas tersebut.</p>
      </div>

      <div class="apd-layout">
         
         <div class="apd-left" data-aos="fade-right" data-aos-delay="200">
             <div class="apd-point">
                 <h4>Informasi Pengajuan</h4>
                 <p>Lihat secara holistik identitas permintaan layanan, pemohon, serta rincian latar belakang kenapa pengajuan ini dibuat.</p>
             </div>
             <div class="apd-point">
                 <h4>Detail Kebutuhan</h4>
                 <p>Ketahui rincian spesifik pembiayaan, material, atau tindakan apa saja yang dibutuhkan secara detil untuk meminimalisasi kesalahan realisasi.</p>
             </div>
             <div class="apd-point">
                 <h4>Status & Approval</h4>
                 <p>Analisis sejauh mana titik posisi progres pengajuan berada dalam skema tahapan berjenjang beserta daftar penilSistem pihak yang terlibat.</p>
             </div>
             <div class="apd-point">
                 <h4>Catatan & Riwayat</h4>
                 <p>Pantau seluruh rekam historis komentar antara penilSistem dan pemohon sejak titik awal usulan hingga pencapaian keputusan akhirnya.</p>
             </div>
         </div>

         <div class="apd-right" data-aos="fade-left" data-aos-delay="100">
             <div class="apd-mockup">
                 <img src="/assets/fitur/approval-workflow/hero.jpg" alt="Detail Approval FleetSumo" class="apd-img" />
                 
                 <div class="apd-callout c1">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Detail Kebutuhan</span>
                 </div>
                 <div class="apd-callout c2">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Riwayat Persetujuan</span>
                 </div>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-detail-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.approval-detail-container {
  max-width: 1200px;
  width: 100%;
}
.apd-header {
  text-align: center;
  margin-bottom: 4rem;
}
.apd-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.apd-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.apd-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .apd-layout {
    grid-template-columns: 2fr 3fr;
  }
}
.apd-mockup {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.apd-img {
  width: 100%;
  height: auto;
  display: block;
}
.apd-callout {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.95);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
}
.callout-dot {
  width: 8px;
  height: 8px;
  background: #3b82f6;
  border-radius: 50%;
  display: inline-block;
}
.c1 { top: 15%; left: 15%; }
.c2 { top: 60%; left: 50%; }

.apd-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.apd-point h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.apd-point p {
  color: #64748b;
  line-height: 1.6;
}
</style>
