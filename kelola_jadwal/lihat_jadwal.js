function lihatJadwalLapangan() {
    const jadwal = JSON.parse(
        localStorage.getItem("jadwalLapangan") || "[]"
    );

    const daftar = document.getElementById("daftarJadwal");
    daftar.replaceChildren();

    if (jadwal.length === 0) {
        const row = daftar.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 5;
        cell.textContent = "Belum ada jadwal lapangan.";
        return;
    }

    jadwal.forEach((item, index) => {
        const row = daftar.insertRow();

        [
            index + 1,
            item.namaLapangan,
            item.tanggal,
            item.jamMulai + " - " + item.jamSelesai,
            item.pemesan
        ].forEach(nilai => {
            const cell = row.insertCell();
            cell.textContent = nilai;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnLihatJadwal")
        .addEventListener("click", lihatJadwalLapangan);

    lihatJadwalLapangan();

    
const cellEdit = row.insertCell();
const tombolEdit = document.createElement("button");

tombolEdit.textContent = "Edit";
tombolEdit.type = "button";

tombolEdit.addEventListener("click", () => {
    muatFormEdit(item.id);
});

cellEdit.appendChild(tombolEdit);

});
