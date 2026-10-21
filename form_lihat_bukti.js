const Pembayaran = require("./Pembayaran");

class Form_Lihat_Bukti {
  constructor(database) {
    this.pembayaran = new Pembayaran(database);
  }

  tampilkanBukti(idPembayaran) {
    const bukti =
      this.pembayaran.getBuktiPembayaran(idPembayaran);

    if (!bukti) {
      return {
        sukses: false,
        pesan: "Bukti pembayaran tidak ditemukan."
      };
    }

    return {
      sukses: true,
      pesan: "Bukti pembayaran berhasil ditemukan.",
      data: bukti
    };
  }
}

module.exports = Form_Lihat_Bukti;