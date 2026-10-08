<template>
  <section class="tyre-cta-wrapper">
    <div class="tyre-cta-container">
      <div class="tca-bg" data-aos="fade-up">
         <!-- Image Background (CTATyre.jpg) is set via CSS -->
         <div class="tca-overlay"></div>
         
         <div class="tca-content">
            <span class="tca-label">TYRE MANAGEMENT</span>
            <h2 class="tca-title">Kenali bagaimana FleetSumo dapat mendukung pengelolaan ban armada Anda.</h2>
            
            <div class="tca-actions">
               <button class="btn-primary" onclick="window.location.href='/kontak/demo'">Jadwalkan Demo</button>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tyre-cta-wrapper {
  padding: 6rem 5%;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.tyre-cta-container {
  max-width: 1200px;
  width: 100%;
}
.tca-bg {
  position: relative;
  background-image: url('/assets/fitur/tyre/cta-bg.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2);
}
.tca-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.8));
}
.tca-content {
  position: relative;
  z-index: 2;
  padding: 6rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: #ffffff;
}
.tca-label {
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
.tca-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
@media (min-width: 768px) {
  .tca-title {
    font-size: 3.5rem;
  }
}
.tca-subtitle {
  font-size: 1.125rem;
  color: #cbd5e1;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}
.tca-actions {
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
