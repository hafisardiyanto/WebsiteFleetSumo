<script setup>
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

useHead({
  title: 'Solusi Manajemen Armada Manufaktur | FleetSumo',
  meta: [
    { name: 'description', content: 'Kelola data armada distribusi manufaktur dengan Cek Kendaraan dari FleetSumo. Catat histori pemeliharaan truk pabrik, dokumen KIR, dan log pengeluaran BBM.' },
    { property: 'og:title', content: 'Solusi Manajemen Armada Manufaktur | FleetSumo' },
    { property: 'og:description', content: 'Sistem pencatatan armada logistik pabrik dan rantai pasok manufaktur. Optimalkan kesiapan unit angkut barang dan kelengkapan dokumen berkala.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/industri/manufaktur' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Manajemen Armada Manufaktur - FleetSumo Cek Kendaraan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Solusi Manajemen Armada Manufaktur | FleetSumo' },
    { name: 'twitter:description', content: 'Kelola data armada distribusi manufaktur dengan Cek Kendaraan dari FleetSumo.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/industri/manufaktur' }
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
            "item": "https://fleetsumo.id/industri/manufaktur"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Manufaktur",
            "item": "https://fleetsumo.id/industri/manufaktur"
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
          <span class="ind-badge">Industri Manufaktur</span>
          <h1 class="ind-title">
            Pengelolaan Data Armada Pabrik & Distribusi <span class="highlight">yang Terkendali</span>
          </h1>
          <p class="ind-subtitle">
            Cek Kendaraan dari FleetSumo membantu industri manufaktur mengelola pencatatan armada logistik pabrik, truk distribusi barang jadi, dan kendaraan operasional. Pantau riwayat servis bengkel, kepatuhan dokumen KIR, dan rekapitulasi biaya perjalanan secara terstruktur.
          </p>
          <div class="ind-actions">
            <a href="/kontak/demo" class="btn-primary">Minta Demo Pabrik</a>
            <a href="/solusi/fleet-management" class="btn-secondary">Lihat Solusi Fleet</a>
          </div>
        </div>

        <div class="ind-hero-visual">
          <img src="/assets/Industri/Manufaktur.jpg" alt="Armada Distribusi Manufaktur FleetSumo" />
        </div>
      </div>
    </section>

    <!-- 2. Tantangan Operasional Manufaktur -->
    <section class="ind-section">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Kebutuhan Rantai Pasok</span>
          <h2 class="sec-title">Tuntutan Kesiapan Unit dalam Jadwal Pengiriman Ketat</h2>
          <p class="sec-desc">
            Keterlambatan pengiriman produk dari pabrik ke gudang distributor akibat armada mogok dapat mengganggu rantai pasok pelanggan.
          </p>
        </div>

        <div class="problem-grid">
          <div class="problem-card">
            <span class="problem-icon">🏭</span>
            <h3 class="problem-title">Jadwal Muat & Distribusi Terjadwal</h3>
            <p class="problem-desc">Armada harus dalam status prima saat jadwal muat barang selesai diproduksi untuk menjaga komitmen delivery time.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">📋</span>
            <h3 class="problem-title">Standar Uji KIR & Legalitas Pabrik</h3>
            <p class="problem-desc">Audit kepatuhan keselamatan internal pabrik mewajibkan seluruh kendaraan distribusi memiliki dokumen masa uji berkala yang valid.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">📈</span>
            <h3 class="problem-title">Efisiensi Biaya Distribusi Produk</h3>
            <p class="problem-desc">Pencatatan pengeluaran bensin, tol, dan perawatan bengkel yang terpisah menyulitkan penghitungan biaya logistik per unit produksi.</p>
          </div>
        </div>

        <!-- 3. Dampak Pencatatan Tersebar -->
        <div class="impact-box">
          <div class="impact-header">
            <h3>Dampak Pencatatan Tersebar bagi Tim Logistik Pabrik</h3>
            <p>Tanpa sistem pencatatan terpusat, koordinasi antara tim gudang, pengemudi, dan pengelola bengkel armada menjadi lambat.</p>
          </div>
          <ul class="impact-list">
            <li>Risiko truk tertahan di pos pemeriksaan karena KIR atau STNK telah melewati masa berlaku.</li>
            <li>Kurangnya transparansi atas pengeluaran servis berkala yang diajukan supir antar-kota.</li>
            <li>Sulit mengevaluasi kondisi fisik kendaraan yang sudah mendekati batas usia ekonomis.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4. Cara Cek Kendaraan Membantu -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Fitur Penunjang</span>
          <h2 class="sec-title">Bagaimana Cek Kendaraan Membantu Armada Manufaktur</h2>
          <p class="sec-desc">
            Menyediakan arsip digital lengkap untuk memastikan setiap armada siap mendukung operasional distribusi pabrik.
          </p>
        </div>

        <div class="capability-grid">
          <div class="capability-card">
            <span class="cap-badge">Arsip Dokumen</span>
            <h3 class="cap-title">Catatan Legalitas & Masa Berlaku</h3>
            <p class="cap-desc">Simpan tanggal berlaku KIR, STNK, dan asuransi unit armada agar dapat dipersiapkan sebelum kedaluwarsa.</p>
            <a href="/fitur/fleet-vehicle" class="cap-link">Lihat Fitur Fleet & Vehicle &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Perawatan Preventif</span>
            <h3 class="cap-title">Catatan Servis & Riwayat Bengkel</h3>
            <p class="cap-desc">Arsipkan riwayat servis berkala, ganti oli, dan perbaikan rem kendaraan box untuk mencegah kendala saat di jalan raya.</p>
            <a href="/fitur/maintenance" class="cap-link">Lihat Fitur Maintenance &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Kontrol Biaya</span>
            <h3 class="cap-title">Rekapitulasi Pengeluaran Armada</h3>
            <p class="cap-desc">Kumpulkan data pembelian BBM, tol, dan biaya pemeliharaan untuk mempermudah perhitungan biaya operasional per rute distribusi.</p>
            <a href="/fitur/cost-financial" class="cap-link">Lihat Fitur Cost & Financial &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Alur Kerja Realistis -->
    <section class="ind-section">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Alur Kerja</span>
          <h2 class="sec-title">Alur Pengelolaan Armada Distribusi Pabrik</h2>
          <p class="sec-desc">Mekanisme kerja teratur antara staf logistik pabrik dan bagian armada.</p>
        </div>

        <div class="workflow-timeline">
          <div class="workflow-step">
            <div class="step-num">1</div>
            <h4 class="step-title">Registrasi Unit & Pengemudi</h4>
            <p class="step-desc">Input data truk box, nomor polisi, dan profil pengemudi yang bertugas mengirim produk.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">2</div>
            <h4 class="step-title">Catat Odometer & Log Bahan Bakar</h4>
            <p class="step-desc">Input angka kilometer dan pengisian BBM setiap kali kendaraan selesai menempuh rute pengantaran.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">3</div>
            <h4 class="step-title">Input Pemeliharaan Rutin</h4>
            <p class="step-desc">Catat pekerjaan perbaikan atau penggantian suku cadang yang dikerjakan bengkel rekanan.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">4</div>
            <h4 class="step-title">Tinjau Rekap Pengeluaran</h4>
            <p class="step-desc">Gunakan data operasional terpusat untuk rekonsiliasi biaya bulanan divisi logistik pabrik.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FAQ Industri Manufaktur -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Pertanyaan Umum</span>
          <h2 class="sec-title">FAQ Manajemen Armada Manufaktur</h2>
        </div>

        <div class="faq-grid">
          <div class="faq-card">
            <h3 class="faq-q">Apakah Cek Kendaraan terhubung dengan ERP internal pabrik?</h3>
            <p class="faq-a">Cek Kendaraan beroperasi sebagai sistem web terdedikasi untuk pengelolaan data operasional armada, kendaraan, supir, servis, dan biaya. Sistem ini tidak memerlukan konektor ERP khusus.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bisakah kami mencatat truk pengangkut dingin (chilled/reefer)?</h3>
            <p class="faq-a">Ya. Anda dapat mencatat spesifikasi teknis unit pendingin pada deskripsi kendaraan beserta riwayat servis kompresor pendingin di modul maintenance.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bagaimana memantau pengeluaran bensin armada supir antarkota?</h3>
            <p class="faq-a">Staf administrasi logistik dapat menginput data transaksi pengisian bahan bakar, nilai rupiah, dan angka kilometer saat supir menyerahkan rekap nota.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Apakah sistem dapat membedakan armada milik sendiri dan armada pihak ketiga?</h3>
            <p class="faq-a">Ya. Anda dapat memberi label status kepemilikan unit untuk membedakan kendaraan aset perusahaan dan armada sewa.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. CTA Penutup -->
    <section class="ind-cta-banner">
      <div class="content-container">
        <h2 class="cta-title">Siap Menertibkan Armada Distribusi Pabrik Anda?</h2>
        <p class="cta-desc">
          Konsultasikan kebutuhan pencatatan kendaraan dan kontrol pemeliharaan armada manufaktur bersama tim FleetSumo.
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
