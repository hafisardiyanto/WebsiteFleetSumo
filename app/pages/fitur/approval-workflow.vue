<script setup>
useHead({
  title: 'Approval Workflow | FleetSumo',
  meta: [
    { name: 'description', content: 'Alur kerja persetujuan digital berjenjang untuk permintaan perbaikan, pembelian, maupun operasional lainnya.' },
    { property: 'og:title', content: 'Approval Workflow | FleetSumo' },
    { property: 'og:description', content: 'Alur kerja persetujuan digital berjenjang untuk permintaan perbaikan, pembelian, maupun operasional lainnya.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/approval-workflow' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/approval-workflow' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// 01 Hero
import ApprovalHero from '~/components/sections/approval-workflow/ApprovalHero.vue';
// 02 Capability Flow
import AwCapabilityFlow from '~/components/sections/approval-workflow/AwCapabilityFlow.vue';
// 03 Evidence 
import AwEvidence from '~/components/sections/approval-workflow/AwEvidence.vue';
// 04 Ecosystem Link
import AwIntegration from '~/components/sections/approval-workflow/AwIntegration.vue';
// 05 FAQ
import AwFAQ from '~/components/sections/approval-workflow/AwFAQ.vue';
// 06 CTA
import ApprovalCTA from '~/components/sections/approval-workflow/ApprovalCTA.vue';

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
      <ApprovalHero />
      <AwCapabilityFlow />
      <AwEvidence />
      <AwIntegration />
      <AwFAQ />
      <ApprovalCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
