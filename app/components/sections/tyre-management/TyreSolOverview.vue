<template>
  <section class="tyre-sol-overview-wrapper">
    <div class="tyre-def-container">
      <div class="tdf-header" data-aos="fade-up" style="max-width:800px; margin: 0 auto; text-align:center;">
        <h2 class="tdf-title">Sentralisasi Data Identitas dan Pemasangan Ban</h2>
        <p class="tdf-subtitle">Amankan kepemilikan aset dengan mencatat setiap ban menggunakan nomor seri fabrikasinya sebelum dialokasikan ke armada jalan.</p>
      </div>

      <div class="fdf-diagram" data-aos="fade-up" data-aos-delay="200" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; max-width: 800px; margin: 2rem auto 0; text-align: left;">
         
         <div style="background: #ffffff; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; display:flex; gap: 1rem; align-items: flex-start;">
            <div style="font-size: 24px;">🏷️</div>
            <div>
               <h4 style="color:#0f172a; margin-bottom:4px; font-weight:600;">Registrasi Serial Ban</h4>
               <p style="color:#64748b; font-size:15px; margin:0;">Kunci identitas ban ke dalam sistem menggunakan serial number asli pabrik untuk menghindari resiko penukaran aset secara ilegal.</p>
            </div>
         </div>

         <div style="background: #ffffff; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; display:flex; gap: 1rem; align-items: flex-start;">
            <div style="font-size: 24px;">🚛</div>
            <div>
               <h4 style="color:#0f172a; margin-bottom:4px; font-weight:600;">Asosiasi Kendaraan</h4>
               <p style="color:#64748b; font-size:15px; margin:0;">Petakan ban secara eksplisit ke plat nomor kendaraan spesifik yang diizinkan untuk menggunakannya.</p>
            </div>
         </div>

         <div style="background: #ffffff; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; display:flex; gap: 1rem; align-items: flex-start;">
            <div style="font-size: 24px;">📍</div>
            <div>
               <h4 style="color:#0f172a; margin-bottom:4px; font-weight:600;">Pemetaan Posisi Axle</h4>
               <p style="color:#64748b; font-size:15px; margin:0;">Tentukan letak presisi pemasangan pada poros truk (misal: Depan Kiri, Belakang Kanan Luar) untuk memantau titik beban terberat.</p>
            </div>
         </div>

         <div style="background: #ffffff; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; display:flex; gap: 1rem; align-items: flex-start;">
            <div style="font-size: 24px;">⚙️</div>
            <div>
               <h4 style="color:#0f172a; margin-bottom:4px; font-weight:600;">Pencatatan Odometer Start</h4>
               <p style="color:#64748b; font-size:15px; margin:0;">Set KM awal pemasangan sebagai patokan absolut untuk mengevaluasi batasan limitasi umur pemakaian ban tersebut nantinya.</p>
            </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-def-wrapper {
  padding: 8rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}

.tyre-def-container {
  max-width: 1200px;
  width: 100%;
}

.tdf-header {
  text-align: center;
  margin-bottom: 4rem;
}

.tdf-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.tdf-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.tdf-diagram {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.tdf-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
}

.tdf-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  width: 100%;
  max-width: 280px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.tdf-box:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.tdf-arrow {
  color: #94a3b8;
  font-size: 1.25rem;
  margin: 0.75rem 0;
}

@media (min-width: 768px) {
  .tdf-diagram {
    max-width: 1000px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .tdf-step {
    width: auto;
    flex-direction: row;
  }
  
  .tdf-arrow {
    transform: rotate(-90deg);
    margin: 0 1rem;
  }
  
  .tdf-step.final .tdf-arrow {
    display: none;
  }
}
</style>
