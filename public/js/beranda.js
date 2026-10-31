const role = sessionStorage.getItem("martanaRole") || "pelanggan";
const username = sessionStorage.getItem("martanaName") || "Pengguna";
const roleNames = { pelanggan: "Pelanggan", penjaga: "Penjaga", owner: "Owner" };
document.getElementById("roleName").textContent = roleNames[role] || "Pelanggan";
document.getElementById("userName").textContent = `Halo, ${username}!`;

const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const activityTitle = document.getElementById("activityTitle");
if (role === "penjaga") {
  heroTitle.textContent = "Kelola aktivitas lapangan";
  heroText.textContent = "Lihat jadwal booking dan bantu operasional harian.";
  activityTitle.textContent = "Aktivitas Hari Ini";
} else if (role === "owner") {
  heroTitle.textContent = "Pantau usaha lapangan";
  heroText.textContent = "Lihat ringkasan aktivitas penyewaan lapangan.";
  activityTitle.textContent = "Ringkasan Lapangan";
}
const toast = document.getElementById("toast");
let timer;
document.querySelectorAll("[data-message]").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    toast.textContent = item.dataset.message;
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove("show"), 2200);
  });
});
document.getElementById("logout").addEventListener("click", () => {
  sessionStorage.removeItem("martanaName");
  sessionStorage.removeItem("martanaRole");
});
