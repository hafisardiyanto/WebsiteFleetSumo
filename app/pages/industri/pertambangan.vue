<script setup>
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

useHead({
  title: 'Solusi Manajemen Armada Pertambangan | FleetSumo',
  meta: [
    { name: 'description', content: 'Kelola data unit pendukung dan armada tambang dengan Cek Kendaraan dari FleetSumo. Catat histori pemeliharaan alat, pergantian suku cadang, dan konsumsi solar.' },
    { property: 'og:title', content: 'Solusi Manajemen Armada Pertambangan | FleetSumo' },
    { property: 'og:description', content: 'Tingkatkan keteraturan pencatatan armada operasional site tambang dengan manajemen log servis, pergantian sparepart, dan administrasi unit terpusat.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/industri/pertambangan' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Manajemen Armada Pertambangan - FleetSumo Cek Kendaraan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Solusi Manajemen Armada Pertambangan | FleetSumo' },
    { name: 'twitter:description', content: 'Kelola data unit pendukung dan armada tambang dengan Cek Kendaraan dari FleetSumo.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/industri/pertambangan' }
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
            "item": "https://fleetsumo.id/industri/pertambangan"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Pertambangan",
            "item": "https://fleetsumo.id/industri/pertambangan"
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
          <span class="ind-badge">Industri Pertambangan</span>
          <h1 class="ind-title">
            Pengelolaan Data Armada & Unit Tambang <span class="highlight">yang Tertib & Akurat</span>
          </h1>
          <p class="ind-subtitle">
            Cek Kendaraan dari FleetSumo memfasilitasi pencatatan terpusat untuk armada pendukung tambang, light vehicle, dan truk pengangkut. Dokumentasikan riwayat perbaikan berkala, penggantian komponen aus, dan log bahan bakar solar di area kerja.
          </p>
          <div class="ind-actions">
            <a href="/kontak/demo" class="btn-primary">Minta Demo Site Tambang</a>
            <a href="/solusi/maintenance-management" class="btn-secondary">Lihat Solusi Maintenance</a>
          </div>
        </div>

        <div class="ind-hero-visual">
          <img src="/assets/Industri/Pertambangan.jpg" alt="Armada Operasional Pertambangan FleetSumo" />
        </div>
      </div>
    </section>

    <!-- 2. Tantangan Operasional Tambang -->
    <section class="ind-section">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Karakteristik Operasional</span>
          <h2 class="sec-title">Tantangan Ekstrem pada Medan Operasional Site</h2>
          <p class="sec-desc">
            Lingkungan kerja tambang yang berdebu, berlumpur, dan beroperasi dalam siklus panjang menuntut pengawasan fisik unit yang disiplin.
          </p>
        </div>

        <div class="problem-grid">
          <div class="problem-card">
            <span class="problem-icon">⚙️</span>
            <h3 class="problem-title">Tingkat Keausan Komponen Tinggi</h3>
            <p class="problem-desc">Jalan tambang non-aspal mempercepat keausan ban, suspensi, filter, dan sistem rem, membutuhkan pencatatan pergantian sparepart yang rinci.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">⏳</span>
            <h3 class="problem-title">Jadwal Perawatan Berkala Ketat</h3>
            <p class="problem-desc">Keterlambatan servis berkala pada unit operasional berisiko menimbulkan breakdown mendadak yang mengganggu ritme logistik di site tambang.</p>
          </div>

          <div class="problem-card">
            <span class="problem-icon">🛢️</span>
            <h3 class="problem-title">Volume Konsumsi Solar Masif</h3>
            <p class="problem-desc">Pengisian solar dari tangki fuel storage site membutuhkan pencatatan literase, nomor unit, dan jam kerja yang akurat agar tidak terjadi deviasi.</p>
          </div>
        </div>

        <!-- 3. Dampak Pencatatan Tersebar -->
        <div class="impact-box">
          <div class="impact-header">
            <h3>Dampak Pencatatan Tersebar di Lokasi Site</h3>
            <p>Formulir kertas lembar kerja mekanik di lapangan kerap terlambat direkap ke kantor pusat, menyebabkan kesenjangan data.</p>
          </div>
          <ul class="impact-list">
            <li>Ketiadaan riwayat perbaikan yang jelas saat unit dipindahkan ke site atau kontraktor lain.</li>
            <li>Stok komponen cadangan habis tanpa terencana karena tidak ada rekaman penggunaan riil.</li>
            <li>Kesulitan menghitung total biaya operasional unit (TCO) per jam kerja atau kilometer.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4. Cara Cek Kendaraan Membantu -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Kapabilitas Sistem</span>
          <h2 class="sec-title">Bagaimana Cek Kendaraan Membantu Operasional Tambang</h2>
          <p class="sec-desc">
            Menghubungkan data perawatan mekanik, administrasi suku cadang, dan catatan log operasional dalam satu platform web.
          </p>
        </div>

        <div class="capability-grid">
          <div class="capability-card">
            <span class="cap-badge">Log Pemeliharaan</span>
            <h3 class="cap-title">Catatan Perawatan Terjadwal</h3>
            <p class="cap-desc">Dokumentasikan agenda servis preventif, pergantian oli rutin, dan perbaikan insidental unit berdasarkan pembacaan meter dan tanggal.</p>
            <a href="/fitur/maintenance" class="cap-link">Lihat Fitur Maintenance &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Suku Cadang & Ban</span>
            <h3 class="cap-title">Pencatatan Sparepart & Ban</h3>
            <p class="cap-desc">Arsipkan riwayat penggantian ban unit dan suku cadang yang digunakan selama unit beroperasi di area penambangan.</p>
            <a href="/fitur/sparepart" class="cap-link">Lihat Fitur Sparepart &rarr;</a>
          </div>

          <div class="capability-card">
            <span class="cap-badge">Administrasi Biaya</span>
            <h3 class="cap-title">Rekap Pengeluaran Operasional</h3>
            <p class="cap-desc">Kompilasi tagihan bengkel luar, pembelian suku cadang lokal, dan biaya bahan bakar ke dalam laporan biaya per nomor lambung unit.</p>
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
          <h2 class="sec-title">Alur Pencatatan Perawatan Armada Site</h2>
          <p class="sec-desc">Mekanisme input kerja teratur dari teknisi lapangan hingga staf logistik perusahaan tambang.</p>
        </div>

        <div class="workflow-timeline">
          <div class="workflow-step">
            <div class="step-num">1</div>
            <h4 class="step-title">Registrasi Nomor Lambung</h4>
            <p class="step-desc">Input data spesifikasi teknis unit, nomor lambung kendaraan, serta dokumen kelayakan operasional site.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">2</div>
            <h4 class="step-title">Input Pemakaian Solar</h4>
            <p class="step-desc">Staf fuelman mencatat liter solar yang disuplai dan angka pembacaan meter terkini kendaraan.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">3</div>
            <h4 class="step-title">Catat Work Order Servis</h4>
            <p class="step-desc">Mekanik mendata pekerjaan perbaikan yang selesai dikerjakan beserta daftar suku cadang yang dipasang.</p>
          </div>

          <div class="workflow-step">
            <div class="step-num">4</div>
            <h4 class="step-title">Tinjau Rekapitulasi Unit</h4>
            <p class="step-desc">Manajer logistik site meninjau histori perawatan dan pengeluaran tiap unit untuk perencanaan rotasi berkala.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FAQ Industri Pertambangan -->
    <section class="ind-section-alt">
      <div class="content-container">
        <div class="sec-header">
          <span class="sec-tag">Pertanyaan Umum</span>
          <h2 class="sec-title">FAQ Manajemen Armada Pertambangan</h2>
        </div>

        <div class="faq-grid">
          <div class="faq-card">
            <h3 class="faq-q">Apakah sistem ini terhubung dengan sensor telemetri alat berat secara live?</h3>
            <p class="faq-a">Tidak. Cek Kendaraan difokuskan pada sistem pencatatan data operasional berbasis web, rekaman servis bengkel, administrasi dokumen, dan biaya. Sistem tidak terhubung langsung dengan sensor telematika live GPS.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bisakah kami mengelompokkan kendaraan berdasarkan nomor lambung di site?</h3>
            <p class="faq-a">Ya. Anda dapat mencatat nomor lambung, kode site, tipe unit, dan penugasan penanggung jawab pada setiap data kendaraan.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Bagaimana pencatatan ban tambang dilakukan?</h3>
            <p class="faq-a">Melalui modul pencatatan ban, tim dapat mendata nomor seri ban, tanggal pemasangan, posisi roda, dan alasan penggantian ban saat aus.</p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">Apakah data historis unit tetap tersimpan saat pergantian tahun?</h3>
            <p class="faq-a">Ya. Semua riwayat pekerjaan servis, pemakaian onderdil, dan catatan biaya tersimpan permanen dalam database terpusat untuk referensi jangka panjang.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. CTA Penutup -->
    <section class="ind-cta-banner">
      <div class="content-container">
        <h2 class="cta-title">Tingkatkan Ketertiban Data Armada Site Anda</h2>
        <p class="cta-desc">
          Pelajari bagaimana sistem web Cek Kendaraan membantu tim site dan kantor pusat mengelola riwayat kendaraan secara rapi.
        </p>
        <a href="/kontak/demo" class="btn-primary">Jadwalkan Konsultasi Demo</a>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<style src="~/assets/css/pages/industri/industri-page.css" scoped></style>
