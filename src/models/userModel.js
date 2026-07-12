import pool from "@/lib/db";

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async save() {
    const result = await pool.execute(
      `INSERT INTO users(name,email,password) VALUES(?,?,?)`,
      [this.name, this.email, this.password],
    );

    return result;
  }

  static async getUser(email) {
    const [result] = await pool.execute("SELECT * FROM users WHERE email=?", [
      email,
    ]);
    return result;
  }
}

export default User;
