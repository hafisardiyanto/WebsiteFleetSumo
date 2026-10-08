<template>
  <section class="vm-ecosystem-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="vm-ecosystem-container" style="max-width:1000px; margin:0 auto;">
      <div class="vme-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span style="color:#2563eb; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">PETA HUBUNGAN DATA</span>
        <h2 style="font-size:2.2rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Titik Integrasi Profil Vendor</h2>
        <p style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">Informasi eksternal pihak ketiga dibentuk sebagai fondasi referensial terhadap transaksi layanan dan penyediaan suku cadang masuk.</p>
      </div>

      <div class="dme-tree" data-aos="fade-up" data-aos-delay="200" style="text-align:center; position:relative; padding:2rem 0;">
         <div class="tree-level-inputs" style="display:flex; justify-content:center; gap:2rem; margin-bottom:2rem;">
            <div class="tree-node active" style="padding:1.5rem 3rem; background:#3b82f6; border:2px solid #3b82f6; border-radius:8px; font-weight:700; font-size:1.2rem; color:#fff; box-shadow:0 10px 20px rgba(59,130,246,0.2);">VENDOR MANAGEMENT</div>
         </div>
         
         <div style="height:30px; width:2px; background:#e2e8f0; margin:0 auto;"></div>

         <div class="tree-root" style="display:flex; justify-content:center; margin:-10px 0 2rem;">
            <div class="tree-node" style="padding:1rem 2.5rem; background:#1e293b; color:#fff; font-weight:600; font-size:1.1rem; border-radius:8px;">Referensial Transaksi</div>
         </div>
         
         <div style="height:30px; width:2px; background:#e2e8f0; margin:0 auto;"></div>

         <div class="tree-level-outputs" style="display:flex; justify-content:center; gap:2rem; margin-top:-10px;">
            <div class="tree-node" style="padding:1rem 2rem; border:2px solid #64748b; border-radius:8px; font-weight:600; color:#475569; background:#fff; min-width:180px;">Maintenance & Servis</div>
            <div class="tree-node" style="padding:1rem 2rem; border:2px solid #64748b; border-radius:8px; font-weight:600; color:#475569; background:#fff; min-width:180px;">Logistik & Sparepart</div>
            <div class="tree-node" style="padding:1rem 2rem; border:2px solid #64748b; border-radius:8px; font-weight:600; color:#475569; background:#fff; min-width:180px;">Stasiun Fuel</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 768px) {
  .tree-level-outputs, .tree-level-inputs { flex-direction: column; align-items:center; }
}
</style>
