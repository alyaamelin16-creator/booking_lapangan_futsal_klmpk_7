class Sewa {
  constructor(database) {
    this.database = database;
  }

  validasiDataSewa(data) {
    return Boolean(
      data &&
      data.namaPenyewa &&
      data.namaLapangan &&
      data.tanggal &&
      data.jam &&
      data.durasi
    );
  }

  tambahDataSewa(data) {
    const sewaBaru = {
      idSewa: this.database.generateId("sewa"),
      namaPenyewa: data.namaPenyewa,
      namaLapangan: data.namaLapangan,
      tanggal: data.tanggal,
      jam: data.jam,
      durasi: data.durasi
    };

    return this.database.tambahSewa(sewaBaru);
  }

  editDataSewa(idSewa, dataBaru) {
    return this.database.perbaruiSewa(idSewa, dataBaru);
  }

  getDataSewa() {
    return this.database.ambilSemuaSewa();
  }

  getDataSewaById(idSewa) {
    return this.database.cariSewa(idSewa);
  }

  hapusDataSewa(idSewa) {
    return this.database.hapusSewa(idSewa);
  }
}

module.exports = Sewa;