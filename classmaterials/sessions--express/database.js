const pgp = require('pg-promise')()

const cn = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE_NAME
};

const db = pgp(cn)

module.exports = db