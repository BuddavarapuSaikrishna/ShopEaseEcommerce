const pool = require("./db");

async function testConnection() {
  let connection;

  try {
    connection = await pool.getConnection();

    const [rows] = await connection.query(`
      SELECT
        DATABASE() AS databaseName,
        CURRENT_USER() AS connectedUser
    `);

    console.log("MySQL connection successful!");
    console.log(rows[0]);
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
  } finally {
    if (connection) {
      connection.release();
    }

    await pool.end();
  }
}

testConnection();
