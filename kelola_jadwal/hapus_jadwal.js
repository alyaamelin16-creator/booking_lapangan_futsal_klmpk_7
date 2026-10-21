const KEY_HAPUS_JADWAL = "jadwalLapangan";

// Menghapus jadwal setelah mendapat konfirmasi
function hapusJadwalLapangan(id) {
    const konfirmasi = confirm(
        "Apakah kamu yakin ingin menghapus jadwal ini?"
    );

    if (!konfirmasi) {
        return;
    }

    try {
        const jadwal = JSON.parse(
            localStorage.getItem(KEY_HAPUS_JADWAL) || "[]"
        );

        const index = jadwal.findIndex(item => item.id === id);

        if (index === -1) {
            document.getElementById("pesanHapus").textContent =
                "Jadwal tidak ditemukan.";
            return;
        }

        // Menghapus jadwal yang dipilih
        jadwal.splice(index, 1);

        localStorage.setItem(
            KEY_HAPUS_JADWAL,
            JSON.stringify(jadwal)
        );

        document.getElementById("pesanHapus").textContent =
            "Jadwal Berhasil Dihapus";

        // Memperbarui tampilan daftar jadwal
        if (typeof lihatJadwalLapangan === "function") {
            lihatJadwalLapangan();
        }
    } catch (error) {
        document.getElementById("pesanHapus").textContent =
            "Jadwal gagal dihapus.";
    }
}
