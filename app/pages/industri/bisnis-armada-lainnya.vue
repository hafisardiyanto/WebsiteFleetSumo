<script setup>
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

useHead({
  title: 'Solusi Manajemen Bisnis Armada Lainnya | FleetSumo',
  meta: [
    { name: 'description', content: 'Kelola data operasional kendaraan berbagai sektor usaha dengan Cek Kendaraan dari FleetSumo. Catat histori pemeliharaan unit, supir, dan biaya secara terpusat.' },
    { property: 'og:title', content: 'Solusi Manajemen Bisnis Armada Lainnya | FleetSumo' },
    { property: 'og:description', content: 'Sistem manajemen data kendaraan fleksibel untuk rental mobil, shuttle bus, jasa katering, dan operasional bisnis dengan armada kendaraan niaga.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/industri/bisnis-armada-lainnya' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Manajemen Bisnis Armada Lainnya - FleetSumo Cek Kendaraan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Solusi Manajemen Bisnis Armada Lainnya | FleetSumo' },
    { name: 'twitter:description', content: 'Kelola data operasional kendaraan berbagai sektor usaha dengan Cek Kendaraan dari FleetSumo.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/industri/bisnis-armada-lainnya' }
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
            "item": "https://fleetsumo.id/industri/bisnis-armada-lainnya"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bisnis Armada Lainnya",
            "item": "https://fleetsumo.id/industri/bisnis-armada-lainnya"
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
          <span class="ind-badge">Sektor Usaha Beragam</span>
          <h1 class="ind-title">
            Pengelolaan Data Kendaraan untuk Berbagai <span class="highlight">Bisnis Berarmada</span>
          </h1>
          <p class="ind-subtitle">
            Cek Kendaraan dari FleetSumo menghadirkan sistem web fleksibel untuk perusahaan rental, shuttle penumpang, katering, jasa pengiriman lokal, dan UMKM. Catat riwayat servis, pergantian pengemudi, serta pengeluaran bahan bakar tanpa alur implementasi yang rumit.
          </p>
          <div class="ind-actions">
            <a href="/kontak/demo" class="btn-primary">Minta Demo Fleksibel</a>
            <a href="/solusi/fleet-management" class="btn-secondary">Lihat Solusi Fleet</a>
          </div>
        </div>

        <div class="ind-hero-visual">
          <img src="/assets/Industri/Bisnis Armada Lainnya.jpg" alt="Armada Aneka Bisnis FleetSumo" />
        </div>
      </div>
    </section>

    <!-- 2. Tantangan Operasional Bisnis Umum -->
    <section class="ind-section">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Kebutuhan Bisnis</span>
          <h2 class="sec-title">Pencatatan Armada Tanpa Beban Sistem yang Rumit</h2>
          <p class="sec-desc">
            Banyak bisnis mengoperasikan belasan hingga puluhan kendaraan namun masih mengandalkan nota kertas dan buku catatan fisik.
          </p>
        </div>

        <div class="problem-grid">
          <div class="problem-card">
            <span class="problem-icon">🚐</span>
            <h3 class="problem-title">Campuran Jenis Kendaraan</h3>
            <p class="problem-desc">Armada operasional terdiri dari sepeda motor kurir, mobil van, minibus, hingga truk kecil dengan kebutuhan servis berbeda-beda.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">📝</span>
            <h3 class="problem-title">Nota Servis & Bon Tercecer</h3>
            <p class="problem-desc">Pengeluaran ganti oli, tambal ban, dan bensin sering kali baru diserahkan berhari-hari setelah transaksi terjadi.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">⏳</span>
            <h3 class="problem-title">Lupa Tanggal Pajak & STNK</h3>
            <p class="problem-desc">Ketiadaan pengingat terpusat membuat perpanjangan masa berlaku pajak kendaraan dan uji kelaikan sering terlewat.</p>
          </div>
        </div>

        <!-- 3. Dampak Pencatatan Tersebar -->
        <div class="impact-box">
          <div class="impact-header">
            <h3>Dampak Tanpa Sistem Terpusat</h3>
            <p>Pemilik usaha kesulitan mengetahui secara pasti berapa pengeluaran riil setiap kendaraan per bulannya.</p>
          </div>
          <ul class="impact-list">
            <li>Biaya tak terduga melonjak saat mobil dinas mendadak rusak berat di tengah aktivitas usaha.</li>
            <li>Sulit memverifikasi apakah klaim nota pengemudi sesuai dengan kilometer perjalanan.</li>
            <li>Harga jual kembali unit turun karena tidak ada riwayat perawatan berkala yang dapat ditunjukkan.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4. Cara Cek Kendaraan Membantu -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Solusi Terjangkau</span>
          <h2 class="sec-title">Bagaimana Cek Kendaraan Membantu Bisnis Anda</h2>
          <p class="sec-desc">
            Sistem web intuitif yang dapat langsung digunakan oleh staf administrasi kantor tanpa perlu keahlian teknis tinggi.
          </p>
        </div>

        <div class="capability-grid">
          <div class="capability-card">
            <span class="cap-badge">Data Kendaraan</span>
            <h3 class="cap-title">Database Unit Praktis</h3>
            <p class="cap-desc">Simpan semua nomor polisi, merek, model, dan tanggal perpanjangan surat kendaraan dalam satu daftar terorganisir.</p>
            <a href="/fitur/fleet-vehicle" class="cap-link">Lihat Fitur Fleet & Vehicle &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Histori Servis</span>
            <h3 class="cap-title">Catatan Servis & Ganti Oli</h3>
            <p class="cap-desc">Arsipkan riwayat servis berkala, ganti ban, dan perbaikan bengkel rekanan agar kondisi kendaraan tetap terpantau.</p>
            <a href="/fitur/maintenance" class="cap-link">Lihat Fitur Maintenance &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Catatan Biaya</span>
            <h3 class="cap-title">Rekap Pengeluaran & BBM</h3>
            <p class="cap-desc">Input nota pembelian bensin, tol, dan servis untuk melihat rekapitulasi pengeluaran per kendaraan setiap bulannya.</p>
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
          <h2 class="sec-title">Alur Pengelolaan Praktis Harian</h2>
          <p class="sec-desc">Pencatatan yang mudah diadopsi oleh tim internal bisnis.</p>
        </div>

        <div class="workflow-timeline">
          <div class="workflow-step">
            <div class="step-num">1</div>
            <h4 class="step-title">Daftarkan Kendaraan</h4>
            <p class="step-desc">Input data identitas seluruh kendaraan operasional yang dimiliki atau disewa perusahaan.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">2</div>
            <h4 class="step-title">Catat Penugasan Supir</h4>
            <p class="step-desc">Tentukan penanggung jawab pengemudi untuk masing-masing unit kerja operasional.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">3</div>
            <h4 class="step-title">Input Nota & Bon</h4>
            <p class="step-desc">Staf admin mencatat bon bensin dan invoice servis saat pengemudi menyerahkan laporan.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">4</div>
            <h4 class="step-title">Tinjau Rekapitulasi</h4>
            <p class="step-desc">Pemilik usaha melihat ringkasan pengeluaran bulanan per kendaraan secara transparan.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FAQ Bisnis Armada Lainnya -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Pertanyaan Umum</span>
          <h2 class="sec-title">FAQ Manajemen Armada Usaha</h2>
        </div>

        <div class="faq-grid">
          <div class="faq-card">
            <h3 class="faq-q">Apakah sistem ini cocok untuk bisnis dengan jumlah armada di bawah 20 unit?</h3>
            <p class="faq-a">Ya. Cek Kendaraan dirancang sangat fleksibel, mulai dari armada kecil belasan unit hingga ratusan unit kendaraan perusahaan.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Apakah perlu memasang alat tambahan di dalam mobil?</h3>
            <p class="faq-a">Tidak perlu. Sistem beroperasi murni berbasis web untuk manajemen data, pencatatan biaya, jadwal perawatan, dan dokumen kendaraan.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bisakah diakses lewat smartphone oleh tim admin?</h3>
            <p class="faq-a">Ya. Antarmuka web Cek Kendaraan responsif dan dapat dibuka melalui browser laptop, tablet, maupun ponsel pintar.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bagaimana jika kami ingin mencoba sistem ini terlebih dahulu?</h3>
            <p class="faq-a">Anda dapat menjadwalkan sesi konsultasi dan demo gratis bersama tim FleetSumo untuk melihat kesesuaian alur dengan bisnis Anda.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. CTA Penutup -->
    <section class="ind-cta-banner">
      <div class="content-container">
        <h2 class="cta-title">Mulai Rapikan Pencatatan Kendaraan Bisnis Anda</h2>
        <p class="cta-desc">
          Tinggalkan spreadsheet yang tercecer dan beralih ke pencatatan armada terstruktur bersama FleetSumo Cek Kendaraan.
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
