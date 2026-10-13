<template>
  <div class="lenis-container">
    <Navbar />
    <h2>FleetSumo - Integrated Fleet Management</h2>
    <h3>Explore our solutions</h3>
    <nav>
      <NuxtLink to="/tentang-kami">Tentang Kami</NuxtLink> |
      <NuxtLink to="/fitur">Fitur</NuxtLink> |
      <NuxtLink to="/kontak">Kontak</NuxtLink>
    </nav>

    <main>
      <HomeHero />
      <HomeTrust />
      <HomeProblems />
      <HomeCycleDiagram />
      <HomeHowItWorks />
      <HomeSolutionsGrid />
      <HomeProductPreview />
      <HomeFeatures />
      <HomeBenefits />
      <!-- <HomeIndustries /> -->
      <HomeWhy />
      <!-- <HomeInsights /> -->
      <HomeCTA />
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Navbar from '~/components/sections/Navbar.vue'
import FooterSection from '~/components/sections/FooterSection.vue'
import Lenis from 'lenis'

import { useSeo } from '~/composables/useSeo'
// Import New 13 Steps
import HomeHero from '~/components/sections/homepage/HomeHero.vue'
import HomeTrust from '~/components/sections/homepage/HomeTrust.vue'
import HomeProblems from '~/components/sections/homepage/HomeProblems.vue'
import HomeCycleDiagram from '~/components/sections/homepage/HomeCycleDiagram.vue'
import HomeHowItWorks from '~/components/sections/homepage/HomeHowItWorks.vue'
import HomeSolutionsGrid from '~/components/sections/homepage/HomeSolutionsGrid.vue'
import HomeProductPreview from '~/components/sections/homepage/HomeProductPreview.vue'
import HomeFeatures from '~/components/sections/homepage/HomeFeatures.vue'
import HomeBenefits from '~/components/sections/homepage/HomeBenefits.vue'
import HomeIndustries from '~/components/sections/homepage/HomeIndustries.vue'
import HomeWhy from '~/components/sections/homepage/HomeWhy.vue'
import HomeInsights from '~/components/sections/homepage/HomeInsights.vue'
import HomeCTA from '~/components/sections/homepage/HomeCTA.vue'

// Smooth Scroll Setup Lenis
let lenis

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
})

useSeo({
  title: 'Cek Kendaraan | Software Manajemen Armada Terintegrasi Indonesia',
  description: 'Optimalkan operasional kendaraan, dokumen, dan data armada dengan Cek Kendaraan, platform manajemen armada terintegrasi dari FleetSumo.',
  keywords: 'Cek Kendaraan, manajemen armada, fleet management',
  image: 'https://fleetsumo.id/assets/og/og-home.png',
  url: 'https://fleetsumo.id'
})

// No stray metadata here

</script>

<style scoped>
.lenis-container {
  overflow: hidden;
}
</style>
