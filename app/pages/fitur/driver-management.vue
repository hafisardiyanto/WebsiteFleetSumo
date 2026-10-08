<script setup>
useHead({
  title: 'Driver Management | FleetSumo',
  meta: [
    { name: 'description', content: 'Pusat data pengemudi, riwayat SIM, dan penugasan armada yang aman dan terkendali.' },
    { property: 'og:title', content: 'Driver Management | FleetSumo' },
    { property: 'og:description', content: 'Pusat data pengemudi, riwayat SIM, dan penugasan armada yang aman dan terkendali.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/driver-management' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/driver-management' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// 01 Hero
import DmHero from '~/components/sections/driver-management/DmHero.vue';
// 02 Use Case
import DmUseCase from '~/components/sections/driver-management/DmUseCase.vue';
// 03 Product Evidence 
import DmEvidence from '~/components/sections/driver-management/DmEvidence.vue';
// 04 Roles & Workflow
import DmRoles from '~/components/sections/driver-management/DmRoles.vue';
// 05 Ecosystem Integration
import DmIntegration from '~/components/sections/driver-management/DmIntegration.vue';
// 06 FAQ
import DmFAQ from '~/components/sections/driver-management/DmFAQ.vue';
// 07 CTA
import DmCTA from '~/components/sections/driver-management/DmCTA.vue';

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
      <DmHero />
      <DmUseCase />
      <DmEvidence />
      <DmRoles />
      <DmIntegration />
      <DmFAQ />
      <DmCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
