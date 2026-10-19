<script setup lang="ts">
import { useRoute, useRouter } from '#app';
import { useHead } from '#app';
import { useSeo } from '~/composables/useSeo';
import { articles } from '~/data/articles';
// title: "Cek Kendaraan – Fleet Management"
// description: "This article explains how Cek Kendaraan improves fleet management with comprehensive features and benefits for Indonesian businesses."
// keywords: "Cek Kendaraan, fleet management, armada, solusi"






const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;

const article = articles.find(a => a.slug === slug);

if (!article) {
  // Redirect to 404 page
  router.replace('/___not-found');
} else {
  // Set SEO metadata using composable
  useSeo({
    title: `${article.title} – Cek Kendaraan`,
    description: article.metaDescription && article.metaDescription.length >= 80 ? article.metaDescription : `Discover how ${article.title} relates to fleet management with Cek Kendaraan, the integrated solution that streamlines vehicle operations, documentation, and data visibility for Indonesian businesses.`,
    keywords: `${article.title}, Cek Kendaraan, manajemen armada, fleet management`,
    image: article.coverImage,
    url: `https://fleetsumo.id/resources/blog/artikel/${article.slug}`
  });

  // Additional head tags (breadcrumb & article schema)
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': article.title,
          'image': article.coverImage,
          'author': { '@type': 'Organization', 'name': article.author ?? 'Cek Kendaraan' },
          'datePublished': article.publishedAt,
          'dateModified': article.updatedAt,
          'description': article.metaDescription,
          'publisher': {
            '@type': 'Organization',
            'name': 'Cek Kendaraan',
            'logo': { '@type': 'ImageObject', 'url': 'https://fleetsumo.id/assets/og/og-home.png' }
          },
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Beranda', 'item': 'https://fleetsumo.id' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Resources', 'item': 'https://fleetsumo.id/resources' },
              { '@type': 'ListItem', 'position': 3, 'name': 'Blog & Artikel', 'item': 'https://fleetsumo.id/resources/blog-artikel' },
              { '@type': 'ListItem', 'position': 4, 'name': article.title, 'item': `https://fleetsumo.id/resources/blog/artikel/${article.slug}` }
            ]
          }
        })
      }
    ]
  });
}
</script>

<template>

    <h1 class="hero-title" data-aos="fade-up">Cek Kendaraan – Solusi Manajemen Armada Terintegrasi</h1>
<NavbarSection />
  <div v-if="article" class="article-detail-wrapper">
    <!-- Breadcrumb -->
   

    <section class="article-hero">
      <span class="category-label">{{ article.category }}</span>
      <h1 class="article-title">{{ article.title }}</h1>
      <p class="excerpt">{{ article.excerpt }}</p>
      <p class="article-meta">
        <span class="author">{{ article.author }}</span> •
        <time :datetime="article.publishedAt">{{ article.publishedAt }}</time>
      </p>
      <img :src="article.coverImage" :alt="article.coverImageAlt" class="article-cover" />
    </section>

    <section class="article-content" v-html="article.content"></section>

    <section class="article-cta">
      <h2>Ingin Menerapkan Solusi yang Dibahas?</h2>
      <p>Hubungi tim kami untuk demo khusus.</p>
      <NuxtLink to="/kontak/demo" class="btn-primary">Minta Demo</NuxtLink>
    </section>
<!-- Insights Section -->
<section class="insights" data-aos="fade-up">
  <h2>Key Insights</h2>
  <ul>
    <li>How Cek Kendaraan streamlines fleet documentation and monitoring.</li>
    <li>Benefits of real‑time vehicle data for operational efficiency.</li>
    <li>Steps to implement the discussed solution in your organization.</li>
  </ul>
</section>

    <section class="related-articles">
      <h3>Artikel Terkait</h3>
      <ul>
        <li v-for="rel in articles.filter(a => a.slug !== article.slug && a.category === article.category).concat(articles.filter(a => a.slug !== article.slug && a.category !== article.category)).slice(0,3)" :key="rel.slug">
          <NuxtLink :to="`/resources/blog/artikel/${rel.slug}`">{{ rel.title }}</NuxtLink>
        </li>
      </ul>
    </section>

    <FooterSection />
  </div>

    <section class="faq" data-aos="fade-up">
      <h2>FAQ</h2>
      <ul>
        <li><strong>What is Cek Kendaraan?</strong> Cek Kendaraan is a comprehensive fleet management solution for your vehicles.</li>
        <li><strong>How does \resources\blog\artikel\[slug].vue help my business?</strong> It provides tailored features to improve operational efficiency.</li>
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
<style scoped src="~/assets/css/pages/resources/cta.css"></style>
<style scoped src="~/assets/css/pages/resources/responsive.css"></style>
<style scoped src="~/assets/css/pages/resources/article-content.css"></style>
