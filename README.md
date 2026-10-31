# Martana Futsal

Versi final yang telah dirapikan dengan mempertahankan identitas warna biru muda, putih, dan teal dari prototype awal.

## Menjalankan website
1. Ekstrak file ZIP.
2. Buka folder `martana-final` di VS Code.
3. Jalankan terminal di folder tersebut.
4. Jalankan `npm install` jika dependensi belum terpasang.
5. Jalankan `npm start`.
6. Buka `http://localhost:3000` di browser.

## Perubahan
- Tampilan logo, login, dan beranda dirapikan agar lebih modern dan responsif.
- Validasi login: username wajib diisi, password wajib diisi, dan password minimal 6 karakter.
- Pop-up untuk validasi input, pesan login demo berhasil, dan informasi registrasi.
- Tombol untuk menampilkan/menyembunyikan password.
- Data username dan role tetap disimpan menggunakan `sessionStorage`.
- Struktur proyek Express dan halaman yang sudah ada tetap dipertahankan.

## Catatan
Login saat ini masih berupa simulasi sisi browser. Username dan password belum diverifikasi terhadap database atau sistem autentikasi, sehingga pesan berhasil bukan bukti akun benar-benar terdaftar.
