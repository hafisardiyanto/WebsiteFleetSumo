<script setup>
import { ref } from 'vue';

const activeSlide = ref(0);

const slides = [
  {
    title: 'Daftar Pengemudi',
    img: '/assets/fitur/driver-management/driver-list.png',
  },
  {
    title: 'Detail Pengemudi',
    img: '/assets/fitur/driver-management/driver-detail.png',
  },
  {
    title: 'Form Tambah/Edit Pengemudi',
    img: '/assets/fitur/driver-management/driver-form.png',
  },
  {
    title: 'Driver Terhubung Kendaraan',
    img: '/assets/fitur/fleet-vehicle/vehicle-detail.png',
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
  <section class="dm-showcase-wrapper">
    <div class="dm-showcase-container">
      <div class="dms-header" data-aos="fade-up">
        <h2 class="dms-title">Lihat Driver Management dalam FleetSumo</h2>
      </div>

      <div class="dms-carousel" data-aos="fade-up" data-aos-delay="200">
         <div class="dms-slides">
            <div 
               v-for="(slide, index) in slides" 
               :key="index" 
               class="dms-slide" 
               :class="{ active: index === activeSlide }"
            >
               <h3 class="slide-title">{{ index + 1 }} — {{ slide.title }}</h3>
               <div class="dms-mockup">
                   <img :src="slide.img" :alt="slide.title" class="dms-img" />
               </div>
            </div>
         </div>

         <div class="dms-controls">
            <button @click="prevSlide" class="btn-control">← Sebelumnya</button>
            <div class="dms-dots">
               <span 
                 v-for="(_, index) in slides" 
                 :key="'dot-'+index" 
                 class="dms-dot" 
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

<style src="~/assets/css/sections/driver-management/dm-showcase.css" scoped></style>
