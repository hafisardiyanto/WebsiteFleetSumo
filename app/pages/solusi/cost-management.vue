<script setup>
import { onMounted } from 'vue';
import NavbarSection from '~/components/sections/Navbar.vue';
import CostHero from '~/components/sections/cost-management/CostHero.vue';
import CostProblems from '~/components/sections/cost-management/CostProblems.vue';
import CostDefinition from '~/components/sections/cost-management/CostDefinition.vue';
import CostManagedItems from '~/components/sections/cost-management/CostManagedItems.vue';
import CostLifecycle from '~/components/sections/cost-management/CostLifecycle.vue';
import CostWorkflow from '~/components/sections/cost-management/CostWorkflow.vue';
import CostFeatures from '~/components/sections/cost-management/CostFeatures.vue';
import CostPreview from '~/components/sections/cost-management/CostPreview.vue';
import CostMonitoring from '~/components/sections/cost-management/CostMonitoring.vue';
import CostBenefits from '~/components/sections/cost-management/CostBenefits.vue';
import CostIntegration from '~/components/sections/cost-management/CostIntegration.vue';
import CostIndustries from '~/components/sections/cost-management/CostIndustries.vue';
import CostCTA from '~/components/sections/cost-management/CostCTA.vue';
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
      <CostHero />
      <CostProblems />
      <CostDefinition />
      <CostManagedItems />
      <CostLifecycle />
      <CostWorkflow />
      <CostFeatures />
      <CostPreview />
      <CostMonitoring />
      <CostBenefits />
      <CostIntegration />
      <CostIndustries />
      <CostCTA />
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
