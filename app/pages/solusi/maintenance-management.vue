<script setup>
useHead({
  title: 'Maintenance Management System | FleetSumo',
  meta: [
    { name: 'description', content: 'Kelola jadwal perawatan, penugasan teknisi, dan persetujuan perbaikan kendaraan armada untuk mencegah downtime operasional.' },
    { property: 'og:title', content: 'Maintenance Management System | FleetSumo' },
    { property: 'og:description', content: 'Kelola jadwal perawatan, penugasan teknisi, dan persetujuan perbaikan kendaraan armada untuk mencegah downtime operasional.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/maintenance-management' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/maintenance-management' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// Section 01: Hero
import MaintHero from '~/components/sections/maintenance-management/MaintHero.vue';
// Section 02: Operational Challenge
import MaintProblems from '~/components/sections/maintenance-management/MaintProblems.vue';
// Section 03: Solution Overview (Kontrol Proses)
import MaintDefinition from '~/components/sections/maintenance-management/MaintDefinition.vue';
// Section 04: History Tracking
import MaintHistory from '~/components/sections/maintenance-management/MaintHistory.vue';
// Section 05: Approval Workflow
import MaintWorkflow from '~/components/sections/maintenance-management/MaintWorkflow.vue';
// Section 06: Executive/Product Proof
import MaintPreview from '~/components/sections/maintenance-management/MaintPreview.vue';
// Section 07: Integration / Related
import MaintIntegration from '~/components/sections/maintenance-management/MaintIntegration.vue';
// Section 08: Business Value
import MaintBenefits from '~/components/sections/maintenance-management/MaintBenefits.vue';
// Section 09: CTA
import MaintCTA from '~/components/sections/maintenance-management/MaintCTA.vue';

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
      <MaintHero />
      <MaintProblems />
      <MaintDefinition />
      <MaintHistory />
      <MaintWorkflow />
      <MaintPreview />
      <MaintIntegration />
      <MaintBenefits />
      <MaintCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
