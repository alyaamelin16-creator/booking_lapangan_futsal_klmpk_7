class User {
    constructor(idUser, nama, username, password, role) {
        this.idUser = idUser;
        this.nama = nama;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    login(username, password) {
        return this.validasiAkun()
            && this.username === username
            && this.password === password;
    }

    validasiAkun() {
        return Boolean(this.username && this.password);
    }
}

class Pelanggan extends User {
    constructor(idUser, nama, username, password, email, alamat, noHp) {
        super(idUser, nama, username, password, "Pelanggan");
        this.email = email;
        this.alamat = alamat;
        this.noHp = noHp;
    }

    melihatJadwal(jadwalLapangan) {
        return jadwalLapangan.filter(jadwal => jadwal.cekKetersediaan());
    }

    melakukanBooking(booking) {
        return booking.bookingLapangan();
    }

    melakukanPembayaran(pembayaran) {
        return pembayaran.prosesPembayaran();
    }

    menerimaKwitansi(pembayaran) {
        return pembayaran.lihatKwitansi();
    }
}

class Penjaga extends User {
    constructor(idUser, nama, username, password, shiftKerja) {
        super(idUser, nama, username, password, "Penjaga");
        this.shiftKerja = shiftKerja;
    }

    melakukanPresensi(presensi) {
        return presensi.melakukanPresensi();
    }

    kelolaDataSewa(daftarBooking) {
        return daftarBooking.map(booking => booking.lihatBooking());
    }

    prosesPembayaran(pembayaran) {
        return pembayaran.prosesPembayaran();
    }

    buatLaporan(laporan) {
        return laporan.lihatLaporan();
    }
}

class Owner extends User {
    constructor(idUser, nama, username, password, jabatan) {
        super(idUser, nama, username, password, "Owner");
        this.jabatan = jabatan;
    }

    melihatRekapPresensi(daftarPresensi) {
        return daftarPresensi.map(presensi => presensi.melihatRekap());
    }

    meninjauLaporan(daftarLaporan) {
        return daftarLaporan.map(laporan => laporan.lihatLaporan());
    }
}

class Lapangan {
    constructor(idLapangan, jenisLapangan, jenisPemain, hargaPerJam, statusLapangan) {
        this.idLapangan = idLapangan;
        this.jenisLapangan = jenisLapangan;
        this.jenisPemain = jenisPemain;
        this.hargaPerJam = hargaPerJam;
        this.statusLapangan = statusLapangan;
    }

    cekKetersediaan() {
        return this.statusLapangan.toLowerCase() === "tersedia";
    }
}

class JadwalLapangan {
    constructor(idJadwal, jenisLapangan, tanggal, jamMulai, jamSelesai, statusJadwal, lapangan) {
        this.idJadwal = idJadwal;
        this.jenisLapangan = jenisLapangan;
        this.tanggal = tanggal;
        this.jamMulai = jamMulai;
        this.jamSelesai = jamSelesai;
        this.statusJadwal = statusJadwal;
        this.lapangan = lapangan;
    }

    cekKetersediaan() {
        return this.statusJadwal.toLowerCase() === "tersedia"
            && this.lapangan.cekKetersediaan();
    }
}

class Booking {
    constructor(idBooking, tanggalBooking, idLapangan, statusBooking, pelanggan, jadwal) {
        this.idBooking = idBooking;
        this.tanggalBooking = tanggalBooking;
        this.idLapangan = idLapangan;
        this.statusBooking = statusBooking;
        this.pelanggan = pelanggan;
        this.jadwal = jadwal;
        this.dataBooking = null;
        this.pembayaran = null;
    }

    bookingLapangan() {
        if (!this.jadwal.cekKetersediaan()) {
            return false;
        }

        this.jadwal.statusJadwal = "Dibooking";
        this.statusBooking = "Menunggu Pembayaran";
        return true;
    }

    lihatBooking() {
        return {
            idBooking: this.idBooking,
            tanggalBooking: this.tanggalBooking,
            idLapangan: this.idLapangan,
            statusBooking: this.statusBooking
        };
    }

    batalkanBooking() {
        if (
            this.statusBooking === "Terkonfirmasi" ||
            this.statusBooking === "Dibatalkan"
        ) {
            return false;
        }

        this.statusBooking = "Dibatalkan";
        this.jadwal.statusJadwal = "Tersedia";
        return true;
    }
}

class DataBooking {
    constructor(idDataBooking, riwayatBooking) {
        this.idDataBooking = idDataBooking;
        this.riwayatBooking = riwayatBooking;
    }

    melihatDataBooking() {
        return {
            idDataBooking: this.idDataBooking,
            riwayatBooking: this.riwayatBooking
        };
    }
}

class Pembayaran {
    constructor(idPembayaran, tanggalPembayaran, totalPembayaran, metodePembayaran, statusPembayaran) {
        this.idPembayaran = idPembayaran;
        this.tanggalPembayaran = tanggalPembayaran;
        this.totalPembayaran = totalPembayaran;
        this.metodePembayaran = metodePembayaran;
        this.statusPembayaran = statusPembayaran;
    }

    prosesPembayaran() {
        if (!this.validasiPembayaran()) {
            return false;
        }

        this.statusPembayaran = "Berhasil";
        return true;
    }

    lihatKwitansi() {
        return {
            idPembayaran: this.idPembayaran,
            tanggalPembayaran: this.tanggalPembayaran,
            totalPembayaran: this.totalPembayaran,
            metodePembayaran: this.metodePembayaran,
            statusPembayaran: this.statusPembayaran
        };
    }

    validasiPembayaran() {
        return this.totalPembayaran > 0
            && Boolean(this.metodePembayaran);
    }
}

class Presensi {
    constructor(idPresensi, tanggalPresensi, jamMasuk) {
        this.idPresensi = idPresensi;
        this.tanggalPresensi = tanggalPresensi;
        this.jamMasuk = jamMasuk;
    }

    melakukanPresensi() {
        return Boolean(this.tanggalPresensi && this.jamMasuk);
    }

    melihatRekap() {
        return {
            idPresensi: this.idPresensi,
            tanggalPresensi: this.tanggalPresensi,
            jamMasuk: this.jamMasuk
        };
    }
}

class Laporan {
    constructor(idLaporan, periode, riwayatBooking, totalPendapatan) {
        this.idLaporan = idLaporan;
        this.periode = periode;
        this.riwayatBooking = riwayatBooking;
        this.totalPendapatan = totalPendapatan;
    }

    lihatLaporan() {
        return {
            idLaporan: this.idLaporan,
            periode: this.periode,
            riwayatBooking: this.riwayatBooking,
            totalPendapatan: this.totalPendapatan
        };
    }

    downloadLaporan() {
        return JSON.stringify(this.lihatLaporan(), null, 2);
    }

    hapusLaporan() {
        this.riwayatBooking = "";
        this.totalPendapatan = 0;
        return true;
    }
}