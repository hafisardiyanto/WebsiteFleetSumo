<script setup>
import { onMounted } from 'vue';
import NavbarSection from '~/components/sections/Navbar.vue';

// Import all Driver Management Components
import DmHero from '~/components/sections/driver-management/DmHero.vue';
import DmProblems from '~/components/sections/driver-management/DmProblems.vue';
import DmDefinition from '~/components/sections/driver-management/DmDefinition.vue';
import DmManagedItems from '~/components/sections/driver-management/DmManagedItems.vue';
import DmDetail from '~/components/sections/driver-management/DmDetail.vue';
import DmList from '~/components/sections/driver-management/DmList.vue';
import DmFeatures from '~/components/sections/driver-management/DmFeatures.vue';
import DmWorkflow from '~/components/sections/driver-management/DmWorkflow.vue';
import DmIntegration from '~/components/sections/driver-management/DmIntegration.vue';
import DmMonitoring from '~/components/sections/driver-management/DmMonitoring.vue';
import DmBenefits from '~/components/sections/driver-management/DmBenefits.vue';
import DmShowcase from '~/components/sections/driver-management/DmShowcase.vue';
import DmIndustries from '~/components/sections/driver-management/DmIndustries.vue';
import DmCTA from '~/components/sections/driver-management/DmCTA.vue';

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
      <DmHero />
      <DmProblems />
      <DmDefinition />
      <DmManagedItems />
      <DmDetail />
      <DmList />
      <DmFeatures />
      <DmWorkflow />
      <DmIntegration />
      <DmMonitoring />
      <DmBenefits />
      <DmShowcase />
      <DmIndustries />
      <DmCTA />
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
