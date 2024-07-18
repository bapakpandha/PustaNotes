# Submission Final: Pustanotes, Web App Catatan Pribadi dengan menggunakan fetch API
Nama: Ahmad Rifqi Maulana

Username dicoding: si_tomb

<div style="display:flex;width:100vw;justify-content: center;align-items: center;">
<div style="position:relative; width:75%">
  <img src="https://raw.githubusercontent.com/bapakpandha/bapakpandha.github.io/main/images/pustanotes.webp" alt="Pustanotes" style="margin-left: auto;margin-right: auto;display:block;/* width:250px; */">
</div>
</div>

| | Deskripsi |
| ----------- | ----------- |
| Nama | [Pustanotes](https://bapakpandha.github.io/Pustanotes) |
| Deskripsi | Pustanotes merupakan sebuah aplikasi berbasis website yang bertujuan untuk menyimpan catatan pribadi pengguna ke server cloud dengan menggunakan fetch API. Pustanotes dibuat dengan bantuan Node Package Manager serta dibungkus dengan Webpack. |
| Keunggulan | Pustanotes memiliki banyak fitur unggulan dibandingkan dengan web app catatan yang lain. Dari segi _User interface,_ Pustanotes memiliki tampilan yang lebih menarik dan memanjakan mata |
| Fitur Kriteria Wajib | Setidaknya, terdapat 7 kriteria wajib dalam pembuatan aplikasi web ini: <br><br>1. **Menampilkan Daftar Catatan dengan Baik**, <br>Pustanotes berhasil menampilkan daftar catatan dengan baik, namun dengan kekurangan yaitu keterbatasan jumlah karakter yang bisa ditampilkan pada daftar catatan <br><br>2. **Formulir Tambah Catatan**, <br>Pustanotes memiliki fitur tambah catatan dengan dua input, yaitu title dan body dengan tipe input pada body berupa \<textarea> <br><br>3. **CSS Grid sebagai metode layouting**, <br>Pustanotes menggunakan css grid untuk layouting daftar catatan serta beberapa komponen lain seperti layouting tombol dan section, serta layout card catatan. <br><br>4. **Memiliki Tampilan yang Responsive di Berbagai Perangkat**, <br>Pustanotes memiliki tampilan responsif dengan memanfaatkan elemen container, serta menggunakan media queries yang mengacu pada bootstrap. Pustanotes memiliki batas minimum viewport width, yaitu 525px, seperti halnya pada bootstrap yang mengatur viewport terkecil 525px.<br><br>5. **Memanfaatkan RESTful API sebagai Sumber Data**, <br>Pustanotes memanfaatkan RESTful API yang telah disediakan oleh Dicoding sebagai sumber data. RESTful API yang digunakan adalah  https://notes-api.dicoding.dev/v2. Dokumentasi API bisa diakses pada tautan tersebut. Ada beberapa fitur yang diadopsi dengan API di atas, yaitu Membuat atau menambahkan catatan baru, Mendapatkan dan menampilkan daftar catatan, serta Menghapus catatan yang tersimpan.<br><br>6. **Menggunakan webpack sebagai Module Bundle**, <br>Pengembangan aplikasi Pustanotes menggunakan webpack sebagai module bundler dengan spesifikasi berikut:<br>**A.** Aplikasi dapat dijalankan untuk fase development dengan perintah npm run start-dev dan memanfaatkan webpack-dev-server.<br>**B.** Aplikasi dapat di-build untuk fase production dengan perintah npm run build. <br><br>7. **Menggunakan Fetch API**, <br>Pustanotes Menggunakan Fetch API untuk melakukan Asynchronous JavaScript Request dalam berinteraksi dengan API https://notes-api.dicoding.dev/v2. <br><br>7. **Memiliki Indikator Loading**, <br>Pustanotes memiliki 3 indikator loading, yaitu: <br>**A.** loading ketika user baru masuk aplikasi (karena app pustanotes yang ringan, maka pustanotes sengaja memberikan timeout 3 detik untuk menampilkan loading, karena jika tanpa diberi timeout, seringkali user langsung masuk ke app tanpa merasakan antarmuka loading),<br>**B.** loading pada saat memuat konten catatan, <br>**C.** serta loading pada saat melakukan fetch, baik itu mengarsipkan/menghapus catatan, maupun ketika menambah catatan. |
| Fitur Kriteria Opsional | **1. Memiliki Tampilan yang Menarik** <br><br> **2. Menerapkan Realtime Validation pada Formulir** <br>Pustanotes menggunakan realtime validation pada input title dan body saat user menambah atau mengedit catatan dengan peringatan berupa inputan tidak boleh kosong, dan minimal 5 karakter.<br><br> **3. Menerapkan Custom Attribute pada Custom Element** <br>Pustanotes menerapkan fitur atribut idNote untuk menghandle kategorisasi serta penghapusan dan pengeditan catatan. <br><br> **4. Memiliki Fitur Arsip Catatan** <br>Pustanotes memiliki fitur pengarsipan catatan. <br><br> **5. Menampilkan Feedback Saat Terjadi Error** <br> Pustanotes bisa menghandle kegagalan saat terjadi error, bahkan ketika terdapat error fetch, Pustanotes akan memberitahukan user melalui pop up yang menarik. <br><br> **6. Memiliki Efek Pergerakan Halus atau Animasi** <br>Pustanotes walaupun menggunakan vanilla js, tetapi mampu menerapkan Scroll reveal pada item catatan, dengan memanfaatkan IntersectionObserver API. <br><br> **7. Menerapkan Prettier sebagai Code Formatter** <br>Pustanotes memanfaatkan prettier (https://prettier.io/) untuk menulis kode yang rapi, dibuktikan dengan adanya file .prettierrc |
| Fitur Tambahan | **1. Menggunakan 6 custom element dengan 4 shadow DOM** <br> **2. Fluid Navbar dan Header Sticky yang responsif dengan mobile.** <br> **3. Animasi Gradien, Loading, Scroll Reveal, Tooltip, dan masih banyak yang lainnya.** <br> **4. Custom Dialog Confirmation Builder dengan Vanilla JS.** <br> **5. Menampilkan format tanggal dan waktu yang readable.** <br> **6. Fitur Trucate Text ketika teks yang ditampilkan terlalu panjang.** <br> **7. Menggunakan Elemen Slot untuk manipulasi Shadow DOM content.** <br> **8. Menampilkan animasi Konten Kosong jika konten kosong.** <br> **9. Menampilkan Keterangan gagal mengambil data jika sistem API tidak dapat di koneksikan.** <br> **10. Fitur Tab kategori arsip maupun catatan utama.** <br> **11. Fitur Edit catatan.** <br> **12. Fitur Pencarian Catatan yang Realtime.** |
| Web app | [[Clickbait Prediction Metadata]](https://bapakpandha.github.io/PustaNotes/) |

