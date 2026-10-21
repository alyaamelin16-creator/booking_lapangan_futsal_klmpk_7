class ReportPage {
  constructor(laporan) {
    this.laporan = laporan;
  }

  lihatLaporanPenyewaan() {
    return this.laporan.ambilLaporanPenyewaan();
  }

  tampilkanLaporanPenyewaan() {
    return this.lihatLaporanPenyewaan();
  }
}

class Laporan {
  constructor(
    idLaporan,
    periode,
    riwayatBooking = [],
    totalPendapatan = 0
  ) {
    this.idLaporan = idLaporan;
    this.periode = periode;
    this.riwayatBooking = riwayatBooking;
    this.totalPendapatan = totalPendapatan;
  }

  ambilLaporanPenyewaan() {
    return {
      idLaporan: this.idLaporan,
      periode: this.periode,
      riwayatBooking: this.riwayatBooking,
      totalPendapatan: this.totalPendapatan
    };
  }
}

class Database {
  constructor(laporan = []) {
    this.laporan = laporan;
  }

  queryLaporanPenyewaan() {
    return this.laporan.map((item) =>
      item.ambilLaporanPenyewaan()
    );
  }
}

module.exports = {
  ReportPage,
  Laporan,
  Database
};