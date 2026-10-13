<script setup>
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

useHead({
  title: 'Pembaruan Produk Cek Kendaraan | Catatan Rilis',
  meta: [
    { name: 'description', content: 'Catatan rilis dan dokumentasi pembaruan fitur sistem manajemen armada Cek Kendaraan dari FleetSumo.' },
    { property: 'og:title', content: 'Pembaruan Produk Cek Kendaraan | Catatan Rilis' },
    { property: 'og:description', content: 'Ikuti perkembangan fitur dan peningkatan kapabilitas platform pengelolaan armada web Cek Kendaraan FleetSumo.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/resources/pembaruan-produk' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Pembaruan Produk Cek Kendaraan - FleetSumo' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Pembaruan Produk Cek Kendaraan | Catatan Rilis' },
    { name: 'twitter:description', content: 'Catatan rilis dan dokumentasi pembaruan fitur sistem manajemen armada Cek Kendaraan dari FleetSumo.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/resources/pembaruan-produk' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://fleetsumo.id"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resources",
            "item": "https://fleetsumo.id/resources/pembaruan-produk"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Pembaruan Produk",
            "item": "https://fleetsumo.id/resources/pembaruan-produk"
          }
        ]
      })
    }
  ]
});
</script>

<template>
  <div class="resource-wrapper">
    <NavbarSection />

    <!-- 1. Header Section -->
    <section class="res-hero-section">
      <div class="content-container">
        <div class="res-hero-header">
          <span class="res-badge">Riwayat & Rilis Platform</span>
          <h1 class="res-title">
            Pembaruan Produk <span class="highlight">Cek Kendaraan</span>
          </h1>
          <p class="res-subtitle">
            Dokumentasi berkala mengenai peningkatan alur kerja, stabilitas sistem, dan penambahan fitur pada platform web Cek Kendaraan dari FleetSumo.
          </p>
        </div>

        <div class="res-hero-visual">
          <img src="/assets/tentang-kami/Pembaruan Produk.jpg" alt="Pembaruan Produk Cek Kendaraan FleetSumo" />
        </div>
      </div>
    </section>

    <!-- 2. Changelog Timeline -->
    <section class="content-container">
      <div class="changelog-timeline">
        <div class="changelog-entry">
          <div class="changelog-header">
            <span class="version-badge">Rilis Modul Operasional</span>
            <span class="release-date">Platform Core</span>
          </div>
          <h3 class="changelog-title">Ekspansi Modul Tata Kelola Armada & Biaya</h3>
          <ul class="changelog-list">
            <li>Konsolidasi database kendaraan dan pencatatan masa berlaku dokumen (STNK & KIR).</li>
            <li>Pencatatan perintah kerja bengkel (Work Order) dan riwayat penggantian onderdil armada.</li>
            <li>Modul pencatatan transaksi bahan bakar (Fuel Log) dan rasio odometer.</li>
            <li>Pencatatan siklus pakai ban, nomor seri ban, dan evaluasi kondisi fisik.</li>
            <li>Manajemen master data vendor rekanan bengkel dan pengadaan sparepart.</li>
          </ul>
        </div>

        <div class="changelog-entry">
          <div class="changelog-header">
            <span class="version-badge">Peningkatan Sistem</span>
            <span class="release-date">Arsitektur & Navigasi</span>
          </div>
          <h3 class="changelog-title">Penyempurnaan Struktur Navigasi & Pelaporan</h3>
          <ul class="changelog-list">
            <li>Penyelarasan alur persetujuan operasional internal (Approval Workflow).</li>
            <li>Struktur dasbor ringkasan biaya operasional armada terintegrasi.</li>
            <li>Peningkatan performa antarmuka web responsif untuk kemudahan akses staf pool dan admin.</li>
          </ul>
        </div>
      </div>

      <!-- 3. CTA Banner -->
      <div class="res-cta-banner">
        <h2 class="cta-title">Ingin Melihat Demonstrasi Langsung Fitur Terkini?</h2>
        <p class="cta-desc">
          Tim FleetSumo siap memandu Anda meninjau modul Cek Kendaraan sesuai kebutuhan spesifik perusahaan Anda.
        </p>
        <a href="/kontak/demo" class="btn-primary">Minta Demo Langsung</a>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<style src="~/assets/css/pages/resources/common.css" scoped></style>
<style src="~/assets/css/pages/resources/hero.css" scoped></style>
<style src="~/assets/css/pages/resources/article-grid.css" scoped></style>
<style src="~/assets/css/pages/resources/faq.css" scoped></style>
<style src="~/assets/css/pages/resources/cta.css" scoped></style>
<style src="~/assets/css/pages/resources/responsive.css" scoped></style>
