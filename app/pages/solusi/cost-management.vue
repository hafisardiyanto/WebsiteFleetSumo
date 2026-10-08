<script setup>
useHead({
  title: 'Fleet Cost Management | FleetSumo',
  meta: [
    { name: 'description', content: 'Kontrol dan analisis biaya armada secara mendalam untuk setiap kendaraan demi mencapai efisiensi finansial yang terukur.' },
    { property: 'og:title', content: 'Fleet Cost Management | FleetSumo' },
    { property: 'og:description', content: 'Kontrol dan analisis biaya armada secara mendalam untuk setiap kendaraan demi mencapai efisiensi finansial yang terukur.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/cost-management' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/cost-management' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// Section 01: Hero
import CostHero from '~/components/sections/cost-management/CostHero.vue';
// Section 02: Operational Challenge
import CostProblems from '~/components/sections/cost-management/CostProblems.vue';
// Section 03: Solution Overview
import CostDefinition from '~/components/sections/cost-management/CostDefinition.vue';
// Section 04: Biaya per Kendaraan
import CostManagedItems from '~/components/sections/cost-management/CostManagedItems.vue';
// Section 05: Perbandingan & Tren
import CostWorkflow from '~/components/sections/cost-management/CostWorkflow.vue';
// Section 06: Business Value
import CostBenefits from '~/components/sections/cost-management/CostBenefits.vue';
// Section 07: Integration
import CostIntegration from '~/components/sections/cost-management/CostIntegration.vue';
// Section 08: Executive/Product Proof
import CostPreview from '~/components/sections/cost-management/CostPreview.vue';
// Section 09: CTA
import CostCTA from '~/components/sections/cost-management/CostCTA.vue';

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
      <CostHero />
      <CostProblems />
      <CostDefinition />
      <CostManagedItems />
      <CostWorkflow />
      <CostPreview />
      <CostIntegration />
      <CostBenefits />
      <CostCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
