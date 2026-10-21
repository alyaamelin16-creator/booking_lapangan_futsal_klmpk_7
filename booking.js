class Booking {
  constructor(database) {
    this.database = database;
  }

  validasiData(data) {
    return Boolean(
      data &&
      data.namaPenyewa &&
      data.namaLapangan &&
      data.tanggal &&
      data.jam
    );
  }

  cekKetersediaan(data) {
    return this.database.cekKetersediaanLapangan(data);
  }

  simpanBooking(data) {
    const bookingBaru = {
      idBooking: this.database.generateId("booking"),
      namaPenyewa: data.namaPenyewa,
      namaLapangan: data.namaLapangan,
      tanggal: data.tanggal,
      jam: data.jam,
      status: "Menunggu Pembayaran"
    };

    return this.database.simpanBooking(bookingBaru);
  }
}

module.exports = Booking;