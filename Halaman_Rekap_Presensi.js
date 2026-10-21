class Halaman_Rekap_Presensi {
    constructor(database) {
        this.database = database;
    }

    lihatDataPresensi() {
        return this.database.ambilPresensi();
    }

    tampilkanRekapPresensi() {
        const data = this.database.ambilPresensi();

        const rekap = {
            totalPresensi: data.length,
            hadir: 0,
            izin: 0,
            sakit: 0,
            alpa: 0
        };

        data.forEach((item) => {
            const status = String(item.status || "").toLowerCase();

            if (status === "hadir") {
                rekap.hadir++;
            } else if (status === "izin") {
                rekap.izin++;
            } else if (status === "sakit") {
                rekap.sakit++;
            } else if (
                status === "alpa" ||
                status === "tidak hadir"
            ) {
                rekap.alpa++;
            }
        });

        return rekap;
    }
}

module.exports = Halaman_Rekap_Presensi;