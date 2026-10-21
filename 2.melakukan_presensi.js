class FormPresensi {
  constructor(database) {
    this.database = database;
  }

  simpanDataPresensi(idPenjaga, status) {
    return this.database.simpanDataPresensi(
      idPenjaga,
      status
    );
  }
}

class Database {
  constructor() {
    this.dataPresensi = [];
  }

  simpanDataPresensi(idPenjaga, status) {
    const data = {
      idPresensi: this.dataPresensi.length + 1,
      idPenjaga: idPenjaga,
      tanggalPresensi: new Date()
        .toISOString()
        .slice(0, 10),
      jamMasuk: new Date()
        .toTimeString()
        .slice(0, 8),
      status: status
    };

    this.dataPresensi.push(data);

    return {
      pesan: "Presensi Berhasil",
      data: data
    };
  }
}

module.exports = { FormPresensi, Database };