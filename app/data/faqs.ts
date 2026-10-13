export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string; // HTML string
}

export const faqs: FAQ[] = [
  // Pengelolaan Kendaraan
  {
    id: 'faq-1',
    category: 'Pengelolaan Kendaraan',
    question: 'Bagaimana cara menambah kendaraan baru ke sistem?',
    answer: `<p>Masuk ke modul <a href="/fitur/fleet-vehicle">Fleet & Vehicle</a>, klik tombol <strong>Tambah Kendaraan</strong>, isi data kendaraan (nomor polisi, tipe, tahun, dll.) dan simpan. Kendaraan akan langsung muncul di daftar armada.</p>`
  },
  {
    id: 'faq-2',
    category: 'Pengelolaan Kendaraan',
    question: 'Apakah dapat mengelompokkan kendaraan berdasarkan tipe atau departemen?',
    answer: `<p>Ya. Pada halaman daftar kendaraan terdapat filter <em>tipe</em> dan <em>departemen</em> yang dapat dipilih untuk menampilkan kelompok kendaraan tertentu.</p>`
  },
  // Dokumen Kendaraan
  {
    id: 'faq-3',
    category: 'Dokumen Kendaraan',
    question: 'Bagaimana cara mengunggah dan melacak STNK serta KIR?',
    answer: `<p>Di modul <a href="/fitur/fleet-vehicle">Fleet & Vehicle</a> pilih kendaraan, kemudian pada tab <strong>Dokumen</strong> unggah file STNK atau KIR. Sistem mencatat tanggal berlaku dan menampilkan notifikasi reminder 30 hari sebelum masa berlaku habis.</p>`
  },
  {
    id: 'faq-4',
    category: 'Dokumen Kendaraan',
    question: 'Apakah sistem memberikan notifikasi sebelum dokumen habis?',
    answer: `<p>Ya. Pada dashboard terdapat widget “Dokumen Akan Habis” yang menampilkan kendaraan dengan dokumen yang akan berakhir dalam 30 hari.</p>`
  },
  // Perawatan dan Servis
  {
    id: 'faq-5',
    category: 'Perawatan dan Servis',
    question: 'Bagaimana mencatat work order dan riwayat servis?',
    answer: `<p>Gunakan modul <a href="/fitur/maintenance">Maintenance</a>. Pilih kendaraan, buat work order baru, isi detail pekerjaan, suku cadang yang diganti, dan simpan. Semua data tercatat dalam riwayat servis kendaraan.</p>`
  },
  {
    id: 'faq-6',
    category: 'Perawatan dan Servis',
    question: 'Apakah ada laporan biaya perawatan?',
    answer: `<p>Di modul Maintenance terdapat laporan bulanan yang menampilkan total biaya perawatan per kendaraan serta ringkasan jenis pekerjaan.</p>`
  },
  // BBM dan Biaya Operasional
  {
    id: 'faq-7',
    category: 'BBM dan Biaya Operasional',
    question: 'Bagaimana mencatat pengisian BBM dan menghitung rasio konsumsi?',
    answer: `<p>Gunakan modul <a href="/fitur/fuel">Fuel</a>. Isi liter, harga per liter, dan odometer pada saat pengisian. Sistem menghitung rasio km/l secara otomatis.</p>`
  },
  {
    id: 'faq-8',
    category: 'BBM dan Biaya Operasional',
    question: 'Apakah dapat membandingkan biaya antar kendaraan?',
    answer: `<p>Di modul Fuel terdapat fitur perbandingan yang menampilkan total biaya BBM per kendaraan dalam periode yang dipilih.</p>`
  },
  // Akun dan Penggunaan Sistem
  {
    id: 'faq-9',
    category: 'Akun dan Penggunaan Sistem',
    question: 'Bagaimana mengatur hak akses pengguna?',
    answer: `<p>Masuk ke <a href="/fitur/user-management">User Management</a>, pilih pengguna, dan atur peran (admin, supervisor, staff) serta izin akses modul.</p>`
  },
  {
    id: 'faq-10',
    category: 'Akun dan Penggunaan Sistem',
    question: 'Apakah ada audit log aktivitas pengguna?',
    answer: `<p>Ya. Modul <a href="/fitur/audit-log">Audit Log</a> mencatat semua tindakan pengguna, termasuk perubahan data kendaraan, dokumen, dan konfigurasi.</p>`
  }
];
