<template>

    <h1 class="hero-title" data-aos="fade-up">Cek Kendaraan – Solusi Manajemen Armada Terintegrasi</h1>
<div class="lenis-container">
    <Navbar />
    <h2>Cek Kendaraan - Integrated Fleet Management</h2>
    

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

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \index.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
        <li><strong>Is there a demo available?</strong> Yes, you can schedule a demo via the CTA button on the page.</li>
      </ul>
    </section>

    <section class="benefits" data-aos="fade-up">
      <h2>Manfaat Utama</h2>
      <ul>
        <li>Pengelolaan armada terpusat dan real‑time</li>
        <li>Dokumentasi kendaraan terintegrasi</li>
        <li>Visibilitas data operasional yang akurat</li>
        <li>Penghematan biaya melalui optimasi penggunaan kendaraan</li>
      </ul>
    </section>
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
  description: 'Discover Cek Kendaraan, the integrated fleet management platform that streamlines vehicle operations, documentation, and data visibility for Indonesian businesses.',
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
