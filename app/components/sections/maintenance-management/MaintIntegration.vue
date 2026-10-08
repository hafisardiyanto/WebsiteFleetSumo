<template>
  <section class="maint-inte-wrapper">
    <div class="maint-inte-container">
      <div class="mi-header" data-aos="fade-up">
        <h2 class="mi-title">Maintenance Terhubung dengan Ekosistem Armada</h2>
        <p class="mi-subtitle">Maintenance tidak berdiri sendiri. Aktivitas perawatan kendaraan berkaitan dengan kendaraan, sparepart, vendor, dan biaya operasional.</p>
      </div>

      <div class="mi-layout" data-aos="fade-up" data-aos-delay="200" style="display:flex; flex-direction:column; align-items:center;">
         
         <div class="mi-cards" data-aos="fade-up" data-aos-delay="300" style="width:100%; max-width:1000px; display:grid; grid-template-columns: repeat(3, 1fr); gap:1.5rem; justify-content:center;">
            
            <div class="mi-card" onclick="window.location.href='/fitur/maintenance'" style="cursor:pointer;">
               <h4>Maintenance</h4>
               <p>Eksekusi jadwal servis bengkel.</p>
            </div>
            
            <div class="mi-card" onclick="window.location.href='/fitur/fleet-vehicle'" style="cursor:pointer;">
               <h4>Fleet & Vehicle</h4>
               <p>Pusat identitas aset kendaraan.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/sparepart'" style="cursor:pointer;">
               <h4>Sparepart</h4>
               <p>Inventori suku cadang bengkel.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/vendor'" style="cursor:pointer;">
               <h4>Vendor</h4>
               <p>Manajemen koneksi mitra perbaikan eksternal.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/approval-workflow'" style="cursor:pointer;">
               <h4>Approval & Workflow</h4>
               <p>Regulasi ACC pengeluaran dan eksekusi tim.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/cost-financial'" style="cursor:pointer;">
               <h4>Cost & Financial</h4>
               <p>Pengawasan realisasi arus kas armada.</p>
            </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance-management/maint-integration.css" scoped></style>
