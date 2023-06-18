import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Form = db.define('form', {
    nome:{
        type: DataTypes.STRING
    },
    tipo:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

export default Form;