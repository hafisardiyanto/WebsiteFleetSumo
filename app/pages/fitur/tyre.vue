<script setup>
useHead({
  title: 'Fitur Pelacakan Posisi & Rotasi Ban Kendaraan | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Modul pencatatan teknis nomor seri ban, log rotasi as roda, pengukuran kedalaman tapak ban, hingga status afkir ban kendaraan operasional.' },
    { property: 'og:title', content: 'Fitur Pelacakan Posisi & Rotasi Ban Kendaraan | Cek Kendaraan' },
    { property: 'og:description', content: 'Modul pencatatan teknis nomor seri ban, log rotasi as roda, pengukuran kedalaman tapak ban, hingga status afkir ban kendaraan operasional.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/tyre' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-fitur-tyre.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Fitur Pelacakan & Rotasi Ban Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fitur Pelacakan Posisi & Rotasi Ban Kendaraan | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Modul pencatatan teknis nomor seri ban, log rotasi as roda, pengukuran kedalaman tapak ban, hingga status afkir ban kendaraan operasional.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-fitur-tyre.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/tyre' }
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
            "item": "https://fleetsumo.id/fitur/tyre"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tyre",
            "item": "https://fleetsumo.id/fitur/tyre"
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
import TyreHero from '~/components/sections/tyre-management/TyreHero.vue';
// 02 Capability Flow
import TmCapabilityFlow from '~/components/sections/tyre-management/TmCapabilityFlow.vue';
// 03 Evidence 
import TmEvidence from '~/components/sections/tyre-management/TmEvidence.vue';
// 04 Ecosystem Link
import TmIntegration from '~/components/sections/tyre-management/TmIntegration.vue';
// 05 FAQ
import TmFAQ from '~/components/sections/tyre-management/TmFAQ.vue';
// 06 CTA
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
      <h2 class="section-title" data-aos="fade-up">Fitur Pelacakan & Manajemen Ban Armada</h2>
      <p data-aos="fade-up" data-aos-delay="100">Fitur ini memungkinkan pelacakan posisi, rotasi, dan kondisi ban secara real‑time, membantu mengoptimalkan siklus pakai dan mengurangi biaya operasional.</p>
      <TmCapabilityFlow />
      <TmEvidence />
      <TmIntegration />
      <TmFAQ />
      <TyreCTA />
    </div>

    <FooterSection />
  </main>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \fitur\tyre.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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
