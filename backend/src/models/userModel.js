const pool = require("../config/db");

// check email exists or not
const emailExists = async (email) => {
  const [rows] = await pool.execute(
    `SELECT 1
     FROM users
     WHERE email = ?
     LIMIT 1`,
    [email],
  );

  return rows.length > 0;
};

// Insert a new customer
const createUser = async (fullName, email, passwordHash) => {
  const [result] = await pool.execute(
    `INSERT INTO users
     (full_name, email, password_hash)
     VALUES (?, ?, ?)`,
    [fullName, email, passwordHash],
  );

  return result.insertId;
};

module.exports = {
  emailExists,
  createUser,
};
