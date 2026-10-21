const Booking = require("./Booking");

class Form_Booking {
  constructor(database) {
    this.booking = new Booking(database);
  }

  submitBooking(data) {
    if (!this.booking.validasiData(data)) {
      return {
        sukses: false,
        pesan: "Data booking belum lengkap."
      };
    }

    if (!this.booking.cekKetersediaan(data)) {
      return {
        sukses: false,
        pesan: "Lapangan tidak tersedia pada jadwal tersebut."
      };
    }

    const hasil = this.booking.simpanBooking(data);

    return {
      sukses: true,
      pesan: "Booking lapangan berhasil disimpan.",
      data: hasil
    };
  }
}

module.exports = Form_Booking;