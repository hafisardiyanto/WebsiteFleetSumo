<script setup>
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

useHead({
  title: 'Solusi Manajemen Armada Konstruksi | FleetSumo',
  meta: [
    { name: 'description', content: 'Kelola armada proyek konstruksi dan infrastruktur dengan Cek Kendaraan dari FleetSumo. Catat histori unit truk, penugasan proyek, dan biaya perawatan.' },
    { property: 'og:title', content: 'Solusi Manajemen Armada Konstruksi | FleetSumo' },
    { property: 'og:description', content: 'Tingkatkan keteraturan data armada proyek infrastruktur. Pantau riwayat servis mixer beton, dump truck, dan alokasi unit antar-lokasi proyek.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/industri/konstruksi' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Manajemen Armada Konstruksi - FleetSumo Cek Kendaraan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Solusi Manajemen Armada Konstruksi | FleetSumo' },
    { name: 'twitter:description', content: 'Kelola armada proyek konstruksi dan infrastruktur dengan Cek Kendaraan dari FleetSumo.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/industri/konstruksi' }
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
            "item": "https://fleetsumo.id/industri/konstruksi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Konstruksi",
            "item": "https://fleetsumo.id/industri/konstruksi"
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
          <span class="ind-badge">Industri Konstruksi</span>
          <h1 class="ind-title">
            Pengelolaan Data Armada Proyek Konstruksi <span class="highlight">yang Lebih Disiplin</span>
          </h1>
          <p class="ind-subtitle">
            Cek Kendaraan dari FleetSumo memfasilitasi pencatatan terpusat untuk dump truck material, truk mixer beton, dan kendaraan operasional proyek. Dokumentasikan riwayat perbaikan bengkel, perpindahan unit antar-proyek, dan alokasi biaya secara transparan.
          </p>
          <div class="ind-actions">
            <a href="/kontak/demo" class="btn-primary">Minta Demo Tim Proyek</a>
            <a href="/solusi/cost-management" class="btn-secondary">Lihat Solusi Biaya</a>
          </div>
        </div>

        <div class="ind-hero-visual">
          <img src="/assets/Industri/Konstruksi.jpg" alt="Armada Proyek Konstruksi FleetSumo" />
        </div>
      </div>
    </section>

    <!-- 2. Tantangan Operasional Konstruksi -->
    <section class="ind-section">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Dinamika Lapangan</span>
          <h2 class="sec-title">Tantangan Rotasi Armada Antar-Proyek Lapangan</h2>
          <p class="sec-desc">
            Proyek pembangunan gedung, jalan, dan infrastruktur melibatkan armada yang berpindah lokasi kerja sesuai progres konstruksi.
          </p>
        </div>

        <div class="problem-grid">
          <div class="problem-card">
            <span class="problem-icon">🏗️</span>
            <h3 class="problem-title">Mobilisasi Unit Berpindah-pindah</h3>
            <p class="problem-desc">Kendaraan sering dimutasi dari proyek A ke proyek B tanpa serah terima data riwayat kondisi fisik dan catatan servis terkini.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">🛠️</span>
            <h3 class="problem-title">Ketergantungan Bengkel Lokal Proyek</h3>
            <p class="problem-desc">Perbaikan insidental di bengkel pinggir jalan sekitar lokasi proyek kerap menghasilkan kuitansi yang terlambat ditagihkan dan diverifikasi.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">📊</span>
            <h3 class="problem-title">Beban Biaya Per Paket Pekerjaan</h3>
            <p class="problem-desc">Sulit memisahkan pengeluaran perawatan dan bahan bakar kendaraan untuk dihitung sebagai beban anggaran proyek tertentu.</p>
          </div>
        </div>

        <!-- 3. Dampak Pencatatan Tersebar -->
        <div class="impact-box">
          <div class="impact-header">
            <h3>Dampak Arsip Tersebar pada Kontraktor</h3>
            <p>Ketiadaan catatan tunggal menyebabkan estimasi anggaran operasional kendaraan proyek melenceng dari RAB yang disetujui.</p>
          </div>
          <ul class="impact-list">
            <li>Risiko unit mangkrak di lokasi proyek akibat suku cadang kritis tidak dipersiapkan sebelumnya.</li>
            <li>Klaim biaya perbaikan ganda dari vendor lokal karena tidak ada rekam jejak pekerjaan sebelumnya.</li>
            <li>Manajemen pusat kesulitan memastikan kendaraan siap diterjunkan ke proyek baru berikutnya.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4. Cara Cek Kendaraan Membantu -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Kapabilitas Sistem</span>
          <h2 class="sec-title">Bagaimana Cek Kendaraan Membantu Kontraktor Konstruksi</h2>
          <p class="sec-desc">
            Menyatukan arsip penugasan unit, riwayat servis bengkel, dan rekapitulasi vendor lokal dalam sistem web terpadu.
          </p>
        </div>

        <div class="capability-grid">
          <div class="capability-card">
            <span class="cap-badge">Penugasan Unit</span>
            <h3 class="cap-title">Catatan Alokasi Proyek</h3>
            <p class="cap-desc">Dokumentasikan status alokasi unit pada proyek konstruksi aktif untuk kejelasan penanggung jawab lapangan.</p>
            <a href="/fitur/fleet-vehicle" class="cap-link">Lihat Fitur Fleet & Vehicle &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Manajemen Vendor</span>
            <h3 class="cap-title">Arsip Bengkel Rekanan Proyek</h3>
            <p class="cap-desc">Catat identitas bengkel lokal, riwayat pekerjaan servis, dan faktur penagihan perbaikan unit.</p>
            <a href="/fitur/vendor" class="cap-link">Lihat Fitur Vendor &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Pengendalian Biaya</span>
            <h3 class="cap-title">Rekap Biaya Per Kendaraan</h3>
            <p class="cap-desc">Kelompokkan pengeluaran perawatan, ban, dan BBM per kendaraan untuk mempermudah evaluasi beban proyek.</p>
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
          <h2 class="sec-title">Alur Pengelolaan Armada Lapangan Konstruksi</h2>
          <p class="sec-desc">Langkah praktis bagi logistik proyek dalam mendata pergerakan teknis armada.</p>
        </div>

        <div class="workflow-timeline">
          <div class="workflow-step">
            <div class="step-num">1</div>
            <h4 class="step-title">Catat Penempatan Unit</h4>
            <p class="step-desc">Input data unit kendaraan dan lokasi proyek penugasan pada sistem web.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">2</div>
            <h4 class="step-title">Input Riwayat Servis Proyek</h4>
            <p class="step-desc">Logistik proyek menginput nota perbaikan bengkel rekanan atau pergantian oli.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">3</div>
            <h4 class="step-title">Verifikasi Dokumen & Biaya</h4>
            <p class="step-desc">Periksa tagihan perbaikan dan kelengkapan administrasi unit secara terpusat.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">4</div>
            <h4 class="step-title">Laporan Utilisasi Unit</h4>
            <p class="step-desc">Kompilasi laporan histori kendaraan untuk persiapan mobilisasi ke proyek berikutnya.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FAQ Industri Konstruksi -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Pertanyaan Umum</span>
          <h2 class="sec-title">FAQ Manajemen Armada Konstruksi</h2>
        </div>

        <div class="faq-grid">
          <div class="faq-card">
            <h3 class="faq-q">Apakah sistem ini mencakup tracking pergerakan GPS kendaraan di peta?</h3>
            <p class="faq-a">Tidak. Cek Kendaraan berfokus pada pencatatan administratif data kendaraan, riwayat pemeliharaan berkala, pencatatan biaya, dokumen legalitas, dan supir berbasis web.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bisakah kami mencatat truk yang disewa dari pihak ketiga (rental)?</h3>
            <p class="faq-a">Ya. Anda dapat mendaftarkan unit berstatus sewa dengan mencatat vendor penyedia dan masa kontrak operasionalnya.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bagaimana jika satu proyek menggunakan beberapa bengkel rekanan berbeda?</h3>
            <p class="faq-a">Anda dapat mengarsipkan setiap bengkel dalam modul Vendor dan mengaitkan nota perbaikan dengan bengkel terkait.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Apakah format laporan biaya dapat diekspor untuk lampiran klaim proyek?</h3>
            <p class="faq-a">Data rekapitulasi dapat ditinjau melalui dasbor laporan untuk mempermudah penyusunan laporan keuangan proyek.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. CTA Penutup -->
    <section class="ind-cta-banner">
      <div class="content-container">
        <h2 class="cta-title">Tingkatkan Transparansi Armada Proyek Anda</h2>
        <p class="cta-desc">
          Konsultasikan kemudahan pencatatan armada konstruksi dan administrasi bengkel proyek bersama tim FleetSumo.
        </p>
        <a href="/kontak/demo" class="btn-primary">Jadwalkan Konsultasi Demo</a>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<style src="~/assets/css/pages/industri/hero.css" scoped></style>
<style src="~/assets/css/pages/industri/hero.css" scoped></style>
<style src="~/assets/css/pages/industri/section-base.css" scoped></style>
<style src="~/assets/css/pages/industri/problem-grid.css" scoped></style>
<style src="~/assets/css/pages/industri/impact-box.css" scoped></style>
<style src="~/assets/css/pages/industri/capability.css" scoped></style>
<style src="~/assets/css/pages/industri/workflow.css" scoped></style>
<style src="~/assets/css/pages/industri/faq.css" scoped></style>
<style src="~/assets/css/pages/industri/cta.css" scoped></style>
<style src="~/assets/css/pages/industri/responsive.css" scoped></style>
<style src="~/assets/css/pages/industri/problem-grid.css" scoped></style>
<style src="~/assets/css/pages/industri/impact-box.css" scoped></style>
<style src="~/assets/css/pages/industri/capability.css" scoped></style>
<style src="~/assets/css/pages/industri/workflow.css" scoped></style>
<style src="~/assets/css/pages/industri/faq.css" scoped></style>
<style src="~/assets/css/pages/industri/cta.css" scoped></style>
<style src="~/assets/css/pages/industri/responsive.css" scoped></style>
