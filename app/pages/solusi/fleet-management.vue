<script setup>
import { onMounted } from 'vue';
import NavbarSection from '~/components/sections/Navbar.vue';
import FleetHero from '~/components/sections/fleet-management/FleetHero.vue';
import FleetProblems from '~/components/sections/fleet-management/FleetProblems.vue';
import FleetDefinition from '~/components/sections/fleet-management/FleetDefinition.vue';
import FleetManagedItems from '~/components/sections/fleet-management/FleetManagedItems.vue';
import FleetCycle from '~/components/sections/fleet-management/FleetCycle.vue';
import FleetWorkflow from '~/components/sections/fleet-management/FleetWorkflow.vue';
import FleetFeatures from '~/components/sections/fleet-management/FleetFeatures.vue';
import FleetPreview from '~/components/sections/fleet-management/FleetPreview.vue';
import FleetMonitoring from '~/components/sections/fleet-management/FleetMonitoring.vue';
import FleetBenefits from '~/components/sections/fleet-management/FleetBenefits.vue';
import FleetIntegration from '~/components/sections/fleet-management/FleetIntegration.vue';
import FleetIndustries from '~/components/sections/fleet-management/FleetIndustries.vue';
import FleetCTA from '~/components/sections/fleet-management/FleetCTA.vue';
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
      <FleetHero />
      <FleetProblems />
      <FleetDefinition />
      <FleetManagedItems />
      <FleetCycle />
      <FleetWorkflow />
      <FleetFeatures />
      <FleetPreview />
      <FleetMonitoring />
      <FleetBenefits />
      <FleetIntegration />
      <FleetIndustries />
      <FleetCTA />
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
