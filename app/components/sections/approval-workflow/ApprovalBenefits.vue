<template>
  <section class="approval-benefits-wrapper">
    <div class="approval-benefits-container">
      <div class="apb-header" data-aos="fade-up">
        <span class="apb-label">MANFAAT APPROVAL & WORKFLOW</span>
        <h2 class="apb-title">Proses Pengajuan Lebih Terstruktur dan Mudah Dipantau</h2>
      </div>

      <div class="apb-grid">
         <div class="apb-card" data-aos="fade-up" data-aos-delay="100">
            <div class="apb-icon">📝</div>
            <h3>Proses Lebih Terstruktur</h3>
            <p>Pengajuan dan persetujuan berjalan melalui alur yang lebih jelas.</p>
         </div>

         <div class="apb-card" data-aos="fade-up" data-aos-delay="200">
            <div class="apb-icon">📊</div>
            <h3>Status Lebih Mudah Dipantau</h3>
            <p>Pengguna dapat mengetahui status proses pengajuan.</p>
         </div>

         <div class="apb-card" data-aos="fade-up" data-aos-delay="300">
            <div class="apb-icon">📜</div>
            <h3>Riwayat Lebih Mudah Ditelusuri</h3>
            <p>Proses persetujuan yang telah dilakukan dapat menjadi bagian dari riwayat aktivitas.</p>
         </div>

         <div class="apb-card" data-aos="fade-up" data-aos-delay="400">
            <div class="apb-icon">🛡️</div>
            <h3>Mendukung Kontrol Operasional</h3>
            <p>Alur persetujuan membantu perusahaan mengontrol aktivitas yang membutuhkan keputusan.</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approval-benefits-wrapper {
  padding: 8rem 5%;
  background: #1e293b;
  display: flex;
  justify-content: center;
}
.approval-benefits-container {
  max-width: 1200px;
  width: 100%;
}
.apb-header {
  text-align: center;
  margin-bottom: 4rem;
}
.apb-label {
  display: inline-block;
  padding: 0.25rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}
.apb-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #f8fafc;
}

.apb-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 640px) {
  .apb-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .apb-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.apb-card {
  background: #334155;
  padding: 2.5rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #475569;
  text-align: center;
  transition: transform 0.3s ease;
}
.apb-card:hover {
  transform: translateY(-5px);
  border-color: #64748b;
}
.apb-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.apb-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.75rem;
}
.apb-card p {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
}
</style>
