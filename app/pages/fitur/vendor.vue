<script setup>
useHead({
  title: 'Fitur Manajemen Vendor Bengkel & Rekanan Armada | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Kelola basis data vendor perbaikan, histori penyedia suku cadang, kontak bengkel rekanan, dan evaluasi riwayat kerja sama armada bisnis.' },
    { property: 'og:title', content: 'Fitur Manajemen Vendor Bengkel & Rekanan Armada | Cek Kendaraan' },
    { property: 'og:description', content: 'Kelola basis data vendor perbaikan, histori penyedia suku cadang, kontak bengkel rekanan, dan evaluasi riwayat kerja sama armada bisnis.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/vendor' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-fitur-vendor.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Fitur Manajemen Vendor Bengkel & Rekanan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fitur Manajemen Vendor Bengkel & Rekanan Armada | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Kelola basis data vendor perbaikan, histori penyedia suku cadang, kontak bengkel rekanan, dan evaluasi riwayat kerja sama armada bisnis.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-fitur-vendor.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/vendor' }
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
            "item": "https://fleetsumo.id/fitur/vendor"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Vendor",
            "item": "https://fleetsumo.id/fitur/vendor"
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
import VendorHero from '~/components/sections/vendor-management/VendorHero.vue';
// 02 Capability Flow
import VmCapabilityFlow from '~/components/sections/vendor-management/VmCapabilityFlow.vue';
// 03 Evidence 
import VmEvidence from '~/components/sections/vendor-management/VmEvidence.vue';
// 04 Ecosystem Link
import VmIntegration from '~/components/sections/vendor-management/VmIntegration.vue';
// 05 FAQ
import VmFAQ from '~/components/sections/vendor-management/VmFAQ.vue';
// 06 CTA
import VendorCTA from '~/components/sections/vendor-management/VendorCTA.vue';

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
      <VendorHero />
      <VmCapabilityFlow />
      <VmEvidence />
      <VmIntegration />
      <VmFAQ />
      <VendorCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
