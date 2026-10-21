class Form_Lihat_Laporan {
    constructor(database) {
        this.database = database;
    }

    lihatDataLaporan() {
        return this.database.ambilLaporan();
    }
}

module.exports = Form_Lihat_Laporan;