<template>
  <section class="approval-monitoring-wrapper">
    <div class="approval-monitoring-container">
      <div class="apm-header" data-aos="fade-up">
        <h2 class="apm-title">Pantau Status Pengajuan dan Persetujuan dengan Lebih Mudah</h2>
        <p class="apm-subtitle">Informasi pengajuan dan status persetujuan membantu pengguna memantau proses operasional yang sedang berjalan dan menelusuri aktivitas yang telah selesSistem.</p>
      </div>

      <div class="apm-layout">
         
         <div class="apm-visual" data-aos="fade-right" data-aos-delay="100">
             <div class="apm-mockup">
                 <img src="/assets/fitur/approval-workflow/hero.jpg" alt="Monitoring Approval" class="apm-img" />
             </div>
         </div>

         <div class="apm-content" data-aos="fade-left" data-aos-delay="200">
             <div class="apm-card">
                 <h4>Pengajuan Berjalan</h4>
                 <p>Melihat pengajuan yang masih dalam proses.</p>
             </div>
             <div class="apm-card">
                 <h4>Menunggu Approval</h4>
                 <p>Memantau pengajuan yang membutuhkan persetujuan.</p>
             </div>
             <div class="apm-card">
                 <h4>Pengajuan SelesSistem</h4>
                 <p>Melihat pengajuan yang telah mendapatkan keputusan dan menyelesaikan prosesnya.</p>
             </div>
             <div class="apm-card">
                 <h4>Riwayat Approval</h4>
                 <p>Menelusuri proses persetujuan yang telah dilakukan.</p>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-monitoring-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.approval-monitoring-container {
  max-width: 1200px;
  width: 100%;
}
.apm-header {
  text-align: center;
  margin-bottom: 4rem;
}
.apm-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.apm-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.apm-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .apm-layout {
    grid-template-columns: 1fr 1fr;
  }
}
.apm-mockup {
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.apm-img {
  width: 100%;
  height: auto;
  display: block;
}
.apm-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .apm-content {
    grid-template-columns: 1fr 1fr;
  }
}
.apm-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.apm-card:hover {
  background: #fff;
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.apm-card h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.apm-card p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
