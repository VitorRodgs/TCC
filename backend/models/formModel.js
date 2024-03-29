import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Form = db.define('form', {
    nome:{
        type: DataTypes.STRING
    },
    descricao:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Form;