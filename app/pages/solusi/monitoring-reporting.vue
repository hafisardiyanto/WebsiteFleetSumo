<script setup>
import { onMounted } from 'vue';
import NavbarSection from '~/components/sections/Navbar.vue';

// Import all Monitoring Components
import ReportHero from '~/components/sections/monitoring-reporting/ReportHero.vue';
import ReportProblems from '~/components/sections/monitoring-reporting/ReportProblems.vue';
import ReportDefinition from '~/components/sections/monitoring-reporting/ReportDefinition.vue';
import ReportManagedItems from '~/components/sections/monitoring-reporting/ReportManagedItems.vue';
import ReportLifecycle from '~/components/sections/monitoring-reporting/ReportLifecycle.vue';
import ReportDashboard from '~/components/sections/monitoring-reporting/ReportDashboard.vue';
import ReportFeatures from '~/components/sections/monitoring-reporting/ReportFeatures.vue';
import ReportVehicle from '~/components/sections/monitoring-reporting/ReportVehicle.vue';
import ReportActivities from '~/components/sections/monitoring-reporting/ReportActivities.vue';
import ReportBenefits from '~/components/sections/monitoring-reporting/ReportBenefits.vue';
import ReportIntegration from '~/components/sections/monitoring-reporting/ReportIntegration.vue';
import ReportIndustries from '~/components/sections/monitoring-reporting/ReportIndustries.vue';
import ReportCTA from '~/components/sections/monitoring-reporting/ReportCTA.vue';

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
      <ReportHero />
      <ReportProblems />
      <ReportDefinition />
      <ReportManagedItems />
      <ReportLifecycle />
      <ReportDashboard />
      <ReportFeatures />
      <ReportVehicle />
      <ReportActivities />
      <ReportBenefits />
      <ReportIntegration />
      <ReportIndustries />
      <ReportCTA />
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
