const PARAMS_FROM_DB = require("./db-params");

const Pool = require("pg").Pool;
const pool = new Pool(PARAMS_FROM_DB);

module.exports = pool;
