<template>
  <section class="fv-ecosystem-wrapper" style="padding:4rem 1rem; background-color:#ffffff;">
    <div class="fv-ecosystem-container" style="max-width:1000px; margin:0 auto;">
      <div class="fve-header" data-aos="fade-up" style="text-align:center; margin-bottom:3rem;">
        <span style="color:#2563eb; font-weight:600; text-transform:uppercase; font-size:0.9rem; letter-spacing:1px; display:inline-block; margin-bottom:0.8rem;">PRODUCT ECOSYSTEM</span>
        <h2 style="font-size:2.2rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">Terhubung ke Seluruh Sektor Transaksional</h2>
        <p style="color:#475569; font-size:1.1rem; max-width:800px; margin:0 auto;">Data kendaraan bertindak sebagai landasan akar (root) bagi seluruh riwayat operasional, menghubungkan aset ke pencatatan harian secara otomatis.</p>
      </div>

      <div class="dme-tree" data-aos="fade-up" data-aos-delay="200" style="text-align:center; position:relative; padding:2rem 0;">
         <div class="tree-root" style="display:inline-block; padding:1rem 2.5rem; background:#1e293b; color:#fff; font-weight:700; font-size:1.3rem; border-radius:8px; margin-bottom:2rem; box-shadow:0 10px 20px rgba(0,0,0,0.1);">FLEET (KENDARAAN)</div>
         
         <!-- Simulated vertical line downwards -->
         <div style="height:30px; width:2px; background:#e2e8f0; margin:0 auto;"></div>

         <div class="tree-level-1" style="display:flex; justify-content:center; gap:2rem; margin-bottom:2rem; position:relative;">
            <div class="tree-node active" style="padding:1rem 3rem; border:2px solid #3b82f6; background:#3b82f6; color:#fff; border-radius:8px; font-weight:600; min-width:200px; box-shadow:0 5px 15px rgba(59,130,246,0.3);">Driver</div>
         </div>
         
         <div class="tree-level-2" style="display:flex; justify-content:center; gap:2rem; margin-bottom:2rem; flex-wrap:wrap;">
            <div class="tree-node" style="padding:1rem 2rem; border:2px solid #64748b; border-radius:8px; font-weight:600; color:#475569; background:#fff; min-width:180px;">Maintenance</div>
            <div class="tree-node" style="padding:1rem 2rem; border:2px solid #64748b; border-radius:8px; font-weight:600; color:#475569; background:#fff; min-width:180px;">Fuel</div>
            <div class="tree-node" style="padding:1rem 2rem; border:2px solid #64748b; border-radius:8px; font-weight:600; color:#475569; background:#fff; min-width:180px;">Cost / Tyre</div>
         </div>

         <div class="tree-level-3" style="display:flex; justify-content:center;">
            <div class="tree-node" style="padding:1rem 2.5rem; background:#0f172a; color:#fff; font-weight:700; border-radius:8px; min-width:300px;">Dashboard & Reports</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media(max-width: 768px) {
  .tree-level-2 { flex-direction: column; align-items:center; }
}
</style>
