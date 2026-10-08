<script setup>
useHead({
  title: 'Fleet Management System | FleetSumo',
  meta: [
    { name: 'description', content: 'Sistem manajemen armada komprehensif untuk memantau kendaraan, pengemudi, dan keseluruhan siklus operasional dalam satu platform sentral.' },
    { property: 'og:title', content: 'Fleet Management System | FleetSumo' },
    { property: 'og:description', content: 'Sistem manajemen armada komprehensif untuk memantau kendaraan, pengemudi, dan keseluruhan siklus operasional dalam satu platform sentral.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/fleet-management' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/fleet-management' }
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
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
