<script setup>
import { onMounted } from 'vue';
import NavbarSection from '~/components/sections/Navbar.vue';
import FuelHero from '~/components/sections/fuel-management/FuelHero.vue';
import FuelProblems from '~/components/sections/fuel-management/FuelProblems.vue';
import FuelDefinition from '~/components/sections/fuel-management/FuelDefinition.vue';
import FuelManagedItems from '~/components/sections/fuel-management/FuelManagedItems.vue';
import FuelCycle from '~/components/sections/fuel-management/FuelCycle.vue';
import FuelWorkflow from '~/components/sections/fuel-management/FuelWorkflow.vue';
import FuelFeatures from '~/components/sections/fuel-management/FuelFeatures.vue';
import FuelPreview from '~/components/sections/fuel-management/FuelPreview.vue';
import FuelMonitoring from '~/components/sections/fuel-management/FuelMonitoring.vue';
import FuelBenefits from '~/components/sections/fuel-management/FuelBenefits.vue';
import FuelIntegration from '~/components/sections/fuel-management/FuelIntegration.vue';
import FuelIndustries from '~/components/sections/fuel-management/FuelIndustries.vue';
import FuelCTA from '~/components/sections/fuel-management/FuelCTA.vue';
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
      <FuelHero />
      <FuelProblems />
      <FuelDefinition />
      <FuelManagedItems />
      <FuelCycle />
      <FuelWorkflow />
      <FuelFeatures />
      <FuelPreview />
      <FuelMonitoring />
      <FuelBenefits />
      <FuelIntegration />
      <FuelIndustries />
      <FuelCTA />
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
