<script setup>
useHead({
  title: 'Solusi Efisiensi & Kontrol Konsumsi BBM Armada | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Tingkatkan transparansi bahan bakar operasional armada Anda. Pantau rasio konsumsi liter per kilometer dan minimalisir risiko inefisiensi BBM.' },
    { property: 'og:title', content: 'Solusi Efisiensi & Kontrol Konsumsi BBM Armada | Cek Kendaraan' },
    { property: 'og:description', content: 'Tingkatkan transparansi bahan bakar operasional armada Anda. Pantau rasio konsumsi liter per kilometer dan minimalisir risiko inefisiensi BBM.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/fuel-management' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fuel.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Solusi Efisiensi Konsumsi BBM Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Solusi Efisiensi & Kontrol Konsumsi BBM Armada | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Tingkatkan transparansi bahan bakar operasional armada Anda. Pantau rasio konsumsi liter per kilometer dan minimalisir risiko inefisiensi BBM.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-fuel.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/fuel-management' }
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
            "item": "https://fleetsumo.id/solusi/fuel-management"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Fuel Management",
            "item": "https://fleetsumo.id/solusi/fuel-management"
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
import FuelHero from '~/components/sections/fuel-management/FuelHero.vue';
// Section 02: Operational Challenge
import FuelProblems from '~/components/sections/fuel-management/FuelProblems.vue';
// Section 03: Solution Overview (Pencatatan Transaksi)
import FuelDefinition from '~/components/sections/fuel-management/FuelDefinition.vue';
// Section 04: Data Penggunaan
import FuelHistory from '~/components/sections/fuel-management/FuelHistory.vue';
// Section 05: Perbandingan
import FuelWorkflow from '~/components/sections/fuel-management/FuelWorkflow.vue';
// Section 06: Executive/Product Proof
import FuelPreview from '~/components/sections/fuel-management/FuelPreview.vue';
// Section 07: Integration / Kapabilitas Terkait
import FuelIntegration from '~/components/sections/fuel-management/FuelIntegration.vue';
// Section 08: Business Value
import FuelBenefits from '~/components/sections/fuel-management/FuelBenefits.vue';
// Section 09: CTA
import FuelCTA from '~/components/sections/fuel-management/FuelCTA.vue';

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
      <FuelHero />
      <h2 class="section-title" data-aos="fade-up">Solusi Pengelolaan BBM Armada</h2>
      <p data-aos="fade-up" data-aos-delay="100">Dengan fitur pencatatan transaksi BBM yang terintegrasi, Anda dapat memantau konsumsi bahan bakar secara real‑time, mengoptimalkan biaya operasional, dan meningkatkan efisiensi armada.</p>
      <FuelProblems />
      <FuelDefinition />
      <FuelHistory />
      <FuelWorkflow />
      <FuelPreview />
      <FuelIntegration />
      <FuelBenefits />
      <FuelCTA />
    </div>

    <FooterSection />
  </main>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \solusi\fuel-management.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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
