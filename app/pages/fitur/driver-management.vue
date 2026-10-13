<script setup>
useHead({
  title: 'Fitur Manajemen Driver & Penugasan Armada | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Pusat data pengemudi, riwayat lisensi SIM, monitoring penugasan kendaraan, dan catatan operasional supir armada dalam satu platform teratur.' },
    { property: 'og:title', content: 'Fitur Manajemen Driver & Penugasan Armada | Cek Kendaraan' },
    { property: 'og:description', content: 'Pusat data pengemudi, riwayat lisensi SIM, monitoring penugasan kendaraan, dan catatan operasional supir armada dalam satu platform teratur.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/driver-management' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-fitur-driver.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Fitur Manajemen Driver & Penugasan Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fitur Manajemen Driver & Penugasan Armada | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Pusat data pengemudi, riwayat lisensi SIM, monitoring penugasan kendaraan, dan catatan operasional supir armada dalam satu platform teratur.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-fitur-driver.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/driver-management' }
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
            "item": "https://fleetsumo.id/fitur/driver-management"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Driver Management",
            "item": "https://fleetsumo.id/fitur/driver-management"
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
import DmHero from '~/components/sections/driver-management/DmHero.vue';
// 02 Use Case
import DmUseCase from '~/components/sections/driver-management/DmUseCase.vue';
// 03 Product Evidence 
import DmEvidence from '~/components/sections/driver-management/DmEvidence.vue';
// 04 Roles & Workflow
import DmRoles from '~/components/sections/driver-management/DmRoles.vue';
// 05 Ecosystem Integration
import DmIntegration from '~/components/sections/driver-management/DmIntegration.vue';
// 06 FAQ
import DmFAQ from '~/components/sections/driver-management/DmFAQ.vue';
// 07 CTA
import DmCTA from '~/components/sections/driver-management/DmCTA.vue';

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
      <DmHero />
      <DmUseCase />
      <DmEvidence />
      <DmRoles />
      <DmIntegration />
      <DmFAQ />
      <DmCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
