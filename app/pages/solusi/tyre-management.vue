<script setup>
useHead({
  title: 'Solusi Manajemen Ban Armada & Pengendalian Biaya | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Kendalikan anggaran ban operasional. Pantau siklus pakai, riwayat mutasi posisi, jarak tempuh, dan keausan ban armada secara terstruktur.' },
    { property: 'og:title', content: 'Solusi Manajemen Ban Armada & Pengendalian Biaya | Cek Kendaraan' },
    { property: 'og:description', content: 'Kendalikan anggaran ban operasional. Pantau siklus pakai, riwayat mutasi posisi, jarak tempuh, dan keausan ban armada secara terstruktur.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/tyre-management' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-tyre.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Solusi Manajemen Ban Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Solusi Manajemen Ban Armada & Pengendalian Biaya | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Kendalikan anggaran ban operasional. Pantau siklus pakai, riwayat mutasi posisi, jarak tempuh, dan keausan ban armada secara terstruktur.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-tyre.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/tyre-management' }
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
            "item": "https://fleetsumo.id/solusi/tyre-management"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tyre Management",
            "item": "https://fleetsumo.id/solusi/tyre-management"
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

// Using Tyre components for the Solution layout
import TyreHero from '~/components/sections/tyre-management/TyreHero.vue';
import TyreProblems from '~/components/sections/tyre-management/TyreProblems.vue';
import TyreSolOverview from '~/components/sections/tyre-management/TyreSolOverview.vue';
import TyreMonitoring from '~/components/sections/tyre-management/TyreMonitoring.vue';
import TyreBenefits from '~/components/sections/tyre-management/TyreBenefits.vue';
import TyreIntegration from '~/components/sections/tyre-management/TyreIntegration.vue';
import TyrePreview from '~/components/sections/tyre-management/TyrePreview.vue';
import TyreCTA from '~/components/sections/tyre-management/TyreCTA.vue';

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
      <TyreHero />
      <h2 class="section-title" data-aos="fade-up">Solusi Manajemen Ban Armada</h2>
      <p data-aos="fade-up" data-aos-delay="100">Dengan modul manajemen ban terintegrasi, Anda dapat memantau siklus pakai, mengontrol biaya, dan memastikan keamanan armada secara optimal.</p>
      <TyreProblems />
      <TyreSolOverview />
      <TyreHistory />
      <TyreMonitoring />
      <TyrePreview />
      <TyreIntegration />
      <TyreBenefits />
      <TyreCTA />
    </div>

    <FooterSection />
  </main>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \solusi\tyre-management.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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
