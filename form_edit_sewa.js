const Sewa = require("./Sewa");

class Form_Edit_Sewa {
  constructor(database) {
    this.sewa = new Sewa(database);
  }

  tampilkanDataUntukEdit(idSewa) {
    return this.sewa.getDataSewaById(idSewa);
  }

  submitPerubahan(idSewa, dataBaru) {
    if (!this.sewa.validasiDataSewa(dataBaru)) {
      return {
        sukses: false,
        pesan: "Data sewa belum lengkap."
      };
    }

    const hasil = this.sewa.editDataSewa(idSewa, dataBaru);

    if (!hasil) {
      return {
        sukses: false,
        pesan: "Data sewa tidak ditemukan."
      };
    }

    return {
      sukses: true,
      pesan: "Data sewa berhasil diperbarui.",
      data: hasil
    };
  }
}

module.exports = Form_Edit_Sewa;