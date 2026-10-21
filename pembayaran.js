class Pembayaran {
  constructor(database) {
    this.database = database;
  }

  validasiBukti(data) {
    return Boolean(
      data &&
      data.idBooking &&
      data.metodePembayaran &&
      data.buktiPembayaran
    );
  }

  simpanPembayaran(data) {
    const pembayaranBaru = {
      idPembayaran: this.database.generateId("pembayaran"),
      idBooking: data.idBooking,
      metodePembayaran: data.metodePembayaran,
      buktiPembayaran: data.buktiPembayaran,
      statusPembayaran: "Menunggu Verifikasi"
    };

    return this.database.simpanPembayaran(pembayaranBaru);
  }

  getBuktiPembayaran(idPembayaran) {
    return this.database.cariPembayaran(idPembayaran);
  }
}

module.exports = Pembayaran;