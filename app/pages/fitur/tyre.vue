<script setup>
useHead({
  title: 'Tyre Management System | FleetSumo',
  meta: [
    { name: 'description', content: 'Pendataan siklus hidup ban dari pembelian, rotasi, hingga afkir dengan data teknis yang rinci.' },
    { property: 'og:title', content: 'Tyre Management System | FleetSumo' },
    { property: 'og:description', content: 'Pendataan siklus hidup ban dari pembelian, rotasi, hingga afkir dengan data teknis yang rinci.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/tyre' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/tyre' }
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
  <main class="page-wrapper">
    <NavbarSection />
    
    <div class="content-wrapper">
      <TyreHero />
      <TmCapabilityFlow />
      <TmEvidence />
      <TmIntegration />
      <TmFAQ />
      <TyreCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
