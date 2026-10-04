<script setup>
import { onMounted } from 'vue';
import NavbarSection from '~/components/sections/Navbar.vue';

// Import all Fleet & Vehicle Components
import FvHero from '~/components/sections/fleet-vehicle/FvHero.vue';
import FvProblems from '~/components/sections/fleet-vehicle/FvProblems.vue';
import FvDefinition from '~/components/sections/fleet-vehicle/FvDefinition.vue';
import FvManagedItems from '~/components/sections/fleet-vehicle/FvManagedItems.vue';
import FvDetail from '~/components/sections/fleet-vehicle/FvDetail.vue';
import FvList from '~/components/sections/fleet-vehicle/FvList.vue';
import FvFeatures from '~/components/sections/fleet-vehicle/FvFeatures.vue';
import FvWorkflow from '~/components/sections/fleet-vehicle/FvWorkflow.vue';
import FvIntegration from '~/components/sections/fleet-vehicle/FvIntegration.vue';
import FvMonitoring from '~/components/sections/fleet-vehicle/FvMonitoring.vue';
import FvBenefits from '~/components/sections/fleet-vehicle/FvBenefits.vue';
import FvShowcase from '~/components/sections/fleet-vehicle/FvShowcase.vue';
import FvIndustries from '~/components/sections/fleet-vehicle/FvIndustries.vue';
import FvCTA from '~/components/sections/fleet-vehicle/FvCTA.vue';

import FooterSection from '~/components/sections/FooterSection.vue';
import smoothscroll from 'lenis';

onMounted(() => {
  const lenis = new smoothscroll({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
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
      <FvProblems />
      <FvDefinition />
      <FvManagedItems />
      <FvDetail />
      <FvList />
      <FvFeatures />
      <FvWorkflow />
      <FvIntegration />
      <FvMonitoring />
      <FvBenefits />
      <FvShowcase />
      <FvIndustries />
      <FvCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper {
  overflow: hidden;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
