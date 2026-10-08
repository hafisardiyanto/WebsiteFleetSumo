<script setup>
useHead({
  title: 'Fleet Maintenance Software | FleetSumo',
  meta: [
    { name: 'description', content: 'Pencatatan aktivitas bengkel, instruksi kerja, dan pelacakan riwayat servis perbaikan kendaraan.' },
    { property: 'og:title', content: 'Fleet Maintenance Software | FleetSumo' },
    { property: 'og:description', content: 'Pencatatan aktivitas bengkel, instruksi kerja, dan pelacakan riwayat servis perbaikan kendaraan.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/maintenance' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/maintenance' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// 01 Hero
import MntHero from '~/components/sections/maintenance/MntHero.vue';
// 02 Capability Flow
import MmCapabilityFlow from '~/components/sections/maintenance/MmCapabilityFlow.vue';
// 03 Evidence 
import MmEvidence from '~/components/sections/maintenance/MmEvidence.vue';
// 04 Ecosystem Link
import MmIntegration from '~/components/sections/maintenance/MmIntegration.vue';
// 05 FAQ
import MmFAQ from '~/components/sections/maintenance/MmFAQ.vue';
// 06 CTA
import MntCTA from '~/components/sections/maintenance/MntCTA.vue';

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
      <MntHero />
      <MmCapabilityFlow />
      <MmEvidence />
      <MmIntegration />
      <MmFAQ />
      <MntCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
