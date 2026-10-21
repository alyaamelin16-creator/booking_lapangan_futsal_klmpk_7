const Pembayaran = require("./Pembayaran");

class Form_Pembayaran {
  constructor(database) {
    this.pembayaran = new Pembayaran(database);
  }

  submitPembayaran(data) {
    if (!this.pembayaran.validasiBukti(data)) {
      return {
        sukses: false,
        pesan: "Data pembayaran atau bukti pembayaran belum lengkap."
      };
    }

    const hasil = this.pembayaran.simpanPembayaran(data);

    return {
      sukses: true,
      pesan: "Data pembayaran berhasil disimpan.",
      data: hasil
    };
  }
}

module.exports = Form_Pembayaran;