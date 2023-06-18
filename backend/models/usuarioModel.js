import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Usuario = db.define('usuario', {
    nome:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Usuario;