<template>
  <section class="cost-workflow-wrapper">
    <div class="cost-workflow-container">
      <div class="cost-workflow-header" data-aos="fade-up">
        <h2 class="cost-workflow-title">Hubungkan Aktivitas Operasional dengan Informasi Biaya</h2>
      </div>

      <div class="cost-workflow-body" data-aos="fade-up" data-aos-delay="100">
        
        <div class="hub-spoke-diagram">
          
          <!-- Outer branches mapped linearly as defined -->
          <div class="cw-node">
            <div class="cw-box header-node">
               <h3>FLEET</h3>
               <p>Kendaraan & aktivitas armada</p>
            </div>
            <div class="cw-arrow">↓</div>
          </div>

          <div class="cw-node">
            <div class="cw-box">
               <h3>MAINTENANCE</h3>
               <p>Biaya perawatan kendaraan</p>
            </div>
            <div class="cw-arrow">↓</div>
          </div>

          <div class="cw-node">
            <div class="cw-box">
               <h3>FUEL</h3>
               <p>Biaya penggunaan BBM</p>
            </div>
            <div class="cw-arrow">↓</div>
          </div>

          <div class="cw-node">
            <div class="cw-box">
               <h3>TYRE</h3>
               <p>Biaya terkait ban</p>
            </div>
            <div class="cw-arrow">↓</div>
          </div>

          <div class="cw-node">
            <div class="cw-box">
               <h3>VENDOR</h3>
               <p>Biaya dari vendor eksternal</p>
            </div>
            <div class="cw-arrow">↓</div>
          </div>

          <!-- Target central node -->
          <div class="cw-node">
            <div class="cw-box central-node">
               <h3>COST MANAGEMENT</h3>
               <p>Data biaya terstruktur menjadi satu</p>
            </div>
            <div class="cw-arrow">↓</div>
          </div>
          
          <!-- Analytics conclusion -->
          <div class="cw-node">
            <div class="cw-box end-node">
               <h3>DASHBOARD & REPORT</h3>
               <p>Monitoring nyata dan laporan valid untuk biaya operasional</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/cost/cost-workflow.css" scoped></style>
