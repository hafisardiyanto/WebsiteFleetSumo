<script setup>
useHead({
  title: 'Sistem Manajemen Armada Terpusat untuk Bisnis | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Solusi fleet management komprehensif untuk memantau status kendaraan, penugasan supir, dan visibilitas siklus operasional armada secara terpadu.' },
    { property: 'og:title', content: 'Sistem Manajemen Armada Terpusat untuk Bisnis | Cek Kendaraan' },
    { property: 'og:description', content: 'Solusi fleet management komprehensif untuk memantau status kendaraan, penugasan supir, dan visibilitas siklus operasional armada secara terpadu.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/fleet-management' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Solusi Fleet Management Terpusat' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sistem Manajemen Armada Terpusat untuk Bisnis | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Solusi fleet management komprehensif untuk memantau status kendaraan, penugasan supir, dan visibilitas siklus operasional armada secara terpadu.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fleet.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/fleet-management' }
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
            "item": "https://fleetsumo.id/solusi/fleet-management"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Fleet Management",
            "item": "https://fleetsumo.id/solusi/fleet-management"
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
import FleetHero from '~/components/sections/fleet-management/FleetHero.vue';
// Section 02: Operational Challenge
import FleetProblems from '~/components/sections/fleet-management/FleetProblems.vue';
// Section 03: Solution Overview
import FleetDefinition from '~/components/sections/fleet-management/FleetDefinition.vue';
// Section 04: Business Value
import FleetBenefits from '~/components/sections/fleet-management/FleetBenefits.vue';
// Section 05: Integration / Kapabilitas Terkait
import FleetIntegration from '~/components/sections/fleet-management/FleetIntegration.vue';
// Section 06: Executive/Product Proof
import FleetPreview from '~/components/sections/fleet-management/FleetPreview.vue';
// Section 07: FAQ
import FleetFAQ from '~/components/sections/fleet-management/FleetFAQ.vue';
// Section 08: CTA
import FleetCTA from '~/components/sections/fleet-management/FleetCTA.vue';

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
      <FleetHero />
      <FleetProblems />
      <FleetDefinition />
      <FleetPreview />
      <FleetIntegration />
      <FleetBenefits />
      <FleetFAQ />
      <FleetCTA />
    </div>

    <FooterSection />
  </main>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \solusi\fleet-management.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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
