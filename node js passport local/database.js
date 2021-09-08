const pgp = require('pg-promise')();

// const database = "test_posts"

// const connection = 'postgres://postgres:SUMANdhakalsd@1@host:5432/' + database

// const db = pgp(connection)

const connection = {
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE_NAME
}

const db = pgp(connection)

module.exports = db