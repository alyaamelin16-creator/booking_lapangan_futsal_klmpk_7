const fs = require("fs");
const path = require("path");

class Form_Download_Laporan {
    constructor(database) {
        this.database = database;
    }

    downloadDataLaporan(namaFile = "Laporan.csv") {
        const laporan = this.database.ambilLaporan();

        const kolom = [
            "idLaporan",
            "tanggal",
            "jenisLaporan",
            "keterangan",
            "totalPendapatan"
        ];

        const escapeCSV = (nilai) =>
            `"${String(nilai ?? "").replace(/"/g, '""')}"`;

        const isiCSV = [
            kolom.join(","),
            ...laporan.map((item) =>
                kolom.map((key) => escapeCSV(item[key])).join(",")
            )
        ].join("\r\n");

        const lokasiFile = path.resolve(namaFile);

        fs.writeFileSync(lokasiFile, "\uFEFF" + isiCSV, "utf8");

        return lokasiFile;
    }
}

module.exports = Form_Download_Laporan;