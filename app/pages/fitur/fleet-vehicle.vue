<script setup>
useHead({
  title: 'Fitur Database Kendaraan & Arsip Dokumen Armada | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Kelola data teknis unit, riwayat kepemilikan, serta pencatatan masa berlaku dokumen STNK dan KIR kendaraan armada dalam satu database terpusat.' },
    { property: 'og:title', content: 'Fitur Database Kendaraan & Arsip Dokumen Armada | Cek Kendaraan' },
    { property: 'og:description', content: 'Kelola data teknis unit, riwayat kepemilikan, serta pencatatan masa berlaku dokumen STNK dan KIR kendaraan armada dalam satu database terpusat.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/fleet-vehicle' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-fitur-fleet-vehicle.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Fitur Database Kendaraan & Dokumen' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fitur Database Kendaraan & Arsip Dokumen Armada | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Kelola data teknis unit, riwayat kepemilikan, serta pencatatan masa berlaku dokumen STNK dan KIR kendaraan armada dalam satu database terpusat.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-fitur-fleet-vehicle.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/fleet-vehicle' }
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
            "item": "https://fleetsumo.id/fitur/fleet-vehicle"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Fleet & Vehicle",
            "item": "https://fleetsumo.id/fitur/fleet-vehicle"
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
import FvHero from '~/components/sections/fleet-vehicle/FvHero.vue';
// 02 Capability Flow
import FvCapabilityFlow from '~/components/sections/fleet-vehicle/FvCapabilityFlow.vue';
// 03 Evidence 
import FvEvidence from '~/components/sections/fleet-vehicle/FvEvidence.vue';
// 04 Ecosystem Link
import FvIntegration from '~/components/sections/fleet-vehicle/FvIntegration.vue';
// 05 FAQ
import FvFAQ from '~/components/sections/fleet-vehicle/FvFAQ.vue';
// 06 CTA
import FvCTA from '~/components/sections/fleet-vehicle/FvCTA.vue';

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
      <FvHero />
      <FvCapabilityFlow />
      <FvEvidence />
      <FvIntegration />
      <FvFAQ />
      <FvCTA />
    </div>

    <FooterSection />
  </main>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \fitur\fleet-vehicle.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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
