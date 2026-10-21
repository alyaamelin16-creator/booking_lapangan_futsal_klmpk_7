
const KEY_EDIT_JADWAL = "jadwalLapangan";

// Memuat data jadwal yang akan diedit
function muatFormEdit(id) {
    const jadwal = JSON.parse(
        localStorage.getItem(KEY_EDIT_JADWAL) || "[]"
    );

    const data = jadwal.find(item => item.id === id);

    if (!data) {
        alert("Jadwal tidak ditemukan.");
        return;
    }

    document.getElementById("editId").value = data.id;
    document.getElementById("editNamaLapangan").value =
        data.namaLapangan;
    document.getElementById("editTanggal").value = data.tanggal;
    document.getElementById("editJamMulai").value = data.jamMulai;
    document.getElementById("editJamSelesai").value = data.jamSelesai;
    document.getElementById("editPemesan").value = data.pemesan;
    document.getElementById("editStatus").value =
        data.status || "Dipesan";

    document.getElementById("formEditJadwal").hidden = false;
    document.getElementById("pesanEdit").textContent =
        "Silakan ubah data jadwal.";
}

// Menyimpan perubahan jadwal
document.getElementById("formEditJadwal")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const id = Number(
            document.getElementById("editId").value
        );

        const jadwal = JSON.parse(
            localStorage.getItem(KEY_EDIT_JADWAL) || "[]"
        );

        const index = jadwal.findIndex(item => item.id === id);

        if (index === -1) {
            document.getElementById("pesanEdit").textContent =
                "Jadwal tidak ditemukan.";
            return;
        }

        const namaLapangan =
            document.getElementById("editNamaLapangan").value.trim();
        const tanggal =
            document.getElementById("editTanggal").value;
        const jamMulai =
            document.getElementById("editJamMulai").value;
        const jamSelesai =
            document.getElementById("editJamSelesai").value;
        const pemesan =
            document.getElementById("editPemesan").value.trim();
        const status =
            document.getElementById("editStatus").value;

        if (!namaLapangan || !tanggal || !jamMulai ||
            !jamSelesai || !pemesan || !status) {
            document.getElementById("pesanEdit").textContent =
                "Semua kolom wajib diisi.";
            return;
        }

        if (jamSelesai <= jamMulai) {
            document.getElementById("pesanEdit").textContent =
                "Jam selesai harus setelah jam mulai.";
            return;
        }

        jadwal[index] = {
            ...jadwal[index],
            namaLapangan,
            tanggal,
            jamMulai,
            jamSelesai,
            pemesan,
            status
        };

        try {
            localStorage.setItem(
                KEY_EDIT_JADWAL,
                JSON.stringify(jadwal)
            );

            document.getElementById("pesanEdit").textContent =
                "Jadwal Lapangan Berhasil Diperbarui";

            if (typeof lihatJadwalLapangan === "function") {
                lihatJadwalLapangan();
            }
        } catch (error) {
            document.getElementById("pesanEdit").textContent =
                "Gagal menyimpan perubahan jadwal.";
        }
    });

document.getElementById("btnBatalEdit")
    .addEventListener("click", function() {
        document.getElementById("formEditJadwal").hidden = true;
    });
