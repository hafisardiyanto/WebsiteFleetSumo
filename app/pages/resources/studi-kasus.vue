<script setup>
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

useHead({
  title: 'Studi Kasus Implementasi Armada | Cek Kendaraan',
  meta: [
    { property: 'og:description', content: 'Informasi implementasi dan studi kasus pemanfaatan sistem manajemen armada Cek Kendaraan Cek Kendaraan di berbagai sektor operasional bisnis.' },
    { property: 'og:title', content: 'Studi Kasus Implementasi Armada | Cek Kendaraan' },
    { property: 'og:description', content: 'Pelajari bagaimana perusahaan mengadopsi pencatatan armada terpusat, pengawasan bengkel, dan kontrol biaya operasional secara bertahap.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/resources/studi-kasus' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Studi Kasus Implementasi Armada - Cek Kendaraan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Studi Kasus Implementasi Armada | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Informasi implementasi dan studi kasus pemanfaatan sistem manajemen armada Cek Kendaraan Cek Kendaraan.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/resources/studi-kasus' }
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
            "item": "https://fleetsumo.id/resources/studi-kasus"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Studi Kasus",
            "item": "https://fleetsumo.id/resources/studi-kasus"
          }
        ]
      })
    }
  ]
});
</script>

<template>

    <h1 class="hero-title" data-aos="fade-up">Cek Kendaraan – Solusi Manajemen Armada Terintegrasi</h1>
<div class="resource-wrapper">
    <NavbarSection />

    <!-- 1. Header Section -->
    <section class="res-hero-section">
      <div class="content-container">
        <div class="res-hero-header">
          <span class="res-badge">Dokumentasi Lapangan</span>
          <h1 class="res-title">
            Studi Kasus & <span class="highlight">Implementasi Nyata</span>
          </h1>
          <p class="res-subtitle">
            Kami menyajikan pembelajaran nyata mengenai bagaimana organisasi menata administrasi armada mereka dari pencatatan manual menjadi sistem manajemen berbasis data.
          </p>
        </div>

        <div class="res-hero-visual">
          <img src="/assets/tentang-kami/Studi Kasus.jpg" alt="Dokumentasi Studi Kasus Implementasi Cek Kendaraan" />
        </div>
      </div>
    </section>

    <!-- 2. Konten Jujur / Empty State Terstruktur -->
    <section class="content-container">
      <div class="empty-state-box">
        <div class="empty-icon">📂</div>
        <h2 class="empty-title">Dokumentasi Studi Kasus Sedang Dalam Proses Kurasi</h2>
        <p class="empty-desc">
          Sebagai komitmen kami terhadap transparansi, Cek Kendaraan hanya menerbitkan studi kasus yang telah terverifikasi secara resmi bersama mitra perusahaan. Publikasi studi kasus terperinci akan dirilis secara berkala.
        </p>
        <a href="/kontak/demo" class="btn-primary">Diskusikan Kebutuhan Implementasi Anda</a>
      </div>

      <!-- 3. Kerangka Evaluasi Implementasi -->
      <div class="article-grid">
        <div class="article-card">
          <div class="card-content">
            <span class="card-tag">Fase 1: Transisi Data</span>
            <h3 class="card-title">Migrasi Data dari Spreadsheet ke Sistem Web</h3>
            <p class="card-excerpt">
              Bagaimana proses konsolidasi master data nomor polisi, spesifikasi teknis kendaraan, dan identitas supir dilakukan secara bertahap tanpa menghentikan kegiatan operasional.
            </p>
          </div>
        </div>

        <div class="article-card">
          <div class="card-content">
            <span class="card-tag">Fase 2: Standarisasi Alur</span>
            <h3 class="card-title">Penetapan Prosedur Input Servis & Pembelian BBM</h3>
            <p class="card-excerpt">
              Membangun kebiasaan pencatatan berkala bagi staf pool dan administrasi agar bon perbaikan bengkel dan log odometer langsung terdata ke dalam sistem.
            </p>
          </div>
        </div>

        <div class="article-card">
          <div class="card-content">
            <span class="card-tag">Fase 3: Visibilitas Biaya</span>
            <h3 class="card-title">Pemanfaatan Laporan untuk Pengambilan Keputusan</h3>
            <p class="card-excerpt">
              Manajemen menggunakan rekapitulasi biaya bulanan dan histori perbaikan untuk mengevaluasi efisiensi rute dan menentukan waktu peremajaan unit kendaraan.
            </p>
          </div>
        </div>
      </div>

      <!-- 4. CTA Banner -->
      <div class="res-cta-banner">
        <h2 class="cta-title">Ingin Menjadi Bagian dari Cerita Sukses Berikutnya?</h2>
        <p class="cta-desc">
          Konsultasikan tantangan pengelolaan kendaraan perusahaan Anda dan pelajari solusi alur kerja yang relevan bersama tim Cek Kendaraan.
        </p>
        <a href="/kontak/demo" class="btn-primary">Jadwalkan Diskusi Implementasi</a>
      </div>
    </section>

    <FooterSection />
  </div>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \resources\studi-kasus.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
        <li><strong>Is there a demo available?</strong> Yes, you can schedule a demo via the CTA button on the page.</li>
      </ul>
    </section>

    <section class="benefits" data-aos="fade-up">
      <h2>Manfaat Utama</h2>
      <ul>
        <li>Pengelolaan armada terpusat dan real‑time</li>
        <li>Dokumentasi kendaraan terintegrasi</li>
        <li>Visibilitas data operasional yang akurat</li>
        <li>Penghematan biaya melalui optimasi penggunaan kendaraan</li>
      </ul>
    </section>
</template>

<style src="~/assets/css/pages/resources/common.css" scoped></style>
<style src="~/assets/css/pages/resources/hero.css" scoped></style>
<style src="~/assets/css/pages/resources/article-grid.css" scoped></style>
<style src="~/assets/css/pages/resources/faq.css" scoped></style>
<style src="~/assets/css/pages/resources/cta.css" scoped></style>
<style src="~/assets/css/pages/resources/responsive.css" scoped></style>
