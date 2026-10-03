<template>
  <div class="maintenance-management-page">
    <Navbar />
    
    <main>
      <MaintHero />
      <MaintProblems />
      <MaintWhatIs />
      <MaintCycle />
      <MaintWorkflow />
      <MaintFeatures />
      <MaintMonitoring />
      <MaintHistory />
      <MaintBenefits />
      <MaintOtherSolutions />
      <MaintIndustries />
      <MaintCTA />
    </main>
    
    <FooterSection />
  </div>
</template>

<script setup>
// Shared global components
import Navbar from '~/components/sections/Navbar.vue'
import FooterSection from '~/components/sections/FooterSection.vue'

// Localized Page Components
import MaintHero from '~/components/sections/maintenance-management/MaintHero.vue'
import MaintProblems from '~/components/sections/maintenance-management/MaintProblems.vue'
import MaintWhatIs from '~/components/sections/maintenance-management/MaintWhatIs.vue'
import MaintCycle from '~/components/sections/maintenance-management/MaintCycle.vue'
import MaintWorkflow from '~/components/sections/maintenance-management/MaintWorkflow.vue'
import MaintFeatures from '~/components/sections/maintenance-management/MaintFeatures.vue'
import MaintMonitoring from '~/components/sections/maintenance-management/MaintMonitoring.vue'
import MaintHistory from '~/components/sections/maintenance-management/MaintHistory.vue'
import MaintBenefits from '~/components/sections/maintenance-management/MaintBenefits.vue'
import MaintOtherSolutions from '~/components/sections/maintenance-management/MaintOtherSolutions.vue'
import MaintIndustries from '~/components/sections/maintenance-management/MaintIndustries.vue'
import MaintCTA from '~/components/sections/maintenance-management/MaintCTA.vue'

useHead({
  title: 'Maintenance Management | Sistem Perawatan Kendaraan - FleetSumo',
  meta: [
    { name: 'description', content: 'Kelola maintenance kendaraan secara terencana di FleetSumo. Pantau dari tahap inspeksi, persetujuan, perbaikan aktual, hingga evaluasi log.' }
  ]
})
</script>

<style scoped>
.maintenance-management-page {
  overflow-x: hidden; 
}
</style>
