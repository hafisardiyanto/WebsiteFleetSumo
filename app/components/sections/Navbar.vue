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
          <a href="/kontak/demo" class="nav-link">Solusi <span class="arrow">▾</span></a>
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
          <a href="/kontak/demo" class="nav-link">Fitur <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/fitur/fleet-vehicle">Fleet & Vehicle</a>
            <a href="/fitur/driver-management">Driver Management</a>
            <a href="/fitur/maintenance">Maintenance</a>
            <a href="/fitur/fuel">Fuel</a>
            <a href="/fitur/tyre">Tyre</a>
            <a href="/fitur/sparepart">Sparepart</a>
            <a href="/fitur/vendor">Vendor</a>
            <a href="/fitur/approval-workflow">Approval & Workflow</a>
            <a href="/fitur/cost-financial">Cost & Financial</a>
            <a href="/fitur/dashboard-reports">Dashboard & Reports</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="/industri/logistik-transportasi" class="nav-link">Industri <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/industri/logistik-transportasi">Logistik & Transportasi</a>
            <a href="/industri/pertambangan">Pertambangan</a>
            <a href="/industri/perkebunan">Perkebunan</a>
            <a href="/industri/konstruksi">Konstruksi</a>
            <a href="/industri/manufaktur">Manufaktur</a>
            <a href="/industri/bisnis-armada-lainnya">Bisnis Armada Lainnya</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="/resources/blog-artikel" class="nav-link">Resources <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/resources/blog-artikel">Blog & Artikel</a>
            <a href="/resources/studi-kasus">Studi Kasus</a>
            <a href="/resources/pembaruan-produk">Pembaruan Produk</a>
            <a href="/resources/faq">FAQ</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="/tentang-kami" class="nav-link">Tentang Kami <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/tentang-kami">Tentang FleetSumo</a>
            <a href="/tentang-kami#visi">Visi & Misi Kami</a>
            <a href="/kontak/demo">Kontak</a>
          </div>
        </div>
      </nav>

      <div class="navbar-action">
        <NuxtLink to="/kontak/demo" class="btn-demo" style="text-decoration: none; display: inline-block;">Kontak / Minta Demo</NuxtLink>
      </div>
    </div>
  </header>
</template>

<style src="~/assets/css/components/navbar/index.css" scoped></style>
