<script setup>
import { ref } from 'vue';

const activeSlide = ref(0);

const slides = [
  {
    title: 'Daftar Kendaraan',
    img: '/LaporanKendaraan.png',
  },
  {
    title: 'Detail Kendaraan',
    img: '/LaporanKendaraan.png',
  },
  {
    title: 'Informasi/Riwayat Kendaraan',
    img: '/LaporanKendaraan.png',
  }
];

const nextSlide = () => {
    activeSlide.value = (activeSlide.value + 1) % slides.length;
};

const prevSlide = () => {
    activeSlide.value = activeSlide.value === 0 ? slides.length - 1 : activeSlide.value - 1;
};
</script>

<template>
  <section class="fv-showcase-wrapper">
    <div class="fv-showcase-container">
      <div class="fvs-header" data-aos="fade-up">
        <span class="fvs-label">FLEET & VEHICLE IN ACTION</span>
        <h2 class="fvs-title">Lihat Pengelolaan Kendaraan di FleetSumo</h2>
        <p class="fvs-subtitle">Kelola dan telusuri informasi kendaraan melalui tampilan yang dirancang untuk mendukung operasional armada.</p>
      </div>

      <div class="fvs-carousel" data-aos="fade-up" data-aos-delay="200">
         <div class="fvs-slides">
            <div 
               v-for="(slide, index) in slides" 
               :key="index" 
               class="fvs-slide" 
               :class="{ active: index === activeSlide }"
            >
               <h3 class="slide-title">{{ index + 1 }} — {{ slide.title }}</h3>
               <div class="fvs-mockup">
                   <img :src="slide.img" :alt="slide.title" class="fvs-img" />
               </div>
            </div>
         </div>

         <div class="fvs-controls">
            <button @click="prevSlide" class="btn-control">← Sebelumnya</button>
            <div class="fvs-dots">
               <span 
                 v-for="(_, index) in slides" 
                 :key="'dot-'+index" 
                 class="fvs-dot" 
                 :class="{ active: index === activeSlide }"
                 @click="activeSlide = index"
               ></span>
            </div>
            <button @click="nextSlide" class="btn-control">Berikutnya →</button>
         </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/fleet-vehicle/fv-showcase.css" scoped></style>
