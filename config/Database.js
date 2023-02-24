import { Sequelize } from 'sequelize';

const dbName = "db_warga";
const username = "root";
const password = "";
const host = "localhost";
const dialect = "mysql";

const db = new Sequelize(dbName, username, password, {
    host: host,
    dialect: dialect
});

export default db;