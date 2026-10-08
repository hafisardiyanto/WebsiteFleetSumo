<script setup>
useHead({
  title: 'Fleet Dashboard & Analytics | FleetSumo',
  meta: [
    { name: 'description', content: 'Dasbor interaktif menyajikan visibilitas total metrik performa armada berbasis data seketika.' },
    { property: 'og:title', content: 'Fleet Dashboard & Analytics | FleetSumo' },
    { property: 'og:description', content: 'Dasbor interaktif menyajikan visibilitas total metrik performa armada berbasis data seketika.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/dashboard-reports' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/dashboard-reports' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// 01 Hero
import ReportHero from '~/components/sections/dashboard-reports/ReportHero.vue';
// 02 Capability Flow
import DrCapabilityFlow from '~/components/sections/dashboard-reports/DrCapabilityFlow.vue';
// 03 Evidence 
import DrEvidence from '~/components/sections/dashboard-reports/DrEvidence.vue';
// 04 Ecosystem Link
import DrIntegration from '~/components/sections/dashboard-reports/DrIntegration.vue';
// 05 FAQ
import DrFAQ from '~/components/sections/dashboard-reports/DrFAQ.vue';
// 06 CTA
import ReportCTA from '~/components/sections/dashboard-reports/ReportCTA.vue';

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
      <ReportHero />
      <DrCapabilityFlow />
      <DrEvidence />
      <DrIntegration />
      <DrFAQ />
      <ReportCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
