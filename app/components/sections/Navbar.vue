<template>
  <header class="navbar-wrapper">
    <div class="navbar-container">
      <a href="/" class="navbar-logo">
        <span style="color: #0f172a; margin-right: 2px;">Fleet</span><span style="color: #f97316;">Sumo</span>
      </a>
      
      <nav class="navbar-links">
        <div class="nav-item">
          <a href="/" class="nav-link">Beranda</a>
        </div>
        
        <div class="nav-item has-dropdown">
          <a href="#" class="nav-link">Solusi <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/solusi/fleet-management">Fleet Management</a>
            <a href="/solusi/maintenance-management">Maintenance Management</a>
            <a href="/solusi/fuel-management">Fuel Management</a>
            <a href="/solusi/tyre-management">Tyre Management</a>
            <a href="/solusi/cost-management">Cost Management</a>
            <a href="/solusi/monitoring-reporting">Monitoring & Reporting</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="#" class="nav-link">Fitur <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/fitur/fleet-vehicle">Fleet & Vehicle</a>
            <a href="/fitur/driver-management">Driver Management</a>
            <a href="#">Maintenance</a>
            <a href="#">Fuel</a>
            <a href="#">Tyre</a>
            <a href="#">Sparepart</a>
            <a href="#">Vendor</a>
            <a href="#">Approval & Workflow</a>
            <a href="#">Cost & Financial</a>
            <a href="#">Dashboard & Reports</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="#" class="nav-link">Industri <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="#">Logistik & Transportasi</a>
            <a href="#">Pertambangan</a>
            <a href="#">Perkebunan</a>
            <a href="#">Konstruksi</a>
            <a href="#">Manufaktur</a>
            <a href="#">Usaha Armada Lainnya</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="#" class="nav-link">Resources <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="#">Blog & Artikel</a>
            <a href="#">Studi Kasus</a>
            <a href="#">Pembaruan Produk</a>
            <a href="#">FAQ</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="#" class="nav-link">Tentang Kami <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="#">Tentang FleetSumo</a>
            <a href="#">Visi & Misi Kami</a>
            <a href="#">Kontak</a>
          </div>
        </div>
      </nav>

      <div class="navbar-action">
        <button class="btn-demo">Kontak / Minta Demo</button>
      </div>
    </div>
  </header>
</template>

<style src="~/assets/css/sections/navbar.css" scoped></style>
