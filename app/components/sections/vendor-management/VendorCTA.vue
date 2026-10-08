<template>
  <section class="vendor-cta-wrapper">
    <div class="vendor-cta-container">
      <div class="vca-bg" data-aos="fade-up">
         <div class="vca-overlay"></div>
         
         <div class="vca-content">
            <span class="vca-label">SIAP MENGELOLA VENDOR DENGAN LEBIH TERSTRUKTUR?</span>
            <h2 class="vca-title">Kelola Vendor dan Kebutuhan Armada dalam Satu Platform</h2>
            <p class="vca-subtitle">Diskusikan kebutuhan pengelolaan vendor dan operasional armada perusahaan Anda bersama tim FleetSumo.</p>
            
            <div class="vca-actions">
               <button class="btn-primary" onclick="window.location.href='/kontak/demo'">Jadwalkan Demo</button>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vendor-cta-wrapper {
  padding: 6rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.vendor-cta-container {
  max-width: 1200px;
  width: 100%;
}
.vca-bg {
  position: relative;
  background-image: url('/assets/fitur/vendor/cta-bg.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2);
}
.vca-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.8));
}
.vca-content {
  position: relative;
  z-index: 2;
  padding: 6rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: #ffffff;
}
.vca-label {
  display: inline-block;
  padding: 0.25rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.vca-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
@media (min-width: 768px) {
  .vca-title {
    font-size: 3.5rem;
  }
}
.vca-subtitle {
  font-size: 1.125rem;
  color: #cbd5e1;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}
.vca-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  background: #3b82f6;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 1rem;
}
.btn-primary:hover {
  background: #2563eb;
}
.btn-secondary {
  background: transparent;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
}
</style>
