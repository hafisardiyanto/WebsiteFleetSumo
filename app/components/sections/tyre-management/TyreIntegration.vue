<template>
  <section class="tyre-integration-wrapper">
    <div class="tyre-integration-container">
      <div class="tin-header" data-aos="fade-up">
        <h2 class="tin-title">Tyre Management Terhubung dengan Data Armada</h2>
      </div>

      <div class="mi-layout" data-aos="fade-up" data-aos-delay="200" style="display:flex; flex-direction:column; align-items:center;">
         
         <div class="mi-cards" data-aos="fade-up" data-aos-delay="300" style="width:100%; max-width:1000px; display:grid; grid-template-columns: repeat(3, 1fr); gap:1.5rem; justify-content:center;">
            
            <div class="mi-card" onclick="window.location.href='/fitur/tyre'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Tyre Management</h4>
               <p>Registrasi & pemantauan keausan ban.</p>
            </div>
            
            <div class="mi-card" onclick="window.location.href='/fitur/fleet-vehicle'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Fleet & Vehicle</h4>
               <p>Profil dan data fisik kendaraan yang dipasang.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/maintenance'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Maintenance</h4>
               <p>Jadwalkan vulkanisir saat ban hampir gundul.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/sparepart'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Sparepart Inventory</h4>
               <p>Stok ban rilis melalui pengawasan mekanik gudang.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/cost-financial'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Cost & Financial</h4>
               <p>Hitung depresiasi aset pembelian karet ban armada.</p>
            </div>

            <div class="mi-card" onclick="window.location.href='/fitur/dashboard-reports'" style="cursor:pointer;" style:="background:#fff; border:1px solid #cbd5e1; padding:1.5rem; text-align:center; border-radius:8px;">
               <h4>Dashboard & Reports</h4>
               <p>Sajikan grafik riwayat ban mana yang cepat aus.</p>
            </div>
         </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-integration-wrapper {
  padding: 8rem 5%;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}
.tyre-integration-container {
  max-width: 900px;
  width: 100%;
}
.tin-header {
  text-align: center;
  margin-bottom: 4rem;
}
.tin-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
}

.tin-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tin-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.middle-row {
  gap: 1rem;
  flex-wrap: nowrap;
}
@media (max-width: 768px) {
  .middle-row {
    flex-direction: column;
  }
  .tin-arrow-horizontal.left-arrow, 
  .tin-arrow-horizontal.right-arrow {
    transform: rotate(90deg);
    margin: 1rem 0;
  }
}
.tin-box {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  min-width: 200px;
}
.tin-box.core {
  background: #2563eb;
  border-color: #1d4ed8;
  color: #ffffff;
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}
.tin-arrow-vertical {
  color: #94a3b8;
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: bold;
}
.tin-arrow-horizontal {
  color: #94a3b8;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
