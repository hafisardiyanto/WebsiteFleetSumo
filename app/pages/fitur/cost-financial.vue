<script setup>
useHead({
  title: 'Fleet Cost Management | FleetSumo',
  meta: [
    { name: 'description', content: 'Pencatatan administrasi pengeluaran, perbandingan anggaran, dan estimasi biaya operasional.' },
    { property: 'og:title', content: 'Fleet Cost Management | FleetSumo' },
    { property: 'og:description', content: 'Pencatatan administrasi pengeluaran, perbandingan anggaran, dan estimasi biaya operasional.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/cost-financial' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/cost-financial' }
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
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
