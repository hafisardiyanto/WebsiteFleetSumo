<script setup>
useHead({
  title: 'Fitur Administrasi Biaya & Anggaran Operasional | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Catat administrasi biaya perjalanan, tol, parkir, dan retribusi, serta pantau realisasi pengeluaran terhadap anggaran operasional armada.' },
    { property: 'og:title', content: 'Fitur Administrasi Biaya & Anggaran Operasional | Cek Kendaraan' },
    { property: 'og:description', content: 'Catat administrasi biaya perjalanan, tol, parkir, dan retribusi, serta pantau realisasi pengeluaran terhadap anggaran operasional armada.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/cost-financial' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-fitur-cost.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Fitur Administrasi Biaya Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fitur Administrasi Biaya & Anggaran Operasional | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Catat administrasi biaya perjalanan, tol, parkir, dan retribusi, serta pantau realisasi pengeluaran terhadap anggaran operasional armada.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-fitur-cost.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/cost-financial' }
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
            "name": "Fitur",
            "item": "https://fleetsumo.id/fitur/cost-financial"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Cost Financial",
            "item": "https://fleetsumo.id/fitur/cost-financial"
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

// 01 Hero
import CostHero from '~/components/sections/cost-financial/CostHero.vue';
// 02 Capability Flow
import CfCapabilityFlow from '~/components/sections/cost-financial/CfCapabilityFlow.vue';
// 03 Evidence 
import CfEvidence from '~/components/sections/cost-financial/CfEvidence.vue';
// 04 Ecosystem Link
import CfIntegration from '~/components/sections/cost-financial/CfIntegration.vue';
// 05 FAQ
import CfFAQ from '~/components/sections/cost-financial/CfFAQ.vue';
// 06 CTA
import CostCTA from '~/components/sections/cost-financial/CostCTA.vue';

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
      <CostHero />
      <CfCapabilityFlow />
      <CfEvidence />
      <CfIntegration />
      <CfFAQ />
      <CostCTA />
    </div>

    <FooterSection />
  </main>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \fitur\cost-financial.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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
