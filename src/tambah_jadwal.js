
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formTambahJadwal");
    const pesan = document.getElementById("pesanTambah");

    form.addEventListener("submit", event => {
        event.preventDefault();

        const namaLapangan =
            document.getElementById("namaLapangan").value.trim();
        const tanggal =
            document.getElementById("tanggal").value;
        const jamMulai =
            document.getElementById("jamMulai").value;
        const jamSelesai =
            document.getElementById("jamSelesai").value;
        const pemesan =
            document.getElementById("pemesan").value.trim();

        if (!namaLapangan || !tanggal || !jamMulai ||
            !jamSelesai || !pemesan) {
            pesan.textContent = "Semua data wajib diisi.";
            return;
        }

        if (jamSelesai <= jamMulai) {
            pesan.textContent =
                "Jam selesai harus setelah jam mulai.";
            return;
        }

        const jadwal = JSON.parse(
            localStorage.getItem("jadwalLapangan") || "[]"
        );

        jadwal.push({
            id: Date.now(),
            namaLapangan,
            tanggal,
            jamMulai,
            jamSelesai,
            pemesan
        });

        try {
            localStorage.setItem(
                "jadwalLapangan",
                JSON.stringify(jadwal)
            );

            pesan.textContent =
                "Jadwal Berhasil Ditambahkan";

            form.reset();
        } catch (error) {
            pesan.textContent =
                "Jadwal gagal disimpan.";
        }
    });
});
