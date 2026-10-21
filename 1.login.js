
class FormLogin {
  constructor(user, database) {
    this.user = user;
    this.database = database;
  }

  verifikasiLogin(username, password) {
    return this.database.validasiDataLogin(username, password);
  }
}

class User {
  constructor(idUser, nama, username, password, role) {
    this.idUser = idUser;
    this.nama = nama;
    this.username = username;
    this.password = password;
    this.role = role;
  }

  verifikasiLogin(username, password) {
    return this.username === username &&
      this.password === password;
  }
}

class Database {
  constructor(users = []) {
    this.users = users;
  }

  validasiDataLogin(username, password) {
    const user = this.users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (user) {
      return {
        status: "login berhasil",
        user: user
      };
    }

    return {
      status: "login gagal",
      user: null
    };
  }
}

module.exports = { FormLogin, User, Database };