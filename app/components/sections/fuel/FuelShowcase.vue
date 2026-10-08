<script setup>
import { ref } from 'vue';

const activeTab = ref(0);

const screenshots = [
  {
    title: 'Daftar Transaksi BBM',
    img: '/assets/fitur/fuel/fuel-list.png',
  },
  {
    title: 'Detail Transaksi BBM',
    img: '/assets/fitur/fuel/fuel-detail.png',
  },
  {
    title: 'Tampilan Utama BBM',
    img: '/assets/fitur/fuel/fuel-dashboard.png',
  }
];
</script>

<template>
  <section class="fuel-showcase-wrapper">
    <div class="fuel-showcase-container">
      <div class="fus-header" data-aos="fade-up">
        <span class="fus-label">PRODUCT SHOWCASE</span>
        <h2 class="fus-title">Lihat Fitur Fuel Management dalam FleetSumo</h2>
      </div>

      <div class="fus-tabs" data-aos="fade-up" data-aos-delay="100">
         <button 
           v-for="(item, index) in screenshots" 
           :key="index"
           class="fus-tab-btn"
           :class="{ active: activeTab === index }"
           @click="activeTab = index"
         >
           {{ item.title }}
         </button>
      </div>

      <div class="fus-display" data-aos="zoom-in" data-aos-delay="200">
         <div class="fus-mockup">
             <img :src="screenshots[activeTab].img" :alt="screenshots[activeTab].title" class="fus-img" />
         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fuel/fuel-showcase.css" scoped></style>
