<template>
  <section class="tyre-list-wrapper">
    <div class="tyre-list-container">
      <div class="tyl-header" data-aos="fade-up">
        <h2 class="tyl-title">Kelola Data Ban dari Satu Tampilan</h2>
        <p class="tyl-subtitle">Daftar ban membantu pengguna melihat dan mengelola data ban yang telah tercatat dalam sistem secara terpusat.</p>
      </div>

      <div class="tyl-layout">
         
         <div class="tyl-left" data-aos="fade-right" data-aos-delay="100">
             <div class="tyl-mockup">
                 <img src="/assets/solusi/tyre-management/tyre-detail-hero.jpg" alt="Daftar Ban FleetSumo" class="tyl-img" />
                 
                 <!-- Callouts based on typical List -->
                 <div class="tyl-callout c1">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Nomor/Identitas Ban</span>
                 </div>
                 <div class="tyl-callout c2">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Posisi</span>
                 </div>
                 <div class="tyl-callout c3">
                   <span class="callout-dot"></span>
                   <span class="callout-text">Kondisi</span>
                 </div>
             </div>
         </div>

         <div class="tyl-right" data-aos="fade-left" data-aos-delay="200">
             <div class="tyl-point">
                 <h4>Identitas Ban</h4>
                 <p>Lihat nomor seri dan identitas unik dari setiap ban yang digunakan armada.</p>
             </div>
             <div class="tyl-point">
                 <h4>Informasi Kendaraan</h4>
                 <p>Ketahui kendaraan mana yang saat ini menggunakan ban tersebut.</p>
             </div>
             <div class="tyl-point">
                 <h4>Posisi & Status</h4>
                 <p>Lacak posisi pemasangan ban dan status penggunaannya secara aktual.</p>
             </div>
             <div class="tyl-point">
                 <h4>Kondisi Ban</h4>
                 <p>Pantau laporan kondisi terkini ban dalam satu tampilan yang terpadu.</p>
             </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-list-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.tyre-list-container {
  max-width: 1200px;
  width: 100%;
}
.tyl-header {
  text-align: center;
  margin-bottom: 4rem;
}
.tyl-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}
.tyl-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}
.tyl-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .tyl-layout {
    grid-template-columns: 3fr 2fr;
  }
}
.tyl-mockup {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.tyl-img {
  width: 100%;
  height: auto;
  display: block;
}
.tyl-callout {
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
.c2 { top: 40%; left: 60%; }
.c3 { top: 70%; left: 30%; }

.tyl-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.tyl-point h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.tyl-point p {
  color: #64748b;
  line-height: 1.6;
}
</style>
