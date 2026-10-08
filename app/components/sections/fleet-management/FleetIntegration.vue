<template>
  <section class="fleet-inte-wrapper">
    <div class="fleet-inte-container">
      <div class="fi-header" data-aos="fade-up">
        <h2 class="fi-title">Terhubung dengan Berbagai Aktivitas Operasional Armada</h2>
        <p class="fi-subtitle">Data kendaraan menjadi bagian penting dalam berbagai aktivitas FleetSumo. Informasi yang dikelola dapat terhubung dengan modul lain sesuai kebutuhan operasional perusahaan.</p>
      </div>

      <div class="fi-layout" data-aos="fade-up" data-aos-delay="200" style="display:flex; flex-direction:column; align-items:center;">
         
         <div class="fi-cards" data-aos="fade-up" data-aos-delay="300" style="width:100%; max-width:1000px; display:grid; grid-template-columns: repeat(3, 1fr); gap:1.5rem; justify-content:center;">
            <div class="fi-card" onclick="window.location.href='/fitur/fleet-vehicle'" style="cursor:pointer;">
               <h4>Fleet & Vehicle</h4>
               <p>Informasi teknis dan operasional aset.</p>
            </div>
            <div class="fi-card" onclick="window.location.href='/fitur/driver-management'" style="cursor:pointer;">
               <h4>Driver Management</h4>
               <p>Informasi penugasan pengemudi kendaraan.</p>
            </div>
            <div class="fi-card" onclick="window.location.href='/fitur/maintenance'" style="cursor:pointer;">
               <h4>Maintenance</h4>
               <p>Jadwal dan riwayat perbaikan armada.</p>
            </div>
            <div class="fi-card" onclick="window.location.href='/fitur/fuel'" style="cursor:pointer;">
               <h4>Fuel</h4>
               <p>Data konsumsi pengisian bahan bakar.</p>
            </div>
            <div class="fi-card" onclick="window.location.href='/fitur/tyre'" style="cursor:pointer;">
               <h4>Tyre</h4>
               <p>Pencatatan umur pakai ban operasional.</p>
            </div>
            <div class="fi-card" onclick="window.location.href='/fitur/cost-financial'" style="cursor:pointer;">
               <h4>Cost & Financial</h4>
               <p>Monitor realisasi dana operasional.</p>
            </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fleet-management/fleet-integration.css" scoped></style>
