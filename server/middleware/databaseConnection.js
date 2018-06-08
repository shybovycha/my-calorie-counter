const pg = require('pg');
const process = require('process');

const { Pool } = pg;

const pool = new Pool({
  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT,

  connectionString: process.env.DATABASE_URL,
});

module.exports = (req, res, next) => {
  req.databaseConnectionPool = pool;

  next();
};
