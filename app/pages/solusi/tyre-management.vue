<script setup>
useHead({
  title: 'Tyre Management System | FleetSumo',
  meta: [
    { name: 'description', content: 'Sistem manajemen ban armada untuk memonitor riwayat pemasangan, pemakaian, dan pengadaan ban secara berkesinambungan.' },
    { property: 'og:title', content: 'Tyre Management System | FleetSumo' },
    { property: 'og:description', content: 'Sistem manajemen ban armada untuk memonitor riwayat pemasangan, pemakaian, dan pengadaan ban secara berkesinambungan.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/tyre-management' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/tyre-management' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// Using Tyre components for the Solution layout
import TyreHero from '~/components/sections/tyre-management/TyreHero.vue';
import TyreProblems from '~/components/sections/tyre-management/TyreProblems.vue';
import TyreSolOverview from '~/components/sections/tyre-management/TyreSolOverview.vue';
import TyreMonitoring from '~/components/sections/tyre-management/TyreMonitoring.vue';
import TyreBenefits from '~/components/sections/tyre-management/TyreBenefits.vue';
import TyreIntegration from '~/components/sections/tyre-management/TyreIntegration.vue';
import TyrePreview from '~/components/sections/tyre-management/TyrePreview.vue';
import TyreCTA from '~/components/sections/tyre-management/TyreCTA.vue';

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
      <TyreHero />
      <TyreProblems />
      <TyreSolOverview />
      <TyreHistory />
      <TyreMonitoring />
      <TyrePreview />
      <TyreIntegration />
      <TyreBenefits />
      <TyreCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
