<template>
  <section class="approval-list-wrapper">
    <div class="approval-list-container">
      <div class="apl-header" data-aos="fade-up">
        <h2 class="apl-title">Pantau Seluruh Pengajuan dari Satu Tampilan</h2>
        <p class="apl-subtitle">Daftar pengajuan membantu pengguna melihat permintaan operasional beserta status proses persetujuannya secara terpusat.</p>
      </div>

      <div class="apl-layout">
         
         <div class="apl-left" data-aos="fade-right" data-aos-delay="100">
             <div class="apl-mockup">
                 <img src="/assets/fitur/approval-workflow/hero.jpg" alt="Daftar Approval FleetSumo" class="apl-img" />
                 
                 <!-- Callouts based on typical List -->
                 <div class="apl-callout c1">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Nomor & Pengaju</span>
                 </div>
                 <div class="apl-callout c2">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Jenis Pengajuan</span>
                 </div>
                 <div class="apl-callout c3">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Status & Keputusan</span>
                 </div>
             </div>
         </div>

         <div class="apl-right" data-aos="fade-left" data-aos-delay="200">
             <div class="apl-point">
                 <h4>Nomor Pengajuan</h4>
                 <p>Lihat kode referensi dokumen pengajuan untuk mempermudah pelacakan data.</p>
             </div>
             <div class="apl-point">
                 <h4>Jenis Pengajuan</h4>
                 <p>Identifikasi kategori aktivitas yang diminta, seperti maintenance atau operasional kendaraan.</p>
             </div>
             <div class="apl-point">
                 <h4>Pengaju & Tanggal</h4>
                 <p>Ketahui pihak yang membuat permintaan beserta waktu pembuatan dokumen pengajuan.</p>
             </div>
             <div class="apl-point">
                 <h4>Status & Approval</h4>
                 <p>Pantau posisi persetujuan pengajuan saat ini, dari proses, disetujui, hingga tindak lanjut akhir.</p>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-list-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.approval-list-container {
  max-width: 1200px;
  width: 100%;
}
.apl-header {
  text-align: center;
  margin-bottom: 4rem;
}
.apl-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.apl-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.apl-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .apl-layout {
    grid-template-columns: 3fr 2fr;
  }
}
.apl-mockup {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.apl-img {
  width: 100%;
  height: auto;
  display: block;
}
.apl-callout {
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
.c1 { top: 20%; left: 10%; }
.c2 { top: 50%; left: 60%; }
.c3 { top: 70%; left: 30%; }

.apl-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.apl-point h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.apl-point p {
  color: #64748b;
  line-height: 1.6;
}
</style>
