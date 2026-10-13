<script setup>
import { ref } from 'vue';

useHead({
  title: 'Jadwalkan Demo FleetSumo | Konsultasi Solusi Armada',
  meta: [
    { name: 'description', content: 'Jadwalkan sesi demonstrasi aplikasi FleetSumo dengan tim kami. Pelajari bagaimana sistem manajemen armada kami dapat disesuaikan dengan kebutuhan bisnis Anda.' },
    { property: 'og:title', content: 'Jadwalkan Demo FleetSumo | Konsultasi Solusi Armada' },
    { property: 'og:description', content: 'Jadwalkan sesi demonstrasi aplikasi FleetSumo dengan tim kami. Pelajari bagaimana sistem manajemen armada kami dapat disesuaikan dengan kebutuhan bisnis Anda.' },
    { property: 'og:url', content: 'https://fleetsumo.id/kontak/demo' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://fleetsumo.id/assets/og/og-kontak-demo.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Jadwalkan Sesi Demonstrasi Platform FleetSumo' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Jadwalkan Demo FleetSumo | Konsultasi Solusi Armada' },
    { name: 'twitter:description', content: 'Jadwalkan sesi demonstrasi aplikasi FleetSumo dengan tim kami. Pelajari bagaimana sistem manajemen armada kami dapat disesuaikan dengan kebutuhan bisnis Anda.' },
    { name: 'twitter:image', content: 'https://fleetsumo.id/assets/og/og-kontak-demo.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fleetsumo.id/kontak/demo' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://fleetsumo.id"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Kontak & Demo",
            "item": "https://fleetsumo.id/kontak/demo"
          }
        ]
      })
    }
  ]
})

import NavbarSection from '~/components/sections/Navbar.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

const isSubmitted = ref(false);
const formData = ref({
  fullName: '',
  email: '',
  company: '',
  fleetSize: '',
  notes: ''
});

const handleSubmit = () => {
  if (formData.value.fullName && formData.value.email && formData.value.company) {
    isSubmitted.value = true;
  }
};
</script>

<template>
  <main class="page-wrapper">
    <NavbarSection />

    <div class="demo-container">
      <!-- Hero Section -->
      <section class="demo-hero">
        <span class="hero-badge">KONSULTASI & DEMO</span>
        <h1 class="hero-title">Konsultasikan Kebutuhan Pengelolaan Armada Bisnis Anda</h1>
        <p class="hero-desc">
          Diskusikan tantangan operasional armada kendaraan Anda bersama tim FleetSumo. Dapatkan sesi demonstrasi langsung untuk melihat bagaimana alur kerja pencatatan, pemeliharaan, BBM, dan pengendalian biaya dapat diintegrasikan sesuai model bisnis Anda.
        </p>
      </section>

      <!-- Main Content Grid -->
      <section class="demo-grid-section">
        <!-- Left Column: Value & Info -->
        <div class="demo-info-col">
          <h2 class="col-title">Apa yang Anda Dapatkan dalam Sesi Demo?</h2>
          <p class="col-subtitle">Kami memandu Anda memahami solusi FleetSumo secara transparan dan aplikatif.</p>

          <div class="info-cards">
            <div class="info-card">
              <div class="info-icon">🖥️</div>
              <div>
                <h3 class="info-heading">Tur Langsung Platform FleetSumo</h3>
                <p class="info-text">Melihat alur nyata modul operasional dari pencatatan kendaraan, penugasan driver, log BBM, manajemen ban, hingga riwayat servis.</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">📊</div>
              <div>
                <h3 class="info-heading">Simulasi Laporan Biaya & Analitik</h3>
                <p class="info-text">Mengevaluasi bagaimana data operasional disederhanakan menjadi ringkasan biaya per kendaraan dan metrik efisiensi yang mudah dipahami manajemen.</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">💬</div>
              <div>
                <h3 class="info-heading">Konsultasi Alur Approval & Bisnis</h3>
                <p class="info-text">Membahas kesesuaian alur kerja persetujuan digital berjenjang dengan kebijakan organisasi dan operasional armada perusahaan Anda.</p>
              </div>
            </div>
          </div>

          <!-- Official Channels Box -->
          <div class="contact-channels-box">
            <h3 class="channel-heading">Kanal Komunikasi Resmi</h3>
            <ul class="channel-list">
              <li>
                <strong>Email Konsultasi:</strong>
                <span>info@fleetsumo.id</span>
              </li>
              <li>
                <strong>Jadwal Operasional:</strong>
                <span>Senin - Jumat, 09.00 - 17.00 WIB</span>
              </li>
              <li>
                <strong>Format Sesi:</strong>
                <span>Online Meeting / Demonstrasi Terjadwal</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Column: Interactive Form -->
        <div class="demo-form-col">
          <div class="form-card">
            <h2 class="form-title">Jadwalkan Sesi Demonstrasi</h2>
            <p class="form-subtitle">Lengkapi informasi di bawah ini agar tim kami dapat menyiapkan materi konsultasi yang relevan.</p>

            <div v-if="isSubmitted" class="success-message">
              <div class="success-icon">✅</div>
              <h3>Permintaan Demo Berhasil Dikirim</h3>
              <p>Terima kasih atas ketertarikan Anda. Tim FleetSumo akan segera menghubungi Anda melalui email untuk mengonfirmasi jadwal sesi demo.</p>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="demo-form">
              <div class="form-group">
                <label for="fullName">Nama Lengkap *</label>
                <input id="fullName" v-model="formData.fullName" type="text" placeholder="Nama Anda" required />
              </div>

              <div class="form-group">
                <label for="email">Email Perusahaan / Kerja *</label>
                <input id="email" v-model="formData.email" type="email" placeholder="nama@perusahaan.com" required />
              </div>

              <div class="form-group">
                <label for="company">Nama Perusahaan *</label>
                <input id="company" v-model="formData.company" type="text" placeholder="PT / CV Nama Perusahaan" required />
              </div>

              <div class="form-group">
                <label for="fleetSize">Estimasi Jumlah Armada</label>
                <select id="fleetSize" v-model="formData.fleetSize">
                  <option value="" disabled selected>Pilih rentang unit</option>
                  <option value="1-10">1 - 10 Unit Kendaraan</option>
                  <option value="11-50">11 - 50 Unit Kendaraan</option>
                  <option value="51-100">51 - 100 Unit Kendaraan</option>
                  <option value=">100">> 100 Unit Kendaraan</option>
                </select>
              </div>

              <div class="form-group">
                <label for="notes">Tantangan Utama atau Kebutuhan Spesifik</label>
                <textarea id="notes" v-model="formData.notes" rows="3" placeholder="Contoh: Kami ingin menertibkan pencatatan servis dan mengontrol biaya bahan bakar..."></textarea>
              </div>

              <button type="submit" class="btn-submit">
                Kirim Permintaan Demo &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>

    <FooterSection />
  </main>
</template>

<style src="~/assets/css/pages/kontak/demo.css" scoped></style>
.page-wrapper {
  overflow: hidden;
  background-color: #ffffff;
}

.demo-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 120px 24px 80px 24px;
}

.demo-hero {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 64px auto;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  background-color: #eff6ff;
  color: #1a56db;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: 9999px;
  margin-bottom: 20px;
}

.hero-title {
  font-size: 38px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 17px;
  color: #475569;
  line-height: 1.7;
}

.demo-grid-section {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: start;
}

.col-title {
  font-size: 26px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 12px;
}

.col-subtitle {
  font-size: 15.5px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 32px;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
}

.info-card {
  display: flex;
  gap: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}

.info-icon {
  font-size: 26px;
  flex-shrink: 0;
  padding-top: 2px;
}

.info-heading {
  font-size: 16.5px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 6px;
}

.info-text {
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

.contact-channels-box {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 24px;
}

.channel-heading {
  font-size: 16px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 12px;
}

.channel-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #1e40af;
}

.channel-list strong {
  color: #0f172a;
  margin-right: 6px;
}

.form-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 36px 32px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.form-title {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
}

.form-subtitle {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 24px;
  line-height: 1.5;
}

.demo-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 13.5px;
  font-weight: 600;
  color: #334155;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 11px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  color: #0f172a;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1a56db;
  box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.12);
}

.btn-submit {
  background-color: #f97316;
  color: #ffffff;
  border: none;
  padding: 13px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  margin-top: 6px;
}

.btn-submit:hover {
  background-color: #ea580c;
}

.btn-submit:active {
  transform: translateY(1px);
}

.success-message {
  text-align: center;
  padding: 32px 16px;
}

.success-icon {
  font-size: 42px;
  margin-bottom: 16px;
}

.success-message h3 {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
}

.success-message p {
  font-size: 14.5px;
  color: #475569;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .demo-grid-section {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 28px;
  }
  .demo-container {
    padding: 100px 20px 60px 20px;
  }
}

