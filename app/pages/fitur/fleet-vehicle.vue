<script setup>
useHead({
  title: 'Vehicle Fleet Management | FleetSumo',
  meta: [
    { name: 'description', content: 'Manajemen basis data kendaraan, dokumen, dan spesifikasi seluruh armada Anda secara terpusat.' },
    { property: 'og:title', content: 'Vehicle Fleet Management | FleetSumo' },
    { property: 'og:description', content: 'Manajemen basis data kendaraan, dokumen, dan spesifikasi seluruh armada Anda secara terpusat.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/fleet-vehicle' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/fleet-vehicle' }
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
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
