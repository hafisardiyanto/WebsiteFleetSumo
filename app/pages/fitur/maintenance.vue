<script setup>
useHead({
  title: 'Fitur Work Order & Pencatatan Servis Armada | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Catat aktivitas bengkel, instruksi kerja perbaikan, riwayat suku cadang, dan jadwal servis berkala kendaraan dengan modul maintenance Cek Kendaraan.' },
    { property: 'og:title', content: 'Fitur Work Order & Pencatatan Servis Armada | Cek Kendaraan' },
    { property: 'og:description', content: 'Catat aktivitas bengkel, instruksi kerja perbaikan, riwayat suku cadang, dan jadwal servis berkala kendaraan dengan modul maintenance Cek Kendaraan.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/maintenance' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-fitur-maintenance.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Fitur Work Order & Servis Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fitur Work Order & Pencatatan Servis Armada | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Catat aktivitas bengkel, instruksi kerja perbaikan, riwayat suku cadang, dan jadwal servis berkala kendaraan dengan modul maintenance Cek Kendaraan.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-fitur-maintenance.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/maintenance' }
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
            "item": "https://fleetsumo.id/fitur/maintenance"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Maintenance",
            "item": "https://fleetsumo.id/fitur/maintenance"
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
import MntHero from '~/components/sections/maintenance/MntHero.vue';
// 02 Capability Flow
import MmCapabilityFlow from '~/components/sections/maintenance/MmCapabilityFlow.vue';
// 03 Evidence 
import MmEvidence from '~/components/sections/maintenance/MmEvidence.vue';
// 04 Ecosystem Link
import MmIntegration from '~/components/sections/maintenance/MmIntegration.vue';
// 05 FAQ
import MmFAQ from '~/components/sections/maintenance/MmFAQ.vue';
// 06 CTA
import MntCTA from '~/components/sections/maintenance/MntCTA.vue';

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
      <MntHero />
      <h2 class="section-title" data-aos="fade-up">Fitur Work Order & Perawatan Armada</h2>
      <p data-aos="fade-up" data-aos-delay="100">Fitur ini memudahkan pencatatan work order, jadwal servis, dan pelacakan suku cadang, meningkatkan efisiensi operasional armada.</p>
      <MmCapabilityFlow />
      <MmEvidence />
      <MmIntegration />
      <MmFAQ />
      <MntCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
