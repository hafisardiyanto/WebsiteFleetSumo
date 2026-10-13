<script setup>
import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';
import { ref, computed } from 'vue';
import { articles } from '~/data/articles';
import '~/assets/css/pages/resources/blog-artikel.css';

useHead({
  title: 'Blog & Artikel Cek Kendaraan | Panduan Armada',
  meta: [
    { name: 'description', content: 'Panduan praktis untuk membantu perusahaan mengelola kendaraan, dokumen, perawatan, BBM, dan biaya operasional dengan lebih terstruktur.' },
    { property: 'og:title', content: 'Blog & Artikel Cek Kendaraan | Panduan Armada' },
    { property: 'og:description', content: 'Panduan praktis untuk membantu perusahaan mengelola kendaraan, dokumen, perawatan, BBM, dan biaya operasional dengan lebih terstruktur.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fleetsumo.id/resources/blog-artikel' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Blog dan Artikel Cek Kendaraan - Panduan Armada' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blog & Artikel Cek Kendaraan | Panduan Armada' },
    { name: 'twitter:description', content: 'Panduan praktis untuk membantu perusahaan mengelola kendaraan, dokumen, perawatan, BBM, dan biaya operasional dengan lebih terstruktur.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-home.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/resources/blog-artikel' }
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
            "name": "Resources",
            "item": "https://fleetsumo.id/resources/blog-artikel"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Blog & Artikel",
            "item": "https://fleetsumo.id/resources/blog-artikel"
          }
        ]
      })
    }
  ]
});
const categories = ['All', ...new Set(articles.map(a => a.category))];
const activeCategory = ref('All');
const filteredArticles = computed(() => {
  if (activeCategory.value === 'All') return articles;
  return articles.filter(a => a.category === activeCategory.value);
});
</script>

<template>
  <div class="resource-wrapper">
    <NavbarSection />

    <!-- 1. Header Section -->
    <section class="res-hero-section">
      <div class="content-container">
        <div class="res-hero-header">
          <span class="res-badge">PUSAT INFORMASI & EDUKASI</span>
          <h1 class="res-title">
            Wawasan dan Panduan Pengelolaan Armada
          </h1>
          <p class="res-subtitle">
            Panduan praktis untuk membantu perusahaan mengelola kendaraan, dokumen, perawatan, BBM, dan biaya operasional dengan lebih terstruktur.
          </p>
        </div>

        <div class="res-hero-visual">
          <img src="/assets/tentang-kami/Blog & Artikel.jpg" alt="Pusat Artikel Manajemen Armada Cek Kendaraan" />
        </div>
      </div>
    </section>

    <!-- 2. Kategori Topik & Daftar Artikel (dynamic) -->
    <section class="content-container">
      <div class="filter-bar">
        <span
          v-for="cat in categories"
          :key="cat"
          class="filter-pill"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >{{ cat }}</span>
      </div>

      <div class="article-grid">
        <article v-for="article in filteredArticles" :key="article.slug" class="article-card">
          <div class="card-content">
            <span class="card-tag">{{ article.category }}</span>
            <h3 class="card-title">{{ article.title }}</h3>
            <p class="card-excerpt">{{ article.excerpt }}</p>
            <div class="card-meta">
              <span>{{ article.readingTime }}</span>
            </div>
            <a :href="`/resources/blog/artikel/${article.slug}`" class="btn-primary">Baca Artikel</a>
          </div>
        </article>
      </div>


      <!-- 4. Panduan Ekosistem Solusi -->
      <div class="res-cta-banner">
        <h2 class="cta-title">Ingin Menerapkan Tata Kelola Armada Berbasis Web?</h2>
        <p class="cta-desc">
          Pelajari bagaimana sistem web Cek Kendaraan dari Cek Kendaraan membantu tim Anda menertibkan pencatatan operasional harian.
        </p>
        <a href="/kontak/demo" class="btn-primary">Konsultasikan Kebutuhan Demo</a>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<style src="~/assets/css/pages/resources/common.css" scoped></style>
<style src="~/assets/css/pages/resources/hero.css" scoped></style>

<style src="~/assets/css/pages/resources/faq.css" scoped></style>
<style src="~/assets/css/pages/resources/cta.css" scoped></style>
<style src="~/assets/css/pages/resources/blog-artikel.css" scoped></style>
<style src="~/assets/css/pages/resources/responsive.css" scoped></style>
