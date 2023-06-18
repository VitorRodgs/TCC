import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Campo = db.define('campo', {
    nome:{
        type: DataTypes.STRING
    },
    tipo:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Campo;