<template>
  <section class="maint-workflow-wrapper">
    <div class="maint-workflow-container">
      <div class="maint-workflow-header" data-aos="fade-up">
        <h2 class="maint-workflow-title">Setiap Temuan Dapat Ditindaklanjuti</h2>
      </div>

      <div class="maint-workflow-layout">
        <!-- Visual Section (using ProsesMaintenance.jpg) -->
        <div class="workflow-visual" data-aos="fade-right" data-aos-delay="100">
          <div class="workflow-mockup">
            <img src="/ProsesMaintenance.jpg" alt="Alur Perbaikan Kendaraan - Dari Temuan hingga Realisasi" class="workflow-img">
          </div>
        </div>

        <!-- Text Flow Section -->
        <div class="workflow-steps" data-aos="fade-left" data-aos-delay="200">
          
          <div class="wf-step">
            <h3 class="wf-step-title">Temuan</h3>
            <p class="wf-step-desc">Kendaraan mengalami masalah pada sistem pengereman.</p>
          </div>

          <div class="wf-step">
            <h3 class="wf-step-title">Pengajuan Maintenance</h3>
            <p class="wf-step-desc">Tim mengajukan kebutuhan pemeriksaan dan perbaikan.</p>
          </div>

          <div class="wf-step">
            <h3 class="wf-step-title">Approval</h3>
            <p class="wf-step-desc">Pengajuan diperiksa dan disetujui sesuai alur perusahaan.</p>
          </div>

          <div class="wf-step">
            <h3 class="wf-step-title">Pelaksanaan</h3>
            <p class="wf-step-desc">Pekerjaan maintenance dilakukan oleh mekanik atau vendor.</p>
          </div>

          <div class="wf-step">
            <h3 class="wf-step-title">Realisasi</h3>
            <p class="wf-step-desc">Hasil pekerjaan dan biaya dicatat.</p>
          </div>

          <div class="wf-step">
            <h3 class="wf-step-title">Riwayat</h3>
            <p class="wf-step-desc">Aktivitas tersimpan pada riwayat kendaraan.</p>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/maintenance/maint-workflow.css" scoped></style>
