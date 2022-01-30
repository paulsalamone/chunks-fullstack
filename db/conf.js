const { Pool } = require("pg");

const pool = new Pool({
  user: "kmrglwwe",
  host: "abul.db.elephantsql.com",
  database: "kmrglwwe",
  password: "DFC82htTnMJQOeiw3_p3q8-8fQXTTWwY",
  port: 5432,

  // user: process.env.PGUSER,
  // host: process.env.PGHOST,
  // database: process.env.PGDATABASE,
  // password: process.env.PGPASSWORD,
  // port: process.env.PGPORT,
});

// PGUSER=kmrglwwe
// PGHOST=abul.db.elephantsql.com
// PGPASSWORD=tTO4xbIE4e8FUYHvI2Bw97e6pU7t2RMa
// PGDATABASE=kmrglwwe
// PGPORT=5432

module.exports = pool;
