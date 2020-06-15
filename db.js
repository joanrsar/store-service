const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'store-21.c9vc2lcfn2qx.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})