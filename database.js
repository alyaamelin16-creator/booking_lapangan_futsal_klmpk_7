class Database {
  constructor() {
    this.dataBooking = [];
    this.dataPembayaran = [];
    this.dataSewa = [];

    this.nomorId = {
      booking: 1,
      pembayaran: 1,
      sewa: 1
    };
  }

  generateId(jenis) {
    const id = this.nomorId[jenis];

    if (id === undefined) {
      throw new Error("Jenis ID tidak dikenal.");
    }

    this.nomorId[jenis]++;

    return `${jenis}-${id}`;
  }

  // Operasi data booking
  cekKetersediaanLapangan(data) {
    return !this.dataBooking.some((booking) =>
      booking.namaLapangan === data.namaLapangan &&
      booking.tanggal === data.tanggal &&
      booking.jam === data.jam
    );
  }

  simpanBooking(data) {
    this.dataBooking.push(data);
    return data;
  }

  // Operasi data pembayaran
  simpanPembayaran(data) {
    this.dataPembayaran.push(data);
    return data;
  }

  cariPembayaran(idPembayaran) {
    return (
      this.dataPembayaran.find(
        (data) => data.idPembayaran === idPembayaran
      ) || null
    );
  }

  // Operasi data sewa
  tambahSewa(data) {
    this.dataSewa.push(data);
    return data;
  }

  ambilSemuaSewa() {
    return [...this.dataSewa];
  }

  cariSewa(idSewa) {
    return (
      this.dataSewa.find(
        (data) => data.idSewa === idSewa
      ) || null
    );
  }

  perbaruiSewa(idSewa, dataBaru) {
    const indeks = this.dataSewa.findIndex(
      (data) => data.idSewa === idSewa
    );

    if (indeks === -1) {
      return null;
    }

    this.dataSewa[indeks] = {
      ...this.dataSewa[indeks],
      namaPenyewa: dataBaru.namaPenyewa,
      namaLapangan: dataBaru.namaLapangan,
      tanggal: dataBaru.tanggal,
      jam: dataBaru.jam,
      durasi: dataBaru.durasi
    };

    return this.dataSewa[indeks];
  }

  hapusSewa(idSewa) {
    const indeks = this.dataSewa.findIndex(
      (data) => data.idSewa === idSewa
    );

    if (indeks === -1) {
      return false;
    }

    this.dataSewa.splice(indeks, 1);
    return true;
  }
}

module.exports = Database;