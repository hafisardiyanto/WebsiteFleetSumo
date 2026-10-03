<template>
  <section class="fuel-history-wrapper">
    <div class="fuel-history-container">
      <div class="fuel-history-header" data-aos="fade-up">
        <h2 class="fuel-history-title">Kumpulkan Rekam Jejak Pengisian Setiap Armada</h2>
        <p class="fuel-history-subtitle">
          Data fuel tidak terpisahkan. Anda dapat meneliti rasio kewajaran dari log harian, hingga menemukan anomali pengeluaran BBM.
        </p>
      </div>

      <div class="history-timeline-box" data-aos="fade-up" data-aos-delay="100">
        <div class="history-vehicle">Kendaraan: B-993-KL</div>
        
        <div class="timeline-vertical">
          <div class="timeline-row">
            <div class="timeline-date">Okt 05</div>
            <div class="timeline-point error"></div>
            <div class="timeline-detail">
              <h4>Alert: Kenaikan Konsumsi Cepat</h4>
              <p>Rasio drop ke 5.2 KM/L (biasanya 8.0 KM/L).</p>
            </div>
          </div>
          
          <div class="timeline-row">
            <div class="timeline-date">Okt 03</div>
            <div class="timeline-point"></div>
            <div class="timeline-detail">
              <h4>Pengisian SPBU Rest Area km 45</h4>
              <p>Volume: 45 L | Harga Rp 306.000 | Odometer 21.050</p>
            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-date">Sep 28</div>
            <div class="timeline-point"></div>
            <div class="timeline-detail">
              <h4>Validasi Laporan Bulanan</h4>
              <p>Total transaksi divalidasi ke Finance.</p>
            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-date">Sep 25</div>
            <div class="timeline-point"></div>
            <div class="timeline-detail">
              <h4>Pengisian Depo Pool Logistik</h4>
              <p>Volume: 100 L | Internal Costing | Odometer 20.800</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel/fuel-history.css" scoped></style>
