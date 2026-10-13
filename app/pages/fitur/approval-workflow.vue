<script setup>
useHead({
  title: 'Fitur Alur Approval & Persetujuan Biaya Armada | FleetSumo',
  meta: [
    { name: 'description', content: 'Digitalisasi alur persetujuan pengajuan perbaikan unit, estimasi biaya bengkel, dan approval berjenjang operasional armada tanpa hambatan birokrasi.' },
    { property: 'og:title', content: 'Fitur Alur Approval & Persetujuan Biaya Armada | FleetSumo' },
    { property: 'og:description', content: 'Digitalisasi alur persetujuan pengajuan perbaikan unit, estimasi biaya bengkel, dan approval berjenjang operasional armada tanpa hambatan birokrasi.' },
    { property: 'og:url', content: 'https://fleetsumo.id/fitur/approval-workflow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-fitur-approval.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'FleetSumo - Fitur Alur Approval & Persetujuan Biaya' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fitur Alur Approval & Persetujuan Biaya Armada | FleetSumo' },
    { name: 'twitter:description', content: 'Digitalisasi alur persetujuan pengajuan perbaikan unit, estimasi biaya bengkel, dan approval berjenjang operasional armada tanpa hambatan birokrasi.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-fitur-approval.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/fitur/approval-workflow' }
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
            "item": "https://fleetsumo.id/fitur/approval-workflow"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Approval Workflow",
            "item": "https://fleetsumo.id/fitur/approval-workflow"
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
import ApprovalHero from '~/components/sections/approval-workflow/ApprovalHero.vue';
// 02 Capability Flow
import AwCapabilityFlow from '~/components/sections/approval-workflow/AwCapabilityFlow.vue';
// 03 Evidence 
import AwEvidence from '~/components/sections/approval-workflow/AwEvidence.vue';
// 04 Ecosystem Link
import AwIntegration from '~/components/sections/approval-workflow/AwIntegration.vue';
// 05 FAQ
import AwFAQ from '~/components/sections/approval-workflow/AwFAQ.vue';
// 06 CTA
import ApprovalCTA from '~/components/sections/approval-workflow/ApprovalCTA.vue';

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
      <ApprovalHero />
      <AwCapabilityFlow />
      <AwEvidence />
      <AwIntegration />
      <AwFAQ />
      <ApprovalCTA />
    </div>

    <FooterSection />
  </main>
</template>

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
