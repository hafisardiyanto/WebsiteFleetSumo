export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author?: string;
  publishedAt?: string; // ISO date string
  updatedAt?: string;
  coverImage: string;
  coverImageAlt: string;
  readingTime: string; // e.g., "5 menit"
  content: string; // HTML string
  metaTitle: string;
  metaDescription: string;
}

// NOTE: Each article should have a unique coverImage and coverImageAlt reflecting its content.
export const articles: Article[] = [
  // Article 1 – Cara Mengatur Armada Perusahaan secara Terstruktur
  {
    slug: 'cara-mengatur-armada',
    title: 'Cara Mengatur Armada Perusahaan secara Terstruktur',
    excerpt: 'Panduan praktis untuk inventarisasi kendaraan, pencatatan dokumen, riwayat perawatan, dan pembagian tanggung jawab PIC.',
    category: 'Administrasi Armada',
    author: 'Tim FleetSumo',
    publishedAt: '2026-10-01',
    updatedAt: '2026-10-01',
    coverImage: '/assets/Industri/Bisnis Armada Lainnya.jpg',
    coverImageAlt: 'Administrasi Armada',
    readingTime: '4 menit',
    content: `<h2>Inventarisasi Kendaraan</h2>
<p>Langkah pertama adalah membuat daftar lengkap semua kendaraan yang beroperasi dalam perusahaan.</p>
<h3>Data Dasar yang Perlu Dicatat</h3>
<ul>
  <li><strong>Nomor Polisi</strong> – identitas utama kendaraan.</li>
  <li><strong>Nomor Rangka & Mesin</strong> – untuk verifikasi legalitas.</li>
  <li><strong>Jenis & Kapasitas</strong> – tipe kendaraan, beban maksimum.</li>
  <li><strong>Tahun Produksi</strong> – memudahkan perencanaan depresiasi.</li>
  <li><strong>Status Operasional</strong> – aktif, non‑aktif, atau dalam perbaikan.</li>
</ul>
<h2>Pengelolaan Dokumen Kendaraan</h2>
<p>Setiap kendaraan harus memiliki dokumen berikut:</p>
<ul>
  <li>STNK (Surat Tanda Nomor Kendaraan)</li>
  <li>KIR (Kartu Induk Registrasi) – khusus kendaraan berat</li>
  <li>Asuransi – polis yang mencakup kerusakan, kebakaran, dan pencurian</li>
  <li>Surat Kuasa Penggunaan (jika ada)</li>
</ul>
<h3>Checklist Dokumen</h3>
<ul>
  <li>Masukkan tanggal berlaku masing‑masing dokumen ke modul "Dokumen".</li>
  <li>Setel notifikasi reminder 30 hari sebelum masa berlaku habis.</li>
  <li>Lakukan audit bulanan untuk memverifikasi dokumen fisik.</li>
</ul>
<h2>Riwayat Perawatan & PIC</h2>
<p>Catat setiap servis, ganti oli, atau perbaikan penting. Tentukan <strong>Person In Charge (PIC)</strong> untuk setiap kendaraan.</p>
<h3>Contoh Tabel Riwayat Perawatan</h3>
<table>
  <thead>
    <tr><th>Kendaraan</th><th>Tanggal Servis</th><th>Jenis Perawatan</th><th>PIC</th></tr>
  </thead>
  <tbody>
    <tr><td>Truck A</td><td>2026-09-10</td><td>Ganti Oli</td><td>Andi</td></tr>
    <tr><td>Van B</td><td>2026-09-12</td><td>Servis Rutin</td><td>Siti</td></tr>
  </tbody>
</table>
<h2>Kesalahan Umum & Cara Mengatasinya</h2>
<ul>
  <li><strong>Dokumen kadaluarsa</strong> – gunakan reminder otomatis untuk perpanjangan.</li>
  <li><strong>Data kendaraan tidak terintegrasi</strong> – manfaatkan modul "Inventaris" di Cek Kendaraan untuk sinkronisasi.</li>
  <li><strong>Penanggung jawab tidak jelas</strong> – tetapkan PIC pada setiap record kendaraan.</li>
</ul>`,
    metaTitle: 'Cara Mengatur Armada Perusahaan secara Terstruktur – Cek Kendaraan',
    metaDescription: 'Panduan lengkap inventarisasi kendaraan, pencatatan dokumen, riwayat perawatan, dan pembagian tanggung jawab PIC untuk armada perusahaan.'
  },
  // Article 2 – Cara Memantau dan Mengevaluasi Penggunaan BBM Armada
  {
    slug: 'optimasi-bbm',
    title: 'Cara Memantau dan Mengevaluasi Penggunaan BBM Armada',
    excerpt: 'Langkah praktis mencatat liter BBM, menghitung konsumsi km/liter, dan mengevaluasi anomali konsumsi dengan contoh perhitungan.',
    category: 'BBM & Biaya',
    author: 'Tim FleetSumo',
    publishedAt: '2026-10-02',
    updatedAt: '2026-10-02',
    coverImage: '/assets/fitur/fuel/fuel-dashboard.png',
    coverImageAlt: 'Optimasi BBM Armada',
    readingTime: '5 menit',
    content: `<h2>Pencatatan Liter BBM</h2>
<p>Setiap kali kendaraan mengisi BBM, catat jumlah liter dan harga per liter pada modul "BBM".</p>
<h3>Data yang Diperlukan</h3>
<ul>
  <li>Tanggal pengisian</li>
  <li>Kendaraan (nomor polisi)</li>
  <li>Liter yang diisi</li>
  <li>Harga per liter</li>
  <li>Odometer saat pengisian</li>
</ul>
<h2>Rumus Konsumsi km/liter</h2>
<p>Konsumsi dihitung dengan rumus sederhana:</p>
<pre>km_per_liter = (odometer_akhir - odometer_awal) / liter_bbm</pre>
<h3>Contoh Perhitungan</h3>
<p>Jika odometer naik dari 12 500 km ke 12 800 km setelah mengisi 30 liter, maka:</p>
<pre>km_per_liter = (12 800 - 12 500) / 30 = 300 / 30 = 10 km/liter</pre>
<h2>Evaluasi Konsumsi & Anomali</h2>
<p>Bandingkan konsumsi antar kendaraan atau periode waktu untuk menemukan anomali.</p>
<h3>Checklist Evaluasi</h3>
<ul>
  <li>Apakah konsumsi di bawah 8 km/liter? (indikasi potensi masalah)</li>
  <li>Apakah ada lonjakan konsumsi setelah perubahan rute?</li>
  <li>Apakah kendaraan dengan beban berat menunjukkan konsumsi lebih tinggi?</li>
</ul>
<h2>Contoh Tabel Ringkasan BBM</h2>
<table>
  <thead>
    <tr><th>Kendaraan</th><th>Liter</th><th>Harga/Liter</th><th>Total Biaya</th><th>Konsumsi (km/l)</th></tr>
  </thead>
  <tbody>
    <tr><td>Truck A</td><td>150</td><td>Rp14.000</td><td>Rp2.100.000</td><td>9.8</td></tr>
    <tr><td>Van B</td><td>80</td><td>Rp14.000</td><td>Rp1.120.000</td><td>10.5</td></tr>
  </tbody>
</table>
<p>Data di atas bersifat ilustratif dan dapat disesuaikan dengan kondisi operasional Anda.</p>`,
    metaTitle: 'Cara Memantau dan Mengevaluasi Penggunaan BBM Armada – Cek Kendaraan',
    metaDescription: 'Panduan praktis mencatat liter BBM, menghitung konsumsi km/liter, dan mengevaluasi anomali konsumsi armada dengan contoh perhitungan.'
  },
  // Article 3 – Cara Menghitung Biaya Operasional Armada Perusahaan
  {
    slug: 'analisis-biaya-operasional',
    title: 'Cara Menghitung Biaya Operasional Armada Perusahaan',
    excerpt: 'Penjelasan perbedaan biaya tetap vs variabel, contoh tabel biaya per kendaraan, dan rumus biaya per kilometer.',
    category: 'Biaya Operasional',
    author: 'Tim FleetSumo',
    publishedAt: '2026-10-03',
    updatedAt: '2026-10-03',
    coverImage: '/assets/Industri/Logistik & Transportasi.jpg',
    coverImageAlt: 'Analisis Biaya Operasional Armada',
    readingTime: '5 menit',
    content: `<h2>Biaya Tetap vs Biaya Variabel</h2>
<p>Biaya tetap tidak berubah seiring volume operasional (misalnya asuransi, pajak). Biaya variabel berubah sesuai penggunaan (BBM, servis, suku cadang).</p>
<h3>Komponen Biaya Umum</h3>
<ul>
  <li><strong>Biaya Tetap</strong>: Asuransi, pajak kendaraan, depresiasi, biaya administrasi.</li>
  <li><strong>Biaya Variabel</strong>: BBM, servis rutin, perbaikan, suku cadang, tol.</li>
</ul>
<h2>Contoh Tabel Biaya per Kendaraan (Ilustrasi)</h2>
<table>
  <thead>
    <tr><th>Kendaraan</th><th>Biaya Tetap (Rp)</th><th>Biaya Variabel (Rp)</th><th>Total (Rp)</th></tr>
  </thead>
  <tbody>
    <tr><td>Truck A</td><td>5.000.000</td><td>2.100.000</td><td>7.100.000</td></tr>
    <tr><td>Van B</td><td>3.500.000</td><td>1.120.000</td><td>4.620.000</td></tr>
  </tbody>
</table>
<h2>Rumus Biaya per Kilometer</h2>
<p>Untuk membandingkan efisiensi biaya, gunakan rumus:</p>
<pre>biaya_per_km = total_biaya / total_kilometer</pre>
<h3>Contoh Perhitungan</h3>
<p>Jika Truck A menempuh 20 000 km dalam satu bulan dengan total biaya Rp7.100.000, maka:</p>
<pre>biaya_per_km = 7.100.000 / 20 000 = Rp355 per km</pre>
<h2>Perbandingan dengan Total Cost of Ownership (TCO)</h2>
<p>TCO mencakup semua biaya selama masa pakai kendaraan, termasuk depresiasi dan biaya modal. Biaya operasional yang dihitung di atas merupakan bagian dari TCO.</p>
<h2>Kesalahan Umum dalam Analisis Biaya</h2>
<ul>
  <li>Mengabaikan biaya tetap yang signifikan.</li>
  <li>Menilai biaya per kilometer tanpa mempertimbangkan beban muatan.</li>
  <li>Tidak memperbarui data biaya secara periodik.</li>
</ul>`,
    metaTitle: 'Cara Menghitung Biaya Operasional Armada Perusahaan – Cek Kendaraan',
    metaDescription: 'Panduan menghitung biaya tetap, variabel, serta biaya per kilometer armada dengan contoh tabel dan rumus praktis.'
  }
];
