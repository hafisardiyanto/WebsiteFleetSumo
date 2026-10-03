<template>
  <section class="cost-integration-wrapper">
    <div class="cost-integration-container">
      <div class="cost-integration-header" data-aos="fade-up">
        <h2 class="cost-integration-title">Biaya Armada Terhubung dengan Aktivitas Operasional</h2>
      </div>

      <div class="cost-integration-hub" data-aos="fade-up" data-aos-delay="100">
        
        <!-- Top Component -->
        <div class="ci-node fleet-node">
           <div class="ci-box">
              <h3>Fleet Management</h3>
              <p>Memberikan konteks kendaraan</p>
           </div>
           <div class="ci-line diag-right"></div>
        </div>

        <!-- Middle Row Components -->
        <div class="ci-mid-row">
           
           <div class="ci-side left-side">
              <div class="ci-node maint-node">
                 <div class="ci-box">
                    <h3>Maintenance</h3>
                    <p>Biaya aktivitas perawatan</p>
                 </div>
                 <div class="ci-line horizontal-right"></div>
              </div>
              
              <div class="ci-node tyre-node" style="margin-top:20px;">
                 <div class="ci-box">
                    <h3>Tyre</h3>
                    <p>Konteks biaya ban</p>
                 </div>
                 <div class="ci-line diag-up-right"></div>
              </div>
           </div>

           <!-- Central Target Component (Cost Management) -->
           <div class="ci-node center-node">
              <div class="ci-box central">
                 <h3>COST MANAGEMENT</h3>
                 <p>Sistem Pengendalian Sentral</p>
              </div>
           </div>

           <div class="ci-side right-side">
              <div class="ci-node fuel-node">
                 <div class="ci-line horizontal-left"></div>
                 <div class="ci-box">
                    <h3>Fuel</h3>
                    <p>Biaya logistik BBM</p>
                 </div>
              </div>
              
              <div class="ci-node sparepart-node" style="margin-top:20px;">
                 <div class="ci-line diag-up-left"></div>
                 <div class="ci-box">
                    <h3>Sparepart / Inv</h3>
                    <p>Biaya pengadaan item/gudang</p>
                 </div>
              </div>
           </div>

        </div>

        <!-- Bottom Reporting Component -->
        <div class="ci-node report-node">
           <div class="ci-line vertical-down"></div>
           <div class="ci-box highlight">
              <h3>Dashboard & Reporting</h3>
              <p>Membantu menyajikan evaluasi</p>
           </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/cost/cost-other-solutions.css" scoped></style>
