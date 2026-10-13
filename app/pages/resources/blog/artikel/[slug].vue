<script setup lang="ts">
import { useRoute, useRouter } from '#app';
import { useHead } from '#app';
import { useSeo } from '~/composables/useSeo';
import { articles } from '~/data/articles';
import NavbarSection from '~/components/sections/Navbar.vue';


const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;

const article = articles.find(a => a.slug === slug);

if (!article) {
  // Redirect to 404 page
  router.replace('/___not-found'); // Nuxt default 404 route
} else {
  // Set SEO metadata using composable
  useSeo({
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.title,
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
</template>

<style scoped src="~/assets/css/pages/resources/common.css"></style>
<style scoped src="~/assets/css/pages/resources/hero.css"></style>
<style scoped src="~/assets/css/pages/resources/article-grid.css"></style>
<style scoped src="~/assets/css/pages/resources/cta.css"></style>
<style scoped src="~/assets/css/pages/resources/responsive.css"></style>
<style scoped src="~/assets/css/pages/resources/article-content.css"></style>
