<template>
  <section class="fuel-def-wrapper">
    <div class="fuel-def-container">
      <div class="fdf-header" data-aos="fade-up" style="max-width:800px; margin: 0 auto; text-align:center;">
        <h2 class="fdf-title">Sentralisasi Pencatatan Transaksi BBM</h2>
        <p class="fdf-subtitle">Permudah tim admin mengkonsolidasikan ribuan nota bensin yang tersebar ke dalam satu basis data rapi berbasis nomor polisi (Nopol) kendaraan.</p>
      </div>

      <div class="fdf-diagram" data-aos="fade-up" data-aos-delay="200" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; max-width: 800px; margin: 2rem auto 0; text-align: left;">
         
         <div style="background: #ffffff; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; display:flex; gap: 1rem; align-items: flex-start;">
            <div style="font-size: 24px;">📝</div>
            <div>
               <h4 style="color:#0f172a; margin-bottom:4px; font-weight:600;">Input Transaksi Harian</h4>
               <p style="color:#64748b; font-size:15px; margin:0;">Rekam nominal pengeluaran tunai/non-tunai setiap supir saat melakukan pengisian bahan bakar di jalan.</p>
            </div>
         </div>

         <div style="background: #ffffff; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; display:flex; gap: 1rem; align-items: flex-start;">
            <div style="font-size: 24px;">⛽</div>
            <div>
               <h4 style="color:#0f172a; margin-bottom:4px; font-weight:600;">Validasi Volume Liter</h4>
               <p style="color:#64748b; font-size:15px; margin:0;">Pastikan literatur kuitansi setara dengan kapasitas tangki armada dan kewajaran jarak tempuh.</p>
            </div>
         </div>

         <div style="background: #ffffff; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; display:flex; gap: 1rem; align-items: flex-start;">
            <div style="font-size: 24px;">📍</div>
            <div>
               <h4 style="color:#0f172a; margin-bottom:4px; font-weight:600;">Mapping Lokasi / Vendor</h4>
               <p style="color:#64748b; font-size:15px; margin:0;">Lacak di SPBU mana transaksi dilakukan untuk menganalisa titik konsumsi tertinggi operasional.</p>
            </div>
         </div>

         <div style="background: #ffffff; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; display:flex; gap: 1rem; align-items: flex-start;">
            <div style="font-size: 24px;">⚙️</div>
            <div>
               <h4 style="color:#0f172a; margin-bottom:4px; font-weight:600;">Integrasi Odometer</h4>
               <p style="color:#64748b; font-size:15px; margin:0;">Wajib sertakan data KM awal saat pengisian untuk merangkai perhitungan konsumsi BBM yang valid.</p>
            </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel-management/fuel-definition.css" scoped></style>
