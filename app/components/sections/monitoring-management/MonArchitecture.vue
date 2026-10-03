<template>
  <section class="mon-arch-wrapper">
    <div class="mon-arch-container">
      <div class="mon-arch-header" data-aos="fade-up">
        <h2 class="mon-arch-title">Satukan Data Operasional Armada</h2>
        <p class="mon-arch-subtitle">
          Lihat armada dari berbagai sudut dalam satu ekosistem. FleetSumo dapat menghubungkan seluruh informasi dari aktivitas fungsional.
        </p>
      </div>

      <div class="mon-arch-diagram" data-aos="fade-up" data-aos-delay="100">
        
        <div class="ma-sources">
           <!-- Source nodes -->
           <div class="ma-node">
              <h4>Fleet Management</h4>
              <p>Data kendaraan dan informasi armada</p>
              <div class="ma-line horizontal-right"></div>
           </div>
           
           <div class="ma-node">
              <h4>Maintenance</h4>
              <p>Informasi aktivitas & riwayat maintenance</p>
              <div class="ma-line horizontal-right"></div>
           </div>

           <div class="ma-node">
              <h4>Fuel Management</h4>
              <p>Informasi aktivitas & penggunaan BBM</p>
              <div class="ma-line horizontal-right"></div>
           </div>

           <div class="ma-node">
              <h4>Tyre Management</h4>
              <p>Informasi ban dan aktivitas penggunaannya</p>
              <div class="ma-line horizontal-right"></div>
           </div>

           <div class="ma-node">
              <h4>Cost Management</h4>
              <p>Informasi biaya & aktivitas operasional</p>
              <div class="ma-line horizontal-right"></div>
           </div>

           <div class="ma-node">
              <h4>Other Data</h4>
              <p>Riwayat aktivitas vendor & operasional lain</p>
              <div class="ma-line horizontal-right"></div>
           </div>

           <!-- Connecting bracket rod -->
           <div class="ma-bracket-rod"></div>
        </div>

        <div class="ma-target" data-aos="zoom-in" data-aos-delay="300">
           <div class="ma-target-line">→</div>
           <div class="ma-target-box">
              <h3>MONITORING & REPORTING</h3>
              <p>Membentuk data operasional menjadi informasi yang lebih mudah dipantau dan dievaluasi.</p>
           </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/monitoring/mon-architecture.css" scoped></style>
