<template>
  <section class="cost-inte-wrapper">
    <div class="cost-inte-container">
      <div class="ci-header" data-aos="fade-up">
        <h2 class="ci-title">Biaya Armada Terhubung dengan Aktivitas Operasional</h2>
        <p class="ci-subtitle">Biaya tidak berdiri sendiri. FleetSumo membantu menghubungkan informasi biaya dengan berbagSistem aktivitas armada agar perusahaan mendapatkan informasi yang lebih lengkap.</p>
      </div>

      <div class="ci-layout" data-aos="fade-up" data-aos-delay="200">
         <div class="ci-cards" data-aos="fade-up" data-aos-delay="300" style="width:100%; max-width:1000px; display:grid; grid-template-columns: repeat(3, 1fr); gap:1.5rem; justify-content:center; margin: 0 auto;">
            
            <div class="ci-card" onclick="window.location.href='/fitur/cost-financial'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Cost Management</h4>
               <p>Pusat rekapitulasi data tagihan & pengeluaran armada.</p>
            </div>
            
            <div class="ci-card" onclick="window.location.href='/fitur/fleet-vehicle'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Fleet & Vehicle</h4>
               <p>Alokasikan biaya langsung pada plat nomor kendaraan.</p>
            </div>

            <div class="ci-card" onclick="window.location.href='/fitur/maintenance'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Maintenance</h4>
               <p>Lacak rincian nilai invoice jasa dan penggantian part.</p>
            </div>

            <div class="ci-card" onclick="window.location.href='/fitur/fuel'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Fuel Management</h4>
               <p>Kumpulkan agregasi data liter dan persentase biaya BBM.</p>
            </div>

            <div class="ci-card" onclick="window.location.href='/fitur/dashboard-reports'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Dashboard & Reports</h4>
               <p>Sajikan grafik riwayat cost center per unit transportasi.</p>
            </div>

            <div class="ci-card" onclick="window.location.href='/fitur/sparepart'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Sparepart Inventory</h4>
               <p>Audit depresiasi stok dan belanja gudang per bulan.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/cost-management/cost-integration.css" scoped></style>
