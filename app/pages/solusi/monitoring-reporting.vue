<script setup>
useHead({
  title: 'Monitoring Operasional Armada & Sistem Pelaporan | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Ubah data operasional armada menjadi laporan eksekutif yang terstruktur untuk evaluasi efisiensi, utilitas unit, dan performa bisnis secara terpadu.' },
    { property: 'og:title', content: 'Monitoring Operasional Armada & Sistem Pelaporan | Cek Kendaraan' },
    { property: 'og:description', content: 'Ubah data operasional armada menjadi laporan eksekutif yang terstruktur untuk evaluasi efisiensi, utilitas unit, dan performa bisnis secara terpadu.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/monitoring-reporting' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-monitoring.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Solusi Monitoring & Pelaporan Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Monitoring Operasional Armada & Sistem Pelaporan | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Ubah data operasional armada menjadi laporan eksekutif yang terstruktur untuk evaluasi efisiensi, utilitas unit, dan performa bisnis secara terpadu.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-monitoring.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/monitoring-reporting' }
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
            "name": "Solusi",
            "item": "https://fleetsumo.id/solusi/monitoring-reporting"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Monitoring & Reporting",
            "item": "https://fleetsumo.id/solusi/monitoring-reporting"
          }
        ]
      })
    }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// Section 01: Hero
import MonHero from '~/components/sections/monitoring-management/MonHero.vue';
// Section 02: Operational Challenge
import MonProblems from '~/components/sections/monitoring-management/MonProblems.vue';
// Section 03: Collection
import MonInformation from '~/components/sections/monitoring-management/MonInformation.vue';
// Section 04: Reporting
import MonReporting from '~/components/sections/monitoring-management/MonReporting.vue';
// Section 05: Filtering
import MonFilters from '~/components/sections/monitoring-management/MonFilters.vue';
// Section 06: Evidence Layout
import MonPreview from '~/components/sections/monitoring-management/MonPreview.vue';
// Section 07: Features
import MonFeatures from '~/components/sections/monitoring-management/MonFeatures.vue';
// Section 08: Business Value
import MonBenefits from '~/components/sections/monitoring-management/MonBenefits.vue';
// Section 09: CTA
import MonCTA from '~/components/sections/monitoring-management/MonCTA.vue';

onMounted(() => {
  const lenis = new smoothscroll({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>

<template>

    <h1 class="hero-title" data-aos="fade-up">Cek Kendaraan – Solusi Manajemen Armada Terintegrasi</h1>
<main class="page-wrapper">
    <NavbarSection />
    
    <div class="content-wrapper">
      <MonHero />
      <MonProblems />
      <MonInformation />
      <MonReporting />
      <MonFilters />
      <MonPreview />
      <MonFeatures />
      <MonBenefits />
      <MonCTA />
    </div>

    <FooterSection />
  </main>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \solusi\monitoring-reporting.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
