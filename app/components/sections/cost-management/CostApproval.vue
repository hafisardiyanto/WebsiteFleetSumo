<template>
  <section class="cost-approval-wrapper">
    <div class="cost-approval-container">
      <div class="cost-approval-header" data-aos="fade-up">
        <h2 class="cost-approval-title">Buat Proses Pengajuan Biaya Lebih Terstruktur</h2>
        <p class="cost-approval-subtitle">
          Dengan workflow yang terstruktur, proses pengeluaran dapat dibuat lebih mudah untuk ditelusuri dari pengajuan hingga persetujuan dan realisasi.
        </p>
      </div>

      <!-- HTML CSS Stepper -->
      <div class="cost-stepper-container" data-aos="fade-up" data-aos-delay="100">
        
        <div class="stepper-track"></div>
        
        <div class="stepper-steps">
          
          <!-- Step 1 -->
          <div class="stepper-item completed">
            <div class="step-circle">1</div>
            <h4 class="step-title">Diajukan</h4>
            <div class="step-card">
               <span class="step-label">Pengaju</span>
               <span class="step-val">Joni (Mekanik)</span>
               <hr>
               <span class="step-label">Nominal</span>
               <span class="step-val">Rp 2.500.000</span>
               <span class="step-date">10 Okt 2026</span>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="stepper-item completed">
            <div class="step-circle">2</div>
            <h4 class="step-title">Menunggu Approval</h4>
            <div class="step-card">
               <span class="step-label">Aktivitas</span>
               <span class="step-val warn">Pengecekan Berkas</span>
               <hr>
               <span class="step-label">Checker</span>
               <span class="step-val">Budi (SPV)</span>
               <span class="step-date">11 Okt 2026</span>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="stepper-item active">
            <div class="step-circle">3</div>
            <h4 class="step-title">Disetujui</h4>
            <div class="step-card highlight">
               <span class="step-label">Status Dokumen</span>
               <span class="step-val valid">Verified & Approved</span>
               <hr>
               <span class="step-label">Approval Oleh</span>
               <span class="step-val">Agus (Manager)</span>
               <span class="step-date">12 Okt 2026</span>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="stepper-item pending">
            <div class="step-circle">4</div>
            <h4 class="step-title">Direalisasikan</h4>
            <div class="step-card empty">
               <span class="step-label">Menunggu pencairan dana</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/sections/cost/cost-approval.css" scoped></style>
