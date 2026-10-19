<script setup>
useHead({
  title: 'Solusi Perawatan Armada & Servis Terjadwal | Cek Kendaraan',
  meta: [
    { name: 'description', content: 'Cegah downtime operasional tak terduga dengan sistem manajemen perawatan armada, penjadwalan servis preventif, dan kontrol riwayat mekanik bengkel.' },
    { property: 'og:title', content: 'Solusi Perawatan Armada & Servis Terjadwal | Cek Kendaraan' },
    { property: 'og:description', content: 'Cegah downtime operasional tak terduga dengan sistem manajemen perawatan armada, penjadwalan servis preventif, dan kontrol riwayat mekanik bengkel.' },
    { property: 'og:url', content: 'https://fleetsumo.id/solusi/maintenance-management' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-solusi-maintenance.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cek Kendaraan - Solusi Perawatan Armada Terjadwal' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Solusi Perawatan Armada & Servis Terjadwal | Cek Kendaraan' },
    { name: 'twitter:description', content: 'Cegah downtime operasional tak terduga dengan sistem manajemen perawatan armada, penjadwalan servis preventif, dan kontrol riwayat mekanik bengkel.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-solusi-maintenance.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/solusi/maintenance-management' }
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
            "name": "Solusi",
            "item": "https://fleetsumo.id/solusi/maintenance-management"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Maintenance Management",
            "item": "https://fleetsumo.id/solusi/maintenance-management"
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

// Section 01: Hero
import MaintHero from '~/components/sections/maintenance-management/MaintHero.vue';
// Section 02: Operational Challenge
import MaintProblems from '~/components/sections/maintenance-management/MaintProblems.vue';
// Section 03: Solution Overview (Kontrol Proses)
import MaintDefinition from '~/components/sections/maintenance-management/MaintDefinition.vue';
// Section 04: History Tracking
import MaintHistory from '~/components/sections/maintenance-management/MaintHistory.vue';
// Section 05: Approval Workflow
import MaintWorkflow from '~/components/sections/maintenance-management/MaintWorkflow.vue';
// Section 06: Executive/Product Proof
import MaintPreview from '~/components/sections/maintenance-management/MaintPreview.vue';
// Section 07: Integration / Related
import MaintIntegration from '~/components/sections/maintenance-management/MaintIntegration.vue';
// Section 08: Business Value
import MaintBenefits from '~/components/sections/maintenance-management/MaintBenefits.vue';
// Section 09: CTA
import MaintCTA from '~/components/sections/maintenance-management/MaintCTA.vue';

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

    <h1 class="hero-title" data-aos="fade-up">Cek Kendaraan – Solusi Manajemen Armada Terintegrasi</h1>
<main class="page-wrapper">
    <NavbarSection />
    
    <div class="content-wrapper">
      <MaintHero />
      <h2 class="section-title" data-aos="fade-up">Solusi Perawatan Armada Terintegrasi</h2>
      <p data-aos="fade-up" data-aos-delay="100">Dengan modul perawatan terpusat, Anda dapat menjadwalkan servis, melacak riwayat perbaikan, dan mengoptimalkan biaya operasional armada secara efisien.</p>
      <MaintProblems />
      <MaintDefinition />
      <MaintHistory />
      <MaintWorkflow />
      <MaintPreview />
      <MaintIntegration />
      <MaintBenefits />
      <MaintCTA />
    </div>

    <FooterSection />
  </main>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \solusi\maintenance-management.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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

<style scoped>
.page-wrapper { overflow: hidden; }
.content-wrapper { display: flex; flex-direction: column; }
</style>
