<script setup lang="ts">
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';
import { useHead } from '#app';
import { faqs } from '~/data/faqs';
import { ref, computed } from 'vue';

// SEO metadata (unchanged)
useHead({
  title: 'FAQ Cek Kendaraan | Pertanyaan Umum',
  meta: [
    { name: 'description', content: 'Jawaban lengkap atas pertanyaan umum seputar fitur, implementasi, dan operasional sistem manajemen armada Cek Kendaraan dari Cek Kendaraan.' },
    { property: 'og:title', content: 'FAQ Cek Kendaraan | Pertanyaan Umum' },
    { property: 'og:description', content: 'Temukan jawaban seputar pencatatan kendaraan, servis bengkel, pencatatan bahan bakar, dan administrasi armada web Cek Kendaraan.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/resources/faq' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Pertanyaan Umum FAQ - Cek Kendaraan Cek Kendaraan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FAQ Cek Kendaraan | Pertanyaan Umum' },
    { name: 'twitter:description', content: 'Jawaban lengkap atas pertanyaan umum seputar fitur dan operasional Cek Kendaraan dari Cek Kendaraan.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: 'https://fleetsumo.id/resources/faq' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://fleetsumo.id' },
          { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://fleetsumo.id/resources/faq' },
          { '@type': 'ListItem', position: 3, name: 'FAQ', item: 'https://fleetsumo.id/resources/faq' }
        ]
      })
    }
  ]
});

// UI state for accordion and category filter
const activeCategory = ref('Semua');
const openIds = ref<Set<string>>(new Set());

const categories = computed(() => {
  const set = new Set<string>(['Semua']);
  faqs.forEach(f => set.add(f.category));
  return Array.from(set);
});

const filteredFaqs = computed(() => {
  if (activeCategory.value === 'Semua') return faqs;
  return faqs.filter(f => f.category === activeCategory.value);
});

function toggle(id) {
  if (openIds.value.has(id)) {
    openIds.value.delete(id);
  } else {
    openIds.value.add(id);
  }
}
</script>

<template>

    <h1 class="hero-title" data-aos="fade-up">Cek Kendaraan – Solusi Manajemen Armada Terintegrasi</h1>
<div class="resource-wrapper">
    <NavbarSection />

    <!-- Header Section -->
    <section class="res-hero-section">
      <div class="content-container">
        <div class="res-hero-header">
          <span class="res-badge">Pusat Bantuan &amp; Tanya Jawab</span>
          <h1 class="res-title">Pertanyaan Umum <span class="highlight">(FAQ)</span></h1>
          <p class="res-subtitle">Pelajari kapabilitas aktual, alur implementasi, dan cara kerja sistem pencatatan armada Cek Kendaraan dari Cek Kendaraan.</p>
        </div>
        <div class="res-hero-visual">
          <img src="/assets/tentang-kami/FAQ.jpg" alt="Pusat Tanya Jawab FAQ Cek Kendaraan" />
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="content-container">
      <div class="filter-bar">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-pill"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >{{ cat }}</button>
      </div>

      <!-- FAQ List -->
      <div class="faq-list">
        <div v-for="item in filteredFaqs" :key="item.id" class="faq-item">
          <button
            class="faq-q"
            :id="`faq-${item.id}`"
            @click="toggle(item.id)"
            :aria-expanded="openIds.has(item.id).toString()"
            :aria-controls="`panel-${item.id}`"
          >{{ item.question }}</button>
          <div
            class="faq-a"
            :id="`panel-${item.id}`"
            v-show="openIds.has(item.id)"
            role="region"
            :aria-labelledby="`faq-${item.id}`"
            v-html="item.answer"
          ></div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <div class="res-cta-banner">
      <h2 class="cta-title">Punya Pertanyaan Lain yang Belum Terjawab?</h2>
      <p class="cta-desc">Tim spesialis manajemen armada kami siap membantu menjawab pertanyaan teknis dan operasional Anda.</p>
      <a href="/kontak/demo" class="btn-primary">Hubungi Tim Cek Kendaraan</a>
    </div>

    <FooterSection />
  </div>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \resources\faq.vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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

<style scoped src="~/assets/css/pages/resources/common.css"></style>
<style scoped src="~/assets/css/pages/resources/hero.css"></style>
<style scoped src="~/assets/css/pages/resources/article-grid.css"></style>
<style scoped src="~/assets/css/pages/resources/faq.css"></style>
<style scoped src="~/assets/css/pages/resources/cta.css"></style>
<style scoped src="~/assets/css/pages/resources/responsive.css"></style>
