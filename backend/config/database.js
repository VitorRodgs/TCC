import { Sequelize } from "sequelize";

const db = new Sequelize('tcc_db', 'root', 'senha123', {
    host: "localhost",
    dialect: "mysql"
});

export default db;