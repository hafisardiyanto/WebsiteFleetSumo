<template>
  <section class="dm-roles-wrapper" style="padding:4rem 1rem; background-color:#f8fafc;">
    <div class="dm-roles-container" style="max-width:1200px; margin:0 auto;">
      <div class="roles-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span style="color:#2563eb; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">OPERATIONAL WORKFLOW</span>
        <h2 style="font-size:2.2rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Alur Penggunaan Data Pengemudi</h2>
        <p style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">Bagaimana integrasi *role-based* membantu pemangku kepentingan dalam struktur operasional transportasi.</p>
      </div>

      <div class="roles-grid" data-aos="fade-up" data-aos-delay="200" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:2rem;">
        
        <div class="role-card" style="background:#fff; border-radius:12px; padding:2rem; text-align:center; border:1px solid #e2e8f0; box-shadow:0 5px 15px rgba(0,0,0,0.03);">
           <div class="role-icon" style="font-size:3rem; margin-bottom:1rem;">👨‍💻</div>
           <h3 style="font-size:1.25rem; font-weight:700; color:#1e293b; margin-bottom:1rem;">Fleet Admin</h3>
           <p style="color:#475569; line-height:1.5;">Bertanggung jawab menginput profil (KTP, SIM), memastikan keabsahan dokumen berkala, serta melakukan penunjukan driver ke armada spesifik.</p>
        </div>

        <div class="role-card" style="background:#fff; border-radius:12px; padding:2rem; text-align:center; border:1px solid #e2e8f0; box-shadow:0 5px 15px rgba(0,0,0,0.03);">
           <div class="role-icon" style="font-size:3rem; margin-bottom:1rem;">🚛</div>
           <h3 style="font-size:1.25rem; font-weight:700; color:#1e293b; margin-bottom:1rem;">Driver (Pengemudi)</h3>
           <p style="color:#475569; line-height:1.5;">Menjadi subjek data yang ditautkan ke armada. Penugasan mereka juga terhubung ke pencatatan form aktivitas lain seperti BBM dan insiden rute.</p>
        </div>

        <div class="role-card" style="background:#fff; border-radius:12px; padding:2rem; text-align:center; border:1px solid #e2e8f0; box-shadow:0 5px 15px rgba(0,0,0,0.03);">
           <div class="role-icon" style="font-size:3rem; margin-bottom:1rem;">📊</div>
           <h3 style="font-size:1.25rem; font-weight:700; color:#1e293b; margin-bottom:1rem;">Ops Management</h3>
           <p style="color:#475569; line-height:1.5;">Melihat status persediaan sumber daya supir (Available / On-trip) di pool untuk membantu merencanakan operasional logistik masa depan.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
