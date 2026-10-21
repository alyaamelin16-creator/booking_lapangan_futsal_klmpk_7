const Sewa = require("./Sewa");

class Form_Tambah_Sewa {
  constructor(database) {
    this.sewa = new Sewa(database);
  }

  submitDataSewa(data) {
    if (!this.sewa.validasiDataSewa(data)) {
      return {
        sukses: false,
        pesan: "Data sewa belum lengkap."
      };
    }

    const hasil = this.sewa.tambahDataSewa(data);

    return {
      sukses: true,
      pesan: "Data sewa berhasil ditambahkan.",
      data: hasil
    };
  }
}

module.exports = Form_Tambah_Sewa;