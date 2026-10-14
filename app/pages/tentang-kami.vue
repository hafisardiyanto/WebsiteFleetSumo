<script setup>
useHead({
  title: 'Tentang Cek Kendaraan | Software Manajemen Armada Indonesia',
  meta: [
    { name: 'description', content: 'Mengenal Cek Kendaraan, platform software manajemen armada dari Indonesia yang membantu perusahaan mengoptimalkan tata kelola dan efisiensi operasional kendaraan.' },
    { property: 'og:title', content: 'Tentang Cek Kendaraan | Software Manajemen Armada Indonesia' },
    { property: 'og:description', content: 'Mengenal Cek Kendaraan, platform software manajemen armada dari Indonesia yang membantu perusahaan mengoptimalkan tata kelola dan efisiensi operasional kendaraan.' },
    { property: 'og:url', content: 'https://fleetsumo.id/tentang-kami' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-tentang-kami.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Solusi Manajemen Ban Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Tentang Cek Kendaraan | Software Manajemen Armada Indonesia' },
    { name: 'twitter:description', content: 'Mengenal Cek Kendaraan, platform software manajemen armada dari Indonesia yang membantu perusahaan mengoptimalkan tata kelola dan efisiensi operasional kendaraan.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-tentang-kami.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/tentang-kami' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
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
                "name": "Tentang Kami",
                "item": "https://fleetsumo.id/tentang-kami"
              }
            ]
          },
          {
            "@type": "Organization",
            "@id": "https://fleetsumo.id/#organization",
            "name": "FleetSumo",
            "url": "https://fleetsumo.id",
            "logo": "https://fleetsumo.id/assets/og/og-home.png",
            "email": "info@fleetsumo.id"
          }
        ]
      })
    }
  ]
})

import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';
</script>

<template>
  <main class="page-wrapper">
    <NavbarSection />

    <div class="about-container">
      <!-- Hero Section -->
      <section class="about-hero">
        <span class="hero-badge">TENTANG CEK KENDARAAN</span>
        <h1 class="hero-title">Membangun Ekosistem Manajemen Armada Terstruktur untuk Operasional Bisnis</h1>
        <p class="hero-desc">
          Cek Kendaraan hadir sebagai solusi software manajemen armada terintegrasi yang dirancang untuk menjawab tantangan operasional kendaraan operasional di Indonesia. Kami membantu tim operasional dan manajemen menghubungkan pencatatan kendaraan, jadwal pemeliharaan bengkel, pengawasan BBM, siklus pemakaian ban, hingga kontitle: 'Monitoring Operasional Armada \u0026 Sistem Pelaporan | Cek Kendaraan',ral yang transparan.
        </p>
      </section>

      <!-- Vision & Mission Section -->
      <section id="visi" class="vision-mission-section">
        <div class="section-header">
          <h2 class="section-title">Visi dan Misi Kami</h2>
          <p class="section-subtitle">Arah dan komitmen kami dalam mendampingi pertumbuhan efisiensi armada perusahaan Anda.</p>
        </div>

        <div class="vm-grid">
          <div class="vm-card">
            <div class="vm-icon">🎯</div>
            <h3 class="vm-title">Visi Kami</h3>
            <p class="vm-text">
              Menjadi platform manajemen armada terdepan di Indonesia yang memberikan transparansi data, visibilitas realistik, dan keunggulan operasional bagi setiap bisnis yang mengoperasikan armada komersial.
            </p>
          </div>

          <div class="vm-card">
            <div class="vm-icon">🚀</div>
            <h3 class="vm-title">Misi Kami</h3>
            <ul class="vm-list">
              <li>Mendigitalisasi pencatatan armada dari level lapangan hingga pelaporan eksekutif manajemen.</li>
              <li>Membantu perusahaan menekan inefisiensi biaya perawatan, konsumsi bahan bakar, dan pergantian ban prematur.</li>
              <li>Menyediakan alur kerja persetujuan yang tertib, transparan, dan dapat dipertanggungjawabkan dalam setiap keputusan operasional.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section">
        <div class="section-header">
          <h2 class="section-title">Pendekatan Nilai Solusi Cek Kendaraan</h2>
          <p class="section-subtitle">Prinsip fundamental kami dalam merancang platform manajemen armada yang andal dan aplikatif.</p>
        </div>

        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🔍</div>
            <h3 class="value-title">Transparansi & Akurasi Data</h3>
            <p class="value-desc">
              Menyatukan pencatatan operasional yang semula terpisah ke dalam basis data terpusat, memudahkan pelacakan histori kendaraan dan histori biaya secara konsisten.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">📉</div>
            <h3 class="value-title">Pengendalian Biaya Operasional</h3>
            <p class="value-desc">
              Memberikan visibilitas terperinci atas setiap komponen pengeluaran, mulai dari servis preventif, bahan bakar, hingga administrasi operasional harian.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">⚙️</div>
            <h3 class="value-title">Alur Kerja yang Terkendali</h3>
            <p class="value-desc">
              Mendukung tata kelola birokrasi operasional yang sehat melalui approval berjenjang, meminimalisir kesalahan manual serta memastikan setiap pekerjaan tervalidasi.
            </p>
          </div>
        </div>
      </section>

      <!-- About CTA -->
      <section class="about-cta-section">
        <div class="cta-inner">
          <h2 class="cta-title">Siap Mengoptimalkan Pengelolaan Armada Anda?</h2>
          <p class="cta-desc">Pelajari bagaimana Cek Kendaraan dapat disesuaikan dengan alur kerja armada perusahaan Anda bersama tim kami.</p>
          <div class="cta-actions">
            <NuxtLink to="/kontak/demo" class="btn-primary">Jadwalkan Sesi Demo &rarr;</NuxtLink>
            <NuxtLink to="/solusi/fleet-management" class="btn-secondary">Pelajari Solusi Armada</NuxtLink>
          </div>
        </div>
      </section>
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper {
  overflow: hidden;
  background-color: #ffffff;
}

.about-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 120px 24px 80px 24px;
}

.about-hero {
  text-align: center;
  max-width: 860px;
  margin: 0 auto 80px auto;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  background-color: #eff6ff;
  color: #1a56db;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: 9999px;
  margin-bottom: 20px;
}

.hero-title {
  font-size: 38px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
  margin-bottom: 24px;
}

.hero-desc {
  font-size: 17px;
  color: #475569;
  line-height: 1.7;
}

.section-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 48px auto;
}

.section-title {
  font-size: 30px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
}

.vision-mission-section {
  padding: 60px 0;
  border-top: 1px solid #f1f5f9;
}

.vm-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.vm-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
}

.vm-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.vm-title {
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
}

.vm-text {
  font-size: 15.5px;
  color: #475569;
  line-height: 1.65;
}

.vm-list {
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 15px;
  color: #475569;
  line-height: 1.6;
}

.values-section {
  padding: 80px 0 60px 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.value-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 32px 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
}

.value-icon {
  font-size: 28px;
  margin-bottom: 16px;
}

.value-title {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}

.value-desc {
  font-size: 14.5px;
  color: #64748b;
  line-height: 1.6;
}

.about-cta-section {
  margin-top: 60px;
  padding: 60px 32px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 20px;
  text-align: center;
  color: #ffffff;
}

.cta-inner {
  max-width: 680px;
  margin: 0 auto;
}

.cta-title {
  font-size: 28px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
}

.cta-desc {
  font-size: 16px;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 32px;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  background-color: #f97316;
  color: #ffffff;
  padding: 13px 28px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #ea580c;
}

.btn-secondary {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 13px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background-color 0.2s ease;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.18);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 28px;
  }
  .vm-grid, .values-grid {
    grid-template-columns: 1fr;
  }
  .about-container {
    padding: 100px 20px 60px 20px;
  }
}
</style>
