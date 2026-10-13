<template>
  <section class="fleet-integrated-wrapper">
    <div class="fleet-integrated-container">
      <div class="fleet-integrated-header" data-aos="fade-up">
        <h2 class="fleet-integrated-title">Data Armada Terhubung dengan Aktivitas Operasional</h2>
        <p class="fleet-integrated-subtitle">
          Fleet Management menjadi pusat informasi kendaraan yang dapat terhubung dengan berbagai aktivitas pengelolaan armada.
        </p>
      </div>

      <!-- Interactive HTML Diagram -->
      <div class="integrated-diagram" data-aos="zoom-in" data-aos-delay="100">
        <!-- Top Node -->
        <div class="diagram-node node-primary">
          <h3>KENDARAAN</h3>
        </div>

        <!-- Vertical Line from Top Node -->
        <div class="diagram-line line-vertical"></div>

        <!-- Horizontal Branch Connector -->
        <div class="diagram-line-horizontal"></div>

        <!-- Branch Nodes Row -->
        <div class="diagram-branches">
          <!-- Branch 1 -->
          <div class="branch-item">
            <div class="diagram-arrow-down"></div>
            <div class="diagram-node node-secondary">Maintenance</div>
            <div class="diagram-arrow-down"></div>
          </div>
          <!-- Branch 2 -->
          <div class="branch-item">
            <div class="diagram-arrow-down"></div>
            <div class="diagram-node node-secondary">Fuel</div>
            <div class="diagram-arrow-down"></div>
          </div>
          <!-- Branch 3 -->
          <div class="branch-item">
            <div class="diagram-arrow-down"></div>
            <div class="diagram-node node-secondary">Tyre</div>
            <div class="diagram-arrow-down"></div>
          </div>
          <!-- Branch 4 -->
          <div class="branch-item">
            <div class="diagram-arrow-down"></div>
            <div class="diagram-node node-secondary">Sparepart</div>
            <div class="diagram-arrow-down"></div>
          </div>
          <!-- Branch 5 -->
          <div class="branch-item">
            <div class="diagram-arrow-down"></div>
            <div class="diagram-node node-secondary">Cost</div>
            <div class="diagram-arrow-down"></div>
          </div>
        </div>

        <!-- Horizontal Merger Connector -->
        <div class="diagram-line-horizontal bottom-merger"></div>

        <!-- Vertical Line down to Bottom Node -->
        <div class="diagram-line line-vertical"></div>

        <!-- Bottom Node -->
        <div class="diagram-node node-primary">
          <h3>DASHBOARD & REPORTS</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fleet-management/fleet-integrated-system.css" scoped></style>
