<script setup>
useHead({
  title: 'Fitur Manajemen Stok & Inventori Sparepart Armada | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Kelola stok gudang onderdil, katalog suku cadang kendaraan, log barang masuk-keluar, serta riwayat pemakaian sparepart armada secara tertib.' },
    { property: 'og:title', content: 'Fitur Manajemen Stok & Inventori Sparepart Armada | Cek Kendaraan' },
    { property: 'og:description', content: 'Kelola stok gudang onderdil, katalog suku cadang kendaraan, log barang masuk-keluar, serta riwayat pemakaian sparepart armada secara tertib.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/sparepart' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-fitur-sparepart.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Fitur Inventori & Stok Sparepart Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fitur Manajemen Stok & Inventori Sparepart Armada | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Kelola stok gudang onderdil, katalog suku cadang kendaraan, log barang masuk-keluar, serta riwayat pemakaian sparepart armada secara tertib.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-fitur-sparepart.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/sparepart' }
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
            "item": "https://fleetsumo.id/fitur/sparepart"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Sparepart",
            "item": "https://fleetsumo.id/fitur/sparepart"
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
import SparepartHero from '~/components/sections/sparepart-management/SparepartHero.vue';
// 02 Capability Flow
import SpCapabilityFlow from '~/components/sections/sparepart-management/SpCapabilityFlow.vue';
// 03 Evidence 
import SpEvidence from '~/components/sections/sparepart-management/SpEvidence.vue';
// 04 Ecosystem Link
import SpIntegration from '~/components/sections/sparepart-management/SpIntegration.vue';
// 05 FAQ
import SpFAQ from '~/components/sections/sparepart-management/SpFAQ.vue';
// 06 CTA
import SparepartCTA from '~/components/sections/sparepart-management/SparepartCTA.vue';

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
      <SparepartHero />
      <SpCapabilityFlow />
      <SpEvidence />
      <SpIntegration />
      <SpFAQ />
      <SparepartCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
