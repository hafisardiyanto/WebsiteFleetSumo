<template>
  <section class="fuel-inte-wrapper">
    <div class="fuel-inte-container">
      <div class="fi-header" data-aos="fade-up">
        <h2 class="fi-title">Fuel Management Terhubung dengan Data Armada</h2>
        <p class="fi-subtitle">Informasi BBM berkaitan erat dengan kendaraan dan aktivitas operasional lainnya. FleetSumo membantu menghubungkan informasi tersebut dalam satu ekosistem.</p>
      </div>

      <div class="mi-layout" data-aos="fade-up" data-aos-delay="200" style="display:flex; flex-direction:column; align-items:center;">
         
         <div class="mi-cards" data-aos="fade-up" data-aos-delay="300" style="width:100%; max-width:1000px; display:grid; grid-template-columns: repeat(3, 1fr); gap:1.5rem; justify-content:center;">
            
            <div class="mi-card" onclick="window.location.href='/fitur/fuel'" style="cursor:pointer;">
               <h4>Fuel Management</h4>
               <p>Registrasi pengisian BBM harian armada.</p>
            </div>
            
            <div class="mi-card" onclick="window.location.href='/fitur/fleet-vehicle'" style="cursor:pointer;">
               <h4>Fleet & Vehicle</h4>
               <p>Basis profil aset utama kendaraan Anda.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/driver-management'" style="cursor:pointer;">
               <h4>Driver Management</h4>
               <p>Tautkan identitas pengemudi dengan transaksi.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/cost-financial'" style="cursor:pointer;">
               <h4>Cost & Financial</h4>
               <p>Kumpulkan biaya BBM menjadi neraca kas tunggal.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/dashboard-reports'" style="cursor:pointer;">
               <h4>Dashboard & Reports</h4>
               <p>Ekspor laporan tren konsumsi bahan bakar total.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/approval-workflow'" style="cursor:pointer;">
               <h4>Approval & Workflow</h4>
               <p>Regulasi persetujuan klaim bon bensin kasbon.</p>
            </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel-management/fuel-integration.css" scoped></style>
