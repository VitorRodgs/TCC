import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Campo = db.define('campo', {
    nome: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    opcoes: {
        type: DataTypes.ARRAY(DataTypes.STRING), // Array de strings
        allowNull: true
    }
}, {
    freezeTableName: true
});


export default Campo;