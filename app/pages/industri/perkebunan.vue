<script setup>
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

useHead({
  title: 'Solusi Manajemen Armada Perkebunan | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Kelola data armada dan kendaraan perkebunan dengan Cek Kendaraan dari Cek Kendaraan. Catat riwayat servis unit langsir, penggantian ban traksi, dan solar estate.' },
    { property: 'og:title', content: 'Solusi Manajemen Armada Perkebunan | Cek Kendaraan' },
    { property: 'og:description', content: 'Sistem manajemen data armada perkebunan kelapa sawit dan komoditas. Tertibkan pencatatan traktor, truk angkut TBS, dan perbaikan bengkel kebun.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/industri/perkebunan' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Manajemen Armada Perkebunan - Cek Kendaraan Cek Kendaraan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Solusi Manajemen Armada Perkebunan | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Kelola data armada dan kendaraan perkebunan dengan Cek Kendaraan dari Cek Kendaraan.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/industri/perkebunan' }
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
            "name": "Industri",
            "item": "https://fleetsumo.id/industri/perkebunan"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Perkebunan",
            "item": "https://fleetsumo.id/industri/perkebunan"
          }
        ]
      })
    }
  ]
});
</script>

<template>
  <div class="industri-wrapper">
    <NavbarSection />

    <!-- 1. Hero Section -->
    <section class="ind-hero-section">
      <div class="content-container">
        <div class="ind-hero-header">
          <span class="ind-badge">Industri Perkebunan</span>
          <h1 class="ind-title">
            Pengelolaan Data Armada & Unit Perkebunan <span class="highlight">yang Rapi & Terpusat</span>
          </h1>
          <p class="ind-subtitle">
            Cek Kendaraan dari Cek Kendaraan membantu manajemen perkebunan mengelola pencatatan truk angkut panen, traktor kebun, dan kendaraan operasional afdeling. Pantau riwayat bengkel kebun, penggantian ban traksi, dan catatan solar operasional secara teratur.
          </p>
          <div class="ind-actions">
            <a href="/kontak/demo" class="btn-primary">Minta Demo Estate Kebun</a>
            <a href="/solusi/tyre-management" class="btn-secondary">Lihat Solusi Ban</a>
          </div>
        </div>

        <div class="ind-hero-visual">
          <img src="/assets/Industri/Perkebunan.jpg" alt="Armada Operasional Perkebunan Cek Kendaraan" />
        </div>
      </div>
    </section>

    <!-- 2. Tantangan Operasional Perkebunan -->
    <section class="ind-section">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Kondisi Lapangan</span>
          <h2 class="sec-title">Tantangan Geografis & Jalan Non-Aspal Kebun</h2>
          <p class="sec-desc">
            Operasional angkut hasil panen kelapa sawit atau komoditas agro tersebar di puluhan afdeling dengan kondisi jalan tanah basah.
          </p>
        </div>

        <div class="problem-grid">
          <div class="problem-card">
            <span class="problem-icon">🚜</span>
            <h3 class="problem-title">Beban Berat & Jalan Berlumpur</h3>
            <p class="problem-desc">Jalan tanah liat saat musim hujan memberi beban ekstra pada kopling, gardan, dan ban truk pengangkut TBS, menuntut pencatatan servis rutin yang disiplin.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">📍</span>
            <h3 class="problem-title">Lokasi Tersebar Antar-Divisi</h3>
            <p class="problem-desc">Jarak puluhan kilometer antar-afdeling dan pool bengkel sentral menyulitkan pelacakan kondisi fisik kendaraan dan kelengkapan dokumen unit.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">🛞</span>
            <h3 class="problem-title">Siklus Aus Ban Traksi Cepat</h3>
            <p class="problem-desc">Penggunaan ban pacul atau traksi tinggi di jalan berbatu kebun membutuhkan pencatatan tanggal pasang dan alasan afkir ban secara terstruktur.</p>
          </div>
        </div>

        <!-- 3. Dampak Pencatatan Tersebar -->
        <div class="impact-box">
          <div class="impact-header">
            <h3>Dampak Arsip Fisik Manual di Perkebunan</h3>
            <p>Buku catatan bengkel kebun yang terpisah antar-afdeling menyulitkan manajemen kantor wilayah mengontrol biaya riil pemeliharaan.</p>
          </div>
          <ul class="impact-list">
            <li>Truk mogok saat musim panen puncak akibat kelalaian jadwal pergantian pelumas dan filter.</li>
            <li>Stok suku cadang fast-moving (kampas rem, bearing, u-bolt) tidak terkontrol antara gudang dan bengkel.</li>
            <li>Pengeluaran solar jatah langsir sulit direkonsiliasi dengan riwayat perjalanan unit.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4. Cara Cek Kendaraan Membantu -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Solusi Terpadu</span>
          <h2 class="sec-title">Bagaimana Cek Kendaraan Menertibkan Administrasi Kebun</h2>
          <p class="sec-desc">
            Membangun pusat database digital yang mudah digunakan oleh petugas administrasi estate dan kepala bengkel.
          </p>
        </div>

        <div class="capability-grid">
          <div class="capability-card">
            <span class="cap-badge">Data Kendaraan</span>
            <h3 class="cap-title">Arsip Unit & Penempatan Divisi</h3>
            <p class="cap-desc">Klasifikasikan unit berdasarkan afdeling, fungsi (truk TBS, unit pupuk, traktor), dan dokumen legalitas kendaraan.</p>
            <a href="/fitur/fleet-vehicle" class="cap-link">Lihat Fitur Fleet & Vehicle &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Pengelolaan Ban</span>
            <h3 class="cap-title">Histori Pemasangan & Aus Ban</h3>
            <p class="cap-desc">Catat nomor seri ban, merek, dan tanggal pasang pada tiap poros roda untuk mengevaluasi ketahanan merek ban di medan kebun.</p>
            <a href="/fitur/tyre" class="cap-link">Lihat Fitur Tyre &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Bengkel Kebun</span>
            <h3 class="cap-title">Pencatatan Servis & Suku Cadang</h3>
            <p class="cap-desc">Dokumentasikan perintah kerja perbaikan bengkel kebun serta pemakaian oli dan onderdil per nomor kendaraan.</p>
            <a href="/fitur/maintenance" class="cap-link">Lihat Fitur Maintenance &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Alur Kerja Realistis -->
    <section class="ind-section">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Alur Kerja</span>
          <h2 class="sec-title">Alur Pengelolaan Armada di Area Perkebunan</h2>
          <p class="sec-desc">Siklus pencatatan terstruktur yang mudah dipahami oleh staf operasional lapangan.</p>
        </div>

        <div class="workflow-timeline">
          <div class="workflow-step">
            <div class="step-num">1</div>
            <h4 class="step-title">Registrasi Unit & Penempatan</h4>
            <p class="step-desc">Input data unit kerja, nomor lambung, serta afdeling penempatan kendaraan di perkebunan.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">2</div>
            <h4 class="step-title">Pencatatan Solar & Jam Kerja</h4>
            <p class="step-desc">Petugas logistik kebun menginput pengeluaran solar dan angka odometer/hour meter unit.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">3</div>
            <h4 class="step-title">Catat Perbaikan di Bengkel</h4>
            <p class="step-desc">Mekanik mendata keluhan teknis, pergantian suku cadang, dan pekerjaan servis yang selesai.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">4</div>
            <h4 class="step-title">Laporan Biaya Per Afdeling</h4>
            <p class="step-desc">Tinjau rekapitulasi pengeluaran perbaikan dan operasional per divisi untuk efisiensi budget estate.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FAQ Industri Perkebunan -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Pertanyaan Umum</span>
          <h2 class="sec-title">FAQ Manajemen Armada Perkebunan</h2>
        </div>

        <div class="faq-grid">
          <div class="faq-card">
            <h3 class="faq-q">Apakah Cek Kendaraan dapat digunakan untuk unit traktor kebun?</h3>
            <p class="faq-a">Ya. Sistem mendukung pencatatan unit traktor, truk bak kayu/besi, tangki CPO, maupun mobil dinas afdeling dalam satu database.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bagaimana mencatat pergantian suku cadang di bengkel internal kebun?</h3>
            <p class="faq-a">Melalui modul Maintenance dan Sparepart, staf bengkel dapat mendata jenis suku cadang yang digunakan, tanggal pemasangan, dan unit kendaraan yang menerimanya.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Apakah aplikasi ini memerlukan koneksi internet berkecepatan tinggi terus-menerus?</h3>
            <p class="faq-a">Cek Kendaraan adalah aplikasi web responsif. Staf dapat melakukan input saat berada di kantor afdeling atau kantor sentral estate yang memiliki akses jaringan.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bisakah kami melacak riwayat pengemudi yang berganti-ganti?</h3>
            <p class="faq-a">Ya. Modul Driver Management menyediakan pencatatan data pengemudi dan catatan unit yang sedang ditugaskan.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. CTA Penutup -->
    <section class="ind-cta-banner">
      <div class="content-container">
        <h2 class="cta-title">Tata Kelola Armada Kebun Lebih Terkontrol</h2>
        <p class="cta-desc">
          Konsultasikan kebutuhan pencatatan kendaraan dan suku cadang perkebunan Anda bersama tim Cek Kendaraan.
        </p>
        <a href="/kontak/demo" class="btn-primary">Jadwalkan Konsultasi Demo</a>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<style src="~/assets/css/pages/industri/hero.css" scoped></style>
<style src="~/assets/css/pages/industri/section-base.css" scoped></style>
<style src="~/assets/css/pages/industri/problem-grid.css" scoped></style>
<style src="~/assets/css/pages/industri/impact-box.css" scoped></style>
<style src="~/assets/css/pages/industri/capability.css" scoped></style>
<style src="~/assets/css/pages/industri/workflow.css" scoped></style>
<style src="~/assets/css/pages/industri/faq.css" scoped></style>
<style src="~/assets/css/pages/industri/cta.css" scoped></style>
<style src="~/assets/css/pages/industri/responsive.css" scoped></style>
