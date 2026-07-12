import mysql2 from "mysql2/promise";

export const pool = mysql2.createPool({
  uri: process.env.DB_URL,
  ssl: { rejectUnauthorized: true },
  decimalNumbers: true,
});

export default pool;
