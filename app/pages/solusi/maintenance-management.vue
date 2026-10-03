<script setup>
import { onMounted } from 'vue';
import NavbarSection from '~/components/sections/Navbar.vue';
import MaintHero from '~/components/sections/maintenance-management/MaintHero.vue';
import MaintProblems from '~/components/sections/maintenance-management/MaintProblems.vue';
import MaintDefinition from '~/components/sections/maintenance-management/MaintDefinition.vue';
import MaintManagedItems from '~/components/sections/maintenance-management/MaintManagedItems.vue';
import MaintCycle from '~/components/sections/maintenance-management/MaintCycle.vue';
import MaintWorkflow from '~/components/sections/maintenance-management/MaintWorkflow.vue';
import MaintFeatures from '~/components/sections/maintenance-management/MaintFeatures.vue';
import MaintPreview from '~/components/sections/maintenance-management/MaintPreview.vue';
import MaintMonitoring from '~/components/sections/maintenance-management/MaintMonitoring.vue';
import MaintBenefits from '~/components/sections/maintenance-management/MaintBenefits.vue';
import MaintIntegration from '~/components/sections/maintenance-management/MaintIntegration.vue';
import MaintIndustries from '~/components/sections/maintenance-management/MaintIndustries.vue';
import MaintCTA from '~/components/sections/maintenance-management/MaintCTA.vue';
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
      <MaintHero />
      <MaintProblems />
      <MaintDefinition />
      <MaintManagedItems />
      <MaintCycle />
      <MaintWorkflow />
      <MaintFeatures />
      <MaintPreview />
      <MaintMonitoring />
      <MaintBenefits />
      <MaintIntegration />
      <MaintIndustries />
      <MaintCTA />
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
