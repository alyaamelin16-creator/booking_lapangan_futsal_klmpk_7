const Sewa = require("./Sewa");

class Halaman_Data_Sewa {
  constructor(database) {
    this.sewa = new Sewa(database);
  }

  tampilkanDataSewa() {
    return this.sewa.getDataSewa();
  }

  hapusDataSewa(idSewa) {
    const berhasil = this.sewa.hapusDataSewa(idSewa);

    if (!berhasil) {
      return {
        sukses: false,
        pesan: "Data sewa tidak ditemukan."
      };
    }

    return {
      sukses: true,
      pesan: "Data sewa berhasil dihapus."
    };
  }
}

module.exports = Halaman_Data_Sewa;