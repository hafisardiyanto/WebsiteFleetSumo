<template>
  <div class="fleet-management-page">
    <Navbar />
    
    <main>
      <FleetHero />
      <FleetProblems />
      <FleetWhatIsManaged />
      <FleetCycle />
      <FleetIntegratedSystem />
      <FleetFeatures />
      <FleetMonitoring />
      <FleetBenefits />
      <FleetOtherSolutions />
      <FleetIndustries />
      <FleetCTA />
    </main>
    
    <FooterSection />
  </div>
</template>

<script setup>
// Shared global components
import Navbar from '~/components/sections/Navbar.vue'
import FooterSection from '~/components/sections/FooterSection.vue'

// Localized Page Components
import FleetHero from '~/components/sections/fleet-management/FleetHero.vue'
import FleetProblems from '~/components/sections/fleet-management/FleetProblems.vue'
import FleetWhatIsManaged from '~/components/sections/fleet-management/FleetWhatIsManaged.vue'
import FleetCycle from '~/components/sections/fleet-management/FleetCycle.vue'
import FleetIntegratedSystem from '~/components/sections/fleet-management/FleetIntegratedSystem.vue'
import FleetFeatures from '~/components/sections/fleet-management/FleetFeatures.vue'
import FleetMonitoring from '~/components/sections/fleet-management/FleetMonitoring.vue'
import FleetBenefits from '~/components/sections/fleet-management/FleetBenefits.vue'
import FleetOtherSolutions from '~/components/sections/fleet-management/FleetOtherSolutions.vue'
import FleetIndustries from '~/components/sections/fleet-management/FleetIndustries.vue'
import FleetCTA from '~/components/sections/fleet-management/FleetCTA.vue'

useHead({
  title: 'Fleet Management | Sistem Pengelolaan Kendaraan - FleetSumo',
  meta: [
    { name: 'description', content: 'Kelola armada lebih terstruktur dengan FleetSumo. Jadikan Fleet Management sebagai pusat integrasi data kendaraan dengan operasional Anda.' }
  ]
})
</script>

<style scoped>
.fleet-management-page {
  /* Prevent any global scrolling issues specifically per Nuxt 3 layout structure */
  overflow-x: hidden; 
}
</style>
