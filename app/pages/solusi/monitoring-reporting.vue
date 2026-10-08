<script setup>
useHead({
  title: 'Fleet Monitoring & Reporting | FleetSumo',
  meta: [
    { name: 'description', content: 'Ubah data operasional armada yang kompleks menjadi laporan dan dasbor analitik yang mudah dipahami bagi manajemen.' },
    { property: 'og:title', content: 'Fleet Monitoring & Reporting | FleetSumo' },
    { property: 'og:description', content: 'Ubah data operasional armada yang kompleks menjadi laporan dan dasbor analitik yang mudah dipahami bagi manajemen.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/monitoring-reporting' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/monitoring-reporting' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// Section 01: Hero
import MonHero from '~/components/sections/monitoring-management/MonHero.vue';
// Section 02: Operational Challenge
import MonProblems from '~/components/sections/monitoring-management/MonProblems.vue';
// Section 03: Collection
import MonInformation from '~/components/sections/monitoring-management/MonInformation.vue';
// Section 04: Reporting
import MonReporting from '~/components/sections/monitoring-management/MonReporting.vue';
// Section 05: Filtering
import MonFilters from '~/components/sections/monitoring-management/MonFilters.vue';
// Section 06: Evidence Layout
import MonPreview from '~/components/sections/monitoring-management/MonPreview.vue';
// Section 07: Features
import MonFeatures from '~/components/sections/monitoring-management/MonFeatures.vue';
// Section 08: Business Value
import MonBenefits from '~/components/sections/monitoring-management/MonBenefits.vue';
// Section 09: CTA
import MonCTA from '~/components/sections/monitoring-management/MonCTA.vue';

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
      <MonHero />
      <MonProblems />
      <MonInformation />
      <MonReporting />
      <MonFilters />
      <MonPreview />
      <MonFeatures />
      <MonBenefits />
      <MonCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
