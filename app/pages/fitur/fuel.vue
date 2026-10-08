<script setup>
useHead({
  title: 'Fuel Management System | FleetSumo',
  meta: [
    { name: 'description', content: 'Pencatatan pengisian dan kalkulasi rasio liter kendaraan secara akurat untuk meminimalisir kebocoran bahan bakar.' },
    { property: 'og:title', content: 'Fuel Management System | FleetSumo' },
    { property: 'og:description', content: 'Pencatatan pengisian dan kalkulasi rasio liter kendaraan secara akurat untuk meminimalisir kebocoran bahan bakar.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/fuel' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/fuel' }
  ]
})

import { onMounted } from 'vue';
import smoothscroll from 'lenis';
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

// 01 Hero
import FuelHero from '~/components/sections/fuel/FuelHero.vue';
// 02 Capability Flow
import FuelCapabilityFlow from '~/components/sections/fuel/FuelCapabilityFlow.vue';
// 03 Evidence 
import FuelEvidence from '~/components/sections/fuel/FuelEvidence.vue';
// 04 Ecosystem Link
import FuelIntegration from '~/components/sections/fuel/FuelIntegration.vue';
// 05 FAQ
import FuelFAQ from '~/components/sections/fuel/FuelFAQ.vue';
// 06 CTA
import FuelCTA from '~/components/sections/fuel/FuelCTA.vue';

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
      <FuelHero />
      <FuelCapabilityFlow />
      <FuelEvidence />
      <FuelIntegration />
      <FuelFAQ />
      <FuelCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
