<template>
  <section class="sparepart-monitoring-wrapper">
    <div class="sparepart-monitoring-container">
      <div class="spm-header" data-aos="fade-up">
        <h2 class="spm-title">Pantau Stok dan Aktivitas Sparepart dengan Lebih Mudah</h2>
        <p class="spm-subtitle">Data sparepart yang tercatat dalam sistem membantu perusahaan memantau informasi stok dan aktivitas inventory sebagSistem bagian dari operasional armada.</p>
      </div>

      <div class="spm-layout">
         
         <div class="spm-visual" data-aos="fade-right" data-aos-delay="100">
             <div class="spm-mockup">
                 <img src="/assets/fitur/sparepart/hero.jpg" alt="Monitoring Sparepart" class="spm-img" />
             </div>
         </div>

         <div class="spm-content" data-aos="fade-left" data-aos-delay="200">
             <div class="spm-card">
                 <h4>Stok Sparepart</h4>
                 <p>Melihat informasi ketersediaan sparepart.</p>
             </div>
             <div class="spm-card">
                 <h4>Transaksi Sparepart</h4>
                 <p>Memantau aktivitas transaksi sparepart.</p>
             </div>
             <div class="spm-card">
                 <h4>Pergerakan Stok</h4>
                 <p>Melihat perubahan stok berdasarkan aktivitas inventory jika tersedia.</p>
             </div>
             <div class="spm-card">
                 <h4>Riwayat Sparepart</h4>
                 <p>Menelusuri aktivitas sparepart yang telah tercatat.</p>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.sparepart-monitoring-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.sparepart-monitoring-container {
  max-width: 1200px;
  width: 100%;
}
.spm-header {
  text-align: center;
  margin-bottom: 4rem;
}
.spm-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.spm-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.spm-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .spm-layout {
    grid-template-columns: 1fr 1fr;
  }
}
.spm-mockup {
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.spm-img {
  width: 100%;
  height: auto;
  display: block;
}
.spm-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .spm-content {
    grid-template-columns: 1fr 1fr;
  }
}
.spm-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.spm-card:hover {
  background: #fff;
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.spm-card h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.spm-card p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
