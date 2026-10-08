<script setup>
useHead({
  title: 'Vendor Management | FleetSumo',
  meta: [
    { name: 'description', content: 'Basis data dan pengukuran kinerja vendor eksternal untuk pengadaan barang operasional dan layanan perbaikan.' },
    { property: 'og:title', content: 'Vendor Management | FleetSumo' },
    { property: 'og:description', content: 'Basis data dan pengukuran kinerja vendor eksternal untuk pengadaan barang operasional dan layanan perbaikan.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/vendor' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/vendor' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// 01 Hero
import VendorHero from '~/components/sections/vendor-management/VendorHero.vue';
// 02 Capability Flow
import VmCapabilityFlow from '~/components/sections/vendor-management/VmCapabilityFlow.vue';
// 03 Evidence 
import VmEvidence from '~/components/sections/vendor-management/VmEvidence.vue';
// 04 Ecosystem Link
import VmIntegration from '~/components/sections/vendor-management/VmIntegration.vue';
// 05 FAQ
import VmFAQ from '~/components/sections/vendor-management/VmFAQ.vue';
// 06 CTA
import VendorCTA from '~/components/sections/vendor-management/VendorCTA.vue';

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
      <VendorHero />
      <VmCapabilityFlow />
      <VmEvidence />
      <VmIntegration />
      <VmFAQ />
      <VendorCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
