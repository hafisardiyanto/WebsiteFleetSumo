<script setup>
useHead({
  title: 'Fitur Pencatatan & Log Transaksi BBM Kendaraan | FleetSumo',
  meta: [
    { name: 'description', content: 'Catat riwayat pembelian bahan bakar, struk pengisian, odometer, dan perhitungan efisiensi rasio BBM setiap armada secara akurat dan mudah.' },
    { property: 'og:title', content: 'Fitur Pencatatan & Log Transaksi BBM Kendaraan | FleetSumo' },
    { property: 'og:description', content: 'Catat riwayat pembelian bahan bakar, struk pengisian, odometer, dan perhitungan efisiensi rasio BBM setiap armada secara akurat dan mudah.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/fuel' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-fitur-fuel.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'FleetSumo - Fitur Pencatatan Transaksi BBM Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fitur Pencatatan & Log Transaksi BBM Kendaraan | FleetSumo' },
    { name: 'twitter:description', content: 'Catat riwayat pembelian bahan bakar, struk pengisian, odometer, dan perhitungan efisiensi rasio BBM setiap armada secara akurat dan mudah.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-fitur-fuel.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/fuel' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://fleetsumo.id"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Fitur",
            "item": "https://fleetsumo.id/fitur/fuel"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Fuel",
            "item": "https://fleetsumo.id/fitur/fuel"
          }
        ]
      })
    }
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
