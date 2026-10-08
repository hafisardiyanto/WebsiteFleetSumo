<script setup>
useHead({
  title: 'Inventory Sparepart | FleetSumo',
  meta: [
    { name: 'description', content: 'Kendali stok gudang, suku cadang, dan riwayat pemakaian onderdil kendaraan.' },
    { property: 'og:title', content: 'Inventory Sparepart | FleetSumo' },
    { property: 'og:description', content: 'Kendali stok gudang, suku cadang, dan riwayat pemakaian onderdil kendaraan.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/sparepart' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/sparepart' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// 01 Hero
import SparepartHero from '~/components/sections/sparepart-management/SparepartHero.vue';
// 02 Capability Flow
import SpCapabilityFlow from '~/components/sections/sparepart-management/SpCapabilityFlow.vue';
// 03 Evidence 
import SpEvidence from '~/components/sections/sparepart-management/SpEvidence.vue';
// 04 Ecosystem Link
import SpIntegration from '~/components/sections/sparepart-management/SpIntegration.vue';
// 05 FAQ
import SpFAQ from '~/components/sections/sparepart-management/SpFAQ.vue';
// 06 CTA
import SparepartCTA from '~/components/sections/sparepart-management/SparepartCTA.vue';

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
      <SparepartHero />
      <SpCapabilityFlow />
      <SpEvidence />
      <SpIntegration />
      <SpFAQ />
      <SparepartCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
