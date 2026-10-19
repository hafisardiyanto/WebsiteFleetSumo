<script setup>
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

useHead({
  title: 'Solusi Manajemen Armada Logistik & Transportasi | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Optimalkan pengelolaan data armada logistik dan transportasi dengan Cek Kendaraan dari Cek Kendaraan. Catat riwayat kendaraan, supir, servis bengkel, dan kontrol BBM.' },
    { property: 'og:title', content: 'Solusi Manajemen Armada Logistik & Transportasi | Cek Kendaraan' },
    { property: 'og:description', content: 'Tingkatkan keteraturan operasional ekspedisi dan distribusi dengan pencatatan data kendaraan terpusat, riwayat mekanik, dan administrasi armada.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/industri/logistik-transportasi' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Manajemen Armada Logistik dan Transportasi - Cek Kendaraan Cek Kendaraan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Solusi Manajemen Armada Logistik & Transportasi | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Optimalkan pengelolaan data armada logistik dan transportasi dengan Cek Kendaraan dari Cek Kendaraan.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/industri/logistik-transportasi' }
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
            "item": "https://fleetsumo.id/industri/logistik-transportasi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Logistik & Transportasi",
            "item": "https://fleetsumo.id/industri/logistik-transportasi"
          }
        ]
      })
    }
  ]
});
</script>

<template>

    <h1 class="hero-title" data-aos="fade-up">Cek Kendaraan – Solusi Manajemen Armada Terintegrasi</h1>
<div class="industri-wrapper">
    <NavbarSection />

    <!-- 1. Hero Section -->
    <section class="ind-hero-section">
      <div class="content-container">
        <div class="ind-hero-header">
          <span class="ind-badge">Industri Logistik & Transportasi</span>
          <h1 class="ind-title">
            Pengelolaan Data Armada Logistik & Transportasi <span class="highlight">yang Lebih Terstruktur</span>
          </h1>
          <p class="ind-subtitle">
            Cek Kendaraan dari Cek Kendaraan membantu perusahaan ekspedisi, kurir, dan angkutan barang mengelola data teknis kendaraan, riwayat supir, pencatatan servis bengkel, dan kontrol operasional dalam satu platform web terpusat.
          </p>
          <div class="ind-actions">
            <a href="/kontak/demo" class="btn-primary">Minta Demo Gratis</a>
            <a href="/solusi/fleet-management" class="btn-secondary">Jelajahi Solusi Fleet</a>
          </div>
        </div>

        <div class="ind-hero-visual">
          <img src="/assets/Industri/Logistik & Transportasi.jpg" alt="Armada Logistik dan Transportasi Cek Kendaraan" />
        </div>
      </div>
    </section>

    <!-- 2. Tantangan Operasional Logistik -->
    <section class="ind-section">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Tantangan Operasional</span>
          <h2 class="sec-title">Kompleksitas Tata Kelola Armada Berkecepatan Tinggi</h2>
          <p class="sec-desc">
            Bisnis transportasi dan distribusi menghadapi pergerakan armada harian yang intensif dengan tuntutan ketepatan waktu pengiriman.
          </p>
        </div>

        <div class="problem-grid">
          <div class="problem-card">
            <span class="problem-icon">🚚</span>
            <h3 class="problem-title">Tingkat Utilisasi Unit Tinggi</h3>
            <p class="problem-desc">Jarak tempuh kilometer yang cepat bertambah menuntut pencatatan odometer dan riwayat teknis yang selalu terbarui agar jadwal servis tidak terlewat.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">👨‍✈️</span>
            <h3 class="problem-title">Rotasi & Penugasan Pengemudi</h3>
            <p class="problem-desc">Satu unit kendaraan kerap dioperasikan oleh supir bergantian antar-shift, menyulitkan tracking tanggung jawab fisik dan dokumen SIM pengemudi.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">⛽</span>
            <h3 class="problem-title">Variasi Biaya BBM & Perjalanan</h3>
            <p class="problem-desc">Pengeluaran bahan bakar dan tol di berbagai rute rentan terhadap pencatatan manual yang tercecer dan keterlambatan rekonsiliasi kas.</p>
          </div>
        </div>

        <!-- 3. Dampak Pencatatan Tersebar -->
        <div class="impact-box">
          <div class="impact-header">
            <h3>Dampak Pencatatan yang Terfragmentasi</h3>
            <p>Ketika data kendaraan tersimpan dalam spreadsheet terpisah dan bon fisik kertas, manajemen kehilangan visibilitas komprehensif.</p>
          </div>
          <ul class="impact-list">
            <li>Risiko breakdown tak terduga di tengah perjalanan akibat keterlambatan servis berkala.</li>
            <li>Kesulitan mengidentifikasi unit yang boros konsumsi BBM atau sering mengalami kerusakan.</li>
            <li>Biaya administrasi membengkak untuk mencocokkan struk fisik perawatan bengkel.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4. Cara Cek Kendaraan Membantu -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Solusi Terintegrasi</span>
          <h2 class="sec-title">Bagaimana Cek Kendaraan Membantu Armada Logistik</h2>
          <p class="sec-desc">
            Membangun sistem arsip dan pengawasan berbasis data untuk memastikan kesiapan operasional setiap truk dan mobil niaga.
          </p>
        </div>

        <div class="capability-grid">
          <div class="capability-card">
            <span class="cap-badge">Database Armada</span>
            <h3 class="cap-title">Arsip Unit & Dokumen STNK/KIR</h3>
            <p class="cap-desc">Simpan nomor rangka, masa berlaku uji KIR, STNK, dan spesifikasi unit dalam database terstruktur untuk mencegah tilang operasional.</p>
            <a href="/fitur/fleet-vehicle" class="cap-link">Lihat Fitur Fleet & Vehicle &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Servis Berkala</span>
            <h3 class="cap-title">Work Order & Riwayat Bengkel</h3>
            <p class="cap-desc">Catat instruksi kerja perbaikan, penggantian oli, dan histori suku cadang yang digunakan di bengkel rekanan atau internal.</p>
            <a href="/fitur/maintenance" class="cap-link">Lihat Fitur Maintenance &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Kontrol Bahan Bakar</span>
            <h3 class="cap-title">Pencatatan Transaksi BBM</h3>
            <p class="cap-desc">Log pengisian bahan bakar, nilai rupiah, dan rasio kilometer tempuh untuk menganalisis efisiensi bahan bakar per rute logistik.</p>
            <a href="/fitur/fuel" class="cap-link">Lihat Fitur Fuel &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Alur Kerja Realistis -->
    <section class="ind-section">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Alur Kerja</span>
          <h2 class="sec-title">Alur Operasional yang Realistis & Tertib</h2>
          <p class="sec-desc">Proses pencatatan harian yang mudah diadopsi oleh staf administrasi dan koordinator pool armada.</p>
        </div>

        <div class="workflow-timeline">
          <div class="workflow-step">
            <div class="step-num">1</div>
            <h4 class="step-title">Registrasi Unit & Supir</h4>
            <p class="step-desc">Input data unit kendaraan, masa berlaku dokumen legalitas, serta pengemudi yang bertugas pada sistem.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">2</div>
            <h4 class="step-title">Catat Penugasan & Odometer</h4>
            <p class="step-desc">Perbarui posisi penugasan unit dan angka odometer terkini saat armada berangkat atau kembali ke pool.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">3</div>
            <h4 class="step-title">Input Servis & Log Biaya</h4>
            <p class="step-desc">Catat invoice servis bengkel, penggantian onderdil, serta struk bahan bakar yang diajukan supir.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">4</div>
            <h4 class="step-title">Rekap Laporan Operasional</h4>
            <p class="step-desc">Tinjau rekapitulasi biaya per unit dan tren pemeliharaan armada untuk bahan evaluasi manajerial bulanan.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FAQ Industri Logistik -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Pertanyaan Umum</span>
          <h2 class="sec-title">FAQ Manajemen Armada Logistik</h2>
        </div>

        <div class="faq-grid">
          <div class="faq-card">
            <h3 class="faq-q">Apakah Cek Kendaraan membutuhkan alat GPS khusus pada truk?</h3>
            <p class="faq-a">Tidak. Cek Kendaraan adalah sistem berbasis web untuk pencatatan administrasi data, riwayat perawatan, dokumen, dan biaya. Sistem ini tidak memerlukan instalasi perangkat keras telematika khusus.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bagaimana sistem membantu memantau masa berlaku uji KIR kendaraan?</h3>
            <p class="faq-a">Tim armada dapat mencatat tanggal kedaluwarsa uji KIR dan STNK pada profil kendaraan sehingga jadwal perpanjangan dokumen dapat ditinjau sebelum habis masa berlakunya.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bisakah kami mencatat riwayat vendor bengkel eksternal?</h3>
            <p class="faq-a">Ya. Fitur Manajemen Vendor memungkinkan Anda mengarsipkan data bengkel rekanan, riwayat perbaikan yang dilakukan, dan estimasi biaya yang ditagihkan.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Apakah aplikasi ini dapat diakses oleh beberapa staf pool?</h3>
            <p class="faq-a">Ya. Sistem berbasis web dapat diakses oleh tim administrasi, manajer operasional, dan staf bengkel sesuai dengan kebutuhan pengelolaan armada.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. CTA Penutup -->
    <section class="ind-cta-banner">
      <div class="content-container">
        <h2 class="cta-title">Siap Menertibkan Administrasi Armada Logistik Anda?</h2>
        <p class="cta-desc">
          Konsultasikan kebutuhan pencatatan kendaraan dan alur operasional armada ekspedisi Anda bersama tim Cek Kendaraan.
        </p>
        <a href="/kontak/demo" class="btn-primary">Jadwalkan Konsultasi Demo</a>
      </div>
    </section>

    <FooterSection />
  </div>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \industri\logistik-transportasi.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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

<style src="~/assets/css/pages/industri/hero.css" scoped></style>
<style src="~/assets/css/pages/industri/section-base.css" scoped></style>
<style src="~/assets/css/pages/industri/problem-grid.css" scoped></style>
<style src="~/assets/css/pages/industri/impact-box.css" scoped></style>
<style src="~/assets/css/pages/industri/capability.css" scoped></style>
<style src="~/assets/css/pages/industri/workflow.css" scoped></style>
<style src="~/assets/css/pages/industri/faq.css" scoped></style>
<style src="~/assets/css/pages/industri/cta.css" scoped></style>
<style src="~/assets/css/pages/industri/responsive.css" scoped></style>
