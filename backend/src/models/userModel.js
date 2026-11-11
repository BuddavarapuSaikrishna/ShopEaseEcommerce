const pool = require("../config/db");

//find user By email

const findUserByEmail = async (email) => {
  const [rows] = await pool.execute(
    `select id,full_name,
    email,
    password_hash,
    role,subscription_type
     from users where email = ? limit 1`,
    [email],
  );
  return rows[0] || null;
};

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
  findUserByEmail,
};
