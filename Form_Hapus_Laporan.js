class Form_Hapus_Laporan {
    constructor(database) {
        this.database = database;
    }

    hapusDataLaporan(idLaporan) {
        return this.database.hapusLaporan(idLaporan);
    }
}

module.exports = Form_Hapus_Laporan;