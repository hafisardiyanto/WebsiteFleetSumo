<template>
  <div class="cost-management-page">
    <Navbar />
    
    <main>
      <CostHero />
      <CostProblems />
      <CostWhatIs />
      <CostCycle />
      <CostWorkflow />
      <CostTypes />
      <CostApproval />
      <CostMonitoring />
      <CostHistory />
      <CostFeatures />
      <CostBenefits />
      <CostOtherSolutions />
      <CostIndustries />
      <CostCTA />
    </main>
    
    <FooterSection />
  </div>
</template>

<script setup>
// Shared global components
import Navbar from '~/components/sections/Navbar.vue'
import FooterSection from '~/components/sections/FooterSection.vue'

// Localized Page Components
import CostHero from '~/components/sections/cost-management/CostHero.vue'
import CostProblems from '~/components/sections/cost-management/CostProblems.vue'
import CostWhatIs from '~/components/sections/cost-management/CostWhatIs.vue'
import CostCycle from '~/components/sections/cost-management/CostCycle.vue'
import CostWorkflow from '~/components/sections/cost-management/CostWorkflow.vue'
import CostTypes from '~/components/sections/cost-management/CostTypes.vue'
import CostApproval from '~/components/sections/cost-management/CostApproval.vue'
import CostMonitoring from '~/components/sections/cost-management/CostMonitoring.vue'
import CostHistory from '~/components/sections/cost-management/CostHistory.vue'
import CostFeatures from '~/components/sections/cost-management/CostFeatures.vue'
import CostBenefits from '~/components/sections/cost-management/CostBenefits.vue'
import CostOtherSolutions from '~/components/sections/cost-management/CostOtherSolutions.vue'
import CostIndustries from '~/components/sections/cost-management/CostIndustries.vue'
import CostCTA from '~/components/sections/cost-management/CostCTA.vue'

useHead({
  title: 'Cost Management | Kendalikan Biaya Armada - FleetSumo',
  meta: [
    { name: 'description', content: 'FleetSumo membantu perusahaan mencatat, mengelola, memantau, dan menelusuri biaya yang berkaitan dengan operasional armada dalam satu sistem terintegrasi dan akurat.' }
  ]
})
</script>

<style scoped>
.cost-management-page {
  overflow-x: hidden; 
}
</style>
