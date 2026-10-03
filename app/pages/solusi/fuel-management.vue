<template>
  <div class="fuel-management-page">
    <Navbar />
    
    <main>
      <FuelHero />
      <FuelProblems />
      <FuelWhatIs />
      <FuelCycle />
      <FuelWorkflow />
      <FuelFeatures />
      <FuelMonitoring />
      <FuelHistory />
      <FuelBenefits />
      <FuelOtherSolutions />
      <FuelIndustries />
      <FuelCTA />
    </main>
    
    <FooterSection />
  </div>
</template>

<script setup>
// Shared global components
import Navbar from '~/components/sections/Navbar.vue'
import FooterSection from '~/components/sections/FooterSection.vue'

// Localized Page Components
import FuelHero from '~/components/sections/fuel-management/FuelHero.vue'
import FuelProblems from '~/components/sections/fuel-management/FuelProblems.vue'
import FuelWhatIs from '~/components/sections/fuel-management/FuelWhatIs.vue'
import FuelCycle from '~/components/sections/fuel-management/FuelCycle.vue'
import FuelWorkflow from '~/components/sections/fuel-management/FuelWorkflow.vue'
import FuelFeatures from '~/components/sections/fuel-management/FuelFeatures.vue'
import FuelMonitoring from '~/components/sections/fuel-management/FuelMonitoring.vue'
import FuelHistory from '~/components/sections/fuel-management/FuelHistory.vue'
import FuelBenefits from '~/components/sections/fuel-management/FuelBenefits.vue'
import FuelOtherSolutions from '~/components/sections/fuel-management/FuelOtherSolutions.vue'
import FuelIndustries from '~/components/sections/fuel-management/FuelIndustries.vue'
import FuelCTA from '~/components/sections/fuel-management/FuelCTA.vue'

useHead({
  title: 'Fuel Management | Sistem Pencatatan BBM Kendaraan - FleetSumo',
  meta: [
    { name: 'description', content: 'Cegah indikasi fraud dan kendalikan pengeluaran armada dengan memantau langsung konsumsi rasio BBM/KM menggunakan software Fuel Management.' }
  ]
})
</script>

<style scoped>
.fuel-management-page {
  overflow-x: hidden; 
}
</style>
