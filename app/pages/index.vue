<template>
  <div class="lenis-container">
    <Navbar />

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
      <HomeIndustries />
      <HomeWhy />
      <HomeInsights />
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

useHead({
  title: 'FleetSumo | Enterprise Fleet Management Terintegrasi',
  meta: [
    { name: 'description', content: 'FleetSumo membantu perusahaan logistik mengelola kendaraan, maintenance, BBM, ban, biaya, dan laporan armada dalam satu sistem analitik komprehensif.' }
  ]
})
</script>

<style scoped>
.lenis-container {
  overflow: hidden; 
}
</style>
