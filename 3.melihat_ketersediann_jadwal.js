class FormCekJadwal {
  constructor(jadwal) {
    this.jadwal = jadwal;
  }

  cekKetersediaan(tanggal, jam) {
    return this.jadwal.cekKetersediaan(
      tanggal,
      jam
    );
  }
}

class Jadwal {
  constructor(
    idJadwal,
    idLapangan,
    tanggal,
    jamMulai,
    jamSelesai,
    status
  ) {
    this.idJadwal = idJadwal;
    this.idLapangan = idLapangan;
    this.tanggal = tanggal;
    this.jamMulai = jamMulai;
    this.jamSelesai = jamSelesai;
    this.status = status;
  }

  cekKetersediaan(tanggal, jam) {
    return (
      this.tanggal === tanggal &&
      jam >= this.jamMulai &&
      jam < this.jamSelesai &&
      this.status === "tersedia"
    );
  }
}

class Database {
  constructor(jadwal = []) {
    this.jadwal = jadwal;
  }

  ambilJadwal(tanggal, jam) {
    return this.jadwal.filter((item) =>
      item.cekKetersediaan(tanggal, jam)
    );
  }
}

module.exports = {
  FormCekJadwal,
  Jadwal,
  Database
};