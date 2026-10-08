<template>
  <section class="fuel-hero-wrapper">
    <div class="fuel-hero-bg">
        <!-- Using Sistem Background if available, or just solid color -->
        <div class="fuel-bg-overlay"></div>
    </div>

    <div class="fuel-hero-container relative-content">
      <div class="fuel-hero-content">
        <span class="hero-label" data-aos="fade-up">FUEL MANAGEMENT</span>
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
          Kelola Penggunaan BBM Armada <span class="highlight">dalam Satu Sistem</span>
        </h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          FleetSumo membantu perusahaan mencatat dan mengelola aktivitas BBM kendaraan, mulSistem dari pengisian, volume, biaya, hingga riwayat penggunaan dalam satu platform yang terstruktur.
        </p>
        
        <div class="hero-actions" data-aos="fade-up" data-aos-delay="300">
          <button class="btn-primary" onclick="window.location.href='/kontak/demo'">Jadwalkan Demo</button>
        </div>
      </div>

      <div class="fuel-hero-visual" data-aos="zoom-in" data-aos-delay="400">
        <div class="hero-mockup">
          <img src="/assets/fitur/fuel/fuel-dashboard.png" alt="Tampilan Utama BBM FleetSumo" class="hero-img">
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel/fuel-hero.css" scoped></style>
