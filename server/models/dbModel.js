const { Pool } = require("pg");

const PG_URI =
  "postgres://lkrtqdhl:4zLOk3T123ZYQ-sGS86xo7N1FfLg2XeH@batyr.db.elephantsql.com/lkrtqdhl";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
