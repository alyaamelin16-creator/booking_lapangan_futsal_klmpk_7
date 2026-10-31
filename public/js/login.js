const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const roleInput = document.getElementById("role");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const role = roleInput.value;

  // Existence Checks: username wajib diisi
  if (username === "") {
    alert("Username harus diisi.");
    usernameInput.focus();
    return;
  }

  // Existence Checks: password wajib diisi
  if (password.trim() === "") {
    alert("Password harus diisi.");
    passwordInput.focus();
    return;
  }

  // Validasi panjang password
  if (password.length < 6) {
    alert("Password minimal 6 karakter.");
    passwordInput.focus();
    return;
  }

  // Pastikan role sudah dipilih
  if (role === "") {
    alert("Silakan pilih role terlebih dahulu.");
    roleInput.focus();
    return;
  }

  sessionStorage.setItem("martanaName", username);
  sessionStorage.setItem("martanaRole", role);

  alert("Login berhasil. Selamat datang, " + username + "!");
  window.location.href = "beranda.html";
});

togglePassword.addEventListener("click", () => {
  const showPassword = passwordInput.type === "password";
  passwordInput.type = showPassword ? "text" : "password";
  togglePassword.textContent = showPassword ? "Sembunyikan" : "Lihat";
  togglePassword.setAttribute("aria-pressed", String(showPassword));
  togglePassword.setAttribute(
    "aria-label",
    showPassword ? "Sembunyikan password" : "Tampilkan password"
  );
});

document.getElementById("registerLink").addEventListener("click", (event) => {
  event.preventDefault();
  alert("Halaman registrasi belum termasuk bagian praktikum ini.");
});
