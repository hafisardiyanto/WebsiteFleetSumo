<script setup>
useHead({
  title: 'Fuel Management System | FleetSumo',
  meta: [
    { name: 'description', content: 'Pelacakan dan analisis konsumsi bahan bakar (BBM) armada Anda untuk meningkatkan efisiensi dan transparansi operasional.' },
    { property: 'og:title', content: 'Fuel Management System | FleetSumo' },
    { property: 'og:description', content: 'Pelacakan dan analisis konsumsi bahan bakar (BBM) armada Anda untuk meningkatkan efisiensi dan transparansi operasional.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/fuel-management' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/fuel-management' }
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
  <main class="page-wrapper">
    <NavbarSection />
    
    <div class="content-wrapper">
      <FuelHero />
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
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
