<template>
  <section class="tyre-workflow-wrapper">
    <div class="tyre-workflow-container">
      <div class="tyre-workflow-header" data-aos="fade-up">
        <h2 class="tyre-workflow-title">Setiap Aktivitas Ban Tercatat dalam Satu Sistem</h2>
      </div>

      <div class="tyre-structural-diagram" data-aos="fade-up" data-aos-delay="100">
        <!-- 1 -->
        <div class="ts-node">
          <div class="ts-box">
             <h3>BAN</h3>
             <p>Identitas dan informasi ban unik</p>
          </div>
        </div>
        <div class="ts-arrow">↓</div>

        <!-- 2 -->
        <div class="ts-node">
          <div class="ts-box accent">
             <h3>KENDARAAN</h3>
             <p>Ban di-link ke armada yang beroperasi harian</p>
          </div>
        </div>
        <div class="ts-arrow">↓</div>

        <!-- 3 -->
        <div class="ts-node">
          <div class="ts-box">
             <h3>AKTIVITAS BAN</h3>
             <p>Pemasangan, mutasi posisi, pelepasan, dan aktivitas terkait</p>
          </div>
        </div>
        <div class="ts-arrow">↓</div>

        <!-- 4 -->
        <div class="ts-node">
          <div class="ts-box accent">
             <h3>DATA & RIWAYAT</h3>
             <p>Seluruh interaksi tersebut tersimpan di histori terpadu</p>
          </div>
        </div>
        <div class="ts-arrow">↓</div>

        <!-- 5 -->
        <div class="ts-node">
          <div class="ts-box highlight-box">
             <h3>MONITORING</h3>
             <p>Informasi valid mendasari pengambilan keputusan operasional & belanja Sparepart</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/tyre/tyre-workflow.css" scoped></style>
