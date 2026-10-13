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



    { property: 'og:title', content: 'Cek Kendaraan | Software Manajemen Armada Terintegrasi Indonesia' },
    { property: 'og:description', content: 'Optimalkan operasional kendaraan, dokumen, dan data armada dengan Cek Kendaraan, platform manajemen armada terintegrasi dari FleetSumo.' },
    { property: 'og:url', content: 'https://fleetsumo.id' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'FleetSumo - Software Manajemen Armada Terintegrasi Indonesia' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Cek Kendaraan | Software Manajemen Armada Terintegrasi Indonesia' },
    { name: 'twitter:description', content: 'Optimalkan operasional kendaraan, dokumen, dan data armada dengan Cek Kendaraan, platform manajemen armada terintegrasi dari FleetSumo.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://fleetsumo.id/#website",
            "url": "https://fleetsumo.id",
            "name": "FleetSumo",
            "description": "Platform Manajemen Armada Terintegrasi dari Indonesia untuk mengelola kendaraan operasional."
          },
          {
            "@type": "Organization",
            "@id": "https://fleetsumo.id/#organization",
            "name": "FleetSumo",
            "url": "https://fleetsumo.id",
            "logo": "https://fleetsumo.id/assets/og/og-home.png",
            "email": "info@fleetsumo.id",
            "description": "Platform manajemen armada terintegrasi dari Indonesia yang membantu perusahaan mengoptimalkan tata kelola dan efisiensi operasional kendaraan."
          },
          {
            "@type": "SoftwareApplication",
            "@id": "https://fleetsumo.id/#software",
            "name": "Cek Kendaraan",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web-based",
            "url": "https://fleetsumo.id",
            "description": "Cek Kendaraan membantu perusahaan mengelola informasi kendaraan, dokumen, dan data operasional armada secara terstruktur."
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.lenis-container {
  overflow: hidden; 
}
</style>
