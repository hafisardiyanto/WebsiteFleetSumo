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
            <a href="/solusi/fleet-management">Manajemen Armada</a>
            <a href="/solusi/maintenance-management">Manajemen Perawatan</a>
            <a href="/solusi/fuel-management">Manajemen BBM</a>
            <a href="/solusi/tyre-management">Manajemen Ban</a>
            <a href="/solusi/cost-management">Manajemen Biaya</a>
            <a href="/solusi/monitoring-reporting">Pemantauan & Laporan</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="/kontak/demo" class="nav-link">Fitur <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/fitur/fleet-vehicle">Armada & Kendaraan</a>
            <a href="/fitur/driver-management">Manajemen Pengemudi</a>
            <a href="/fitur/maintenance">Perawatan</a>
            <a href="/fitur/fuel">Bahan Bakar</a>
            <a href="/fitur/tyre">Ban</a>
            <a href="/fitur/sparepart">Suku Cadang</a>
            <a href="/fitur/vendor">Vendor</a>
            <a href="/fitur/approval-workflow">Persetujuan & Alur Kerja</a>
            <a href="/fitur/cost-financial">Biaya & Keuangan</a>
            <a href="/fitur/dashboard-reports">Dasbor & Laporan</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="/kontak/demo" class="nav-link">Industri <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/kontak/demo">Logistik & Transportasi</a>
            <a href="/kontak/demo">Pertambangan</a>
            <a href="/kontak/demo">Perkebunan</a>
            <a href="/kontak/demo">Konstruksi</a>
            <a href="/kontak/demo">Manufaktur</a>
            <a href="/kontak/demo">Bisnis Armada Lainnya</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="/kontak/demo" class="nav-link">Sumber Daya <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/kontak/demo">Blog / Artikel</a>
            <a href="/kontak/demo">Studi Kasus</a>
            <a href="/kontak/demo">Pembaruan Produk</a>
            <a href="/kontak/demo">FAQ</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="/kontak/demo" class="nav-link">Tentang Kami <span class="arrow">▾</span></a>
          <div class="dropdown-menu">
            <a href="/tentang-kami">Tentang FleetSumo</a>
            <a href="/tentang-kami#visi">Visi & Misi Kami</a>
            <a href="/kontak/demo">Kontak</a>
          </div>
        </div>
      </nav>

      <div class="navbar-action">
        <button class="btn-demo" onclick="window.location.href='/kontak/demo'">Kontak / Minta Demo</button>
      </div>
    </div>
  </header>
</template>

<style src="~/assets/css/sections/navbar.css" scoped></style>
