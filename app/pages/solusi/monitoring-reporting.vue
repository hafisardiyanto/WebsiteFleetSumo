<template>
  <div class="monitoring-reporting-page">
    <Navbar />
    
    <main>
      <MonHero />
      <MonProblems />
      <MonWhatIs />
      <MonArchitecture />
      <MonDashboard />
      <MonReportVehicle />
      <MonTrends />
      <MonVehicle />
      <MonReporting />
      <MonFilters />
      <MonInformation />
      <MonFeatures />
      <MonBenefits />
      <MonHub />
      <MonIndustries />
      <MonCTA />
    </main>
    
    <FooterSection />
  </div>
</template>

<script setup>
// Shared
import Navbar from '~/components/sections/Navbar.vue'
import FooterSection from '~/components/sections/FooterSection.vue'

// Local Sections
import MonHero from '~/components/sections/monitoring-management/MonHero.vue'
import MonProblems from '~/components/sections/monitoring-management/MonProblems.vue'
import MonWhatIs from '~/components/sections/monitoring-management/MonWhatIs.vue'
import MonArchitecture from '~/components/sections/monitoring-management/MonArchitecture.vue'
import MonDashboard from '~/components/sections/monitoring-management/MonDashboard.vue'
import MonReportVehicle from '~/components/sections/monitoring-management/MonReportVehicle.vue'
import MonTrends from '~/components/sections/monitoring-management/MonTrends.vue'
import MonVehicle from '~/components/sections/monitoring-management/MonVehicle.vue'
import MonReporting from '~/components/sections/monitoring-management/MonReporting.vue'
import MonFilters from '~/components/sections/monitoring-management/MonFilters.vue'
import MonInformation from '~/components/sections/monitoring-management/MonInformation.vue'
import MonFeatures from '~/components/sections/monitoring-management/MonFeatures.vue'
import MonBenefits from '~/components/sections/monitoring-management/MonBenefits.vue'
import MonHub from '~/components/sections/monitoring-management/MonHub.vue'
import MonIndustries from '~/components/sections/monitoring-management/MonIndustries.vue'
import MonCTA from '~/components/sections/monitoring-management/MonCTA.vue'

useHead({
  title: 'Monitoring & Reporting | Pantau Operasional Armada - FleetSumo',
  meta: [
    { name: 'description', content: 'Ubah seluruh data operasional armada menjadi informasi dan laporan yang lebih bermakna untuk dievaluasi dalam satu layar dashboard sentral FleetSumo.' }
  ]
})
</script>

<style scoped>
.monitoring-reporting-page {
  overflow-x: hidden; 
}
</style>
