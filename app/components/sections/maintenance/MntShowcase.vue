<script setup>
import { ref } from 'vue';

const activeTab = ref(0);

const screenshots = [
  {
    title: 'Daftar Maintenance',
    img: '/assets/fitur/maintenance/maintenance-form.png',
  },
  {
    title: 'Detail Maintenance',
    img: '/assets/fitur/maintenance/maintenance-detail.png',
  },
  {
    title: 'Form Pengajuan Maintenance',
    img: '/assets/fitur/maintenance/maintenance-history.png',
  },
  {
    title: 'Pengajuan Perawatan Kendaraan',
    img: '/assets/fitur/maintenance/maintenance-approval.png',
  }
];
</script>

<template>
  <section class="mnt-showcase-wrapper">
    <div class="mnt-showcase-container">
      <div class="mns-header" data-aos="fade-up">
        <span class="mns-label">PRODUCT SHOWCASE</span>
        <h2 class="mns-title">Lihat Fitur Maintenance dalam FleetSumo</h2>
      </div>

      <div class="mns-tabs" data-aos="fade-up" data-aos-delay="100">
         <button 
           v-for="(item, index) in screenshots" 
           :key="index"
           class="mns-tab-btn"
           :class="{ active: activeTab === index }"
           @click="activeTab = index"
         >
           {{ item.title }}
         </button>
      </div>

      <div class="mns-display" data-aos="zoom-in" data-aos-delay="200">
         <div class="mns-mockup">
             <img :src="screenshots[activeTab].img" :alt="screenshots[activeTab].title" class="mns-img" />
         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance/mnt-showcase.css" scoped></style>
