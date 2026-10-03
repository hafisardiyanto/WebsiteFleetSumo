<template>
  <div class="tyre-management-page">
    <Navbar />
    
    <main>
      <TyreHero />
      <TyreProblems />
      <TyreWhatIs />
      <TyreCycle />
      <TyreWorkflow />
      <TyreFeatures />
      <TyreMonitoring />
      <TyreHistory />
      <TyreBenefits />
      <TyreOtherSolutions />
      <TyreIndustries />
      <TyreCTA />
    </main>
    
    <FooterSection />
  </div>
</template>

<script setup>
// Shared global components
import Navbar from '~/components/sections/Navbar.vue'
import FooterSection from '~/components/sections/FooterSection.vue'

// Localized Page Components
import TyreHero from '~/components/sections/tyre-management/TyreHero.vue'
import TyreProblems from '~/components/sections/tyre-management/TyreProblems.vue'
import TyreWhatIs from '~/components/sections/tyre-management/TyreWhatIs.vue'
import TyreCycle from '~/components/sections/tyre-management/TyreCycle.vue'
import TyreWorkflow from '~/components/sections/tyre-management/TyreWorkflow.vue'
import TyreFeatures from '~/components/sections/tyre-management/TyreFeatures.vue'
import TyreMonitoring from '~/components/sections/tyre-management/TyreMonitoring.vue'
import TyreHistory from '~/components/sections/tyre-management/TyreHistory.vue'
import TyreBenefits from '~/components/sections/tyre-management/TyreBenefits.vue'
import TyreOtherSolutions from '~/components/sections/tyre-management/TyreOtherSolutions.vue'
import TyreIndustries from '~/components/sections/tyre-management/TyreIndustries.vue'
import TyreCTA from '~/components/sections/tyre-management/TyreCTA.vue'

useHead({
  title: 'Tyre Management | Pengelolaan Ban Armada - FleetSumo',
  meta: [
    { name: 'description', content: 'Kelola siklus hidup dan aktivitas ban secara lebih terstruktur sebagai bagian dari pengelolaan armada. Dari pemasangan hingga record batas pemakaian.' }
  ]
})
</script>

<style scoped>
.tyre-management-page {
  overflow-x: hidden; 
}
</style>
