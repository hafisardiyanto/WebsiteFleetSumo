<script setup>
import { onMounted } from 'vue';
import NavbarSection from '~/components/sections/Navbar.vue';
import TyreHero from '~/components/sections/tyre-management/TyreHero.vue';
import TyreProblems from '~/components/sections/tyre-management/TyreProblems.vue';
import TyreDefinition from '~/components/sections/tyre-management/TyreDefinition.vue';
import TyreManagedItems from '~/components/sections/tyre-management/TyreManagedItems.vue';
import TyreLifecycle from '~/components/sections/tyre-management/TyreLifecycle.vue';
import TyreWorkflow from '~/components/sections/tyre-management/TyreWorkflow.vue';
import TyreFeatures from '~/components/sections/tyre-management/TyreFeatures.vue';
import TyrePreview from '~/components/sections/tyre-management/TyrePreview.vue';
import TyreMonitoring from '~/components/sections/tyre-management/TyreMonitoring.vue';
import TyreBenefits from '~/components/sections/tyre-management/TyreBenefits.vue';
import TyreIntegration from '~/components/sections/tyre-management/TyreIntegration.vue';
import TyreIndustries from '~/components/sections/tyre-management/TyreIndustries.vue';
import TyreCTA from '~/components/sections/tyre-management/TyreCTA.vue';
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
      <TyreHero />
      <TyreProblems />
      <TyreDefinition />
      <TyreManagedItems />
      <TyreLifecycle />
      <TyreWorkflow />
      <TyreFeatures />
      <TyrePreview />
      <TyreMonitoring />
      <TyreBenefits />
      <TyreIntegration />
      <TyreIndustries />
      <TyreCTA />
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
