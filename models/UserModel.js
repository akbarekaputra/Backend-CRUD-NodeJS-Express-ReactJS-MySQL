import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
    "users", {
        nik: {
            type: DataTypes.INTEGER,
            unique: true,
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING
        },
        adress: {
            type: DataTypes.STRING
        },
    }, {
        freezeTableName: true,
    }
);

export default User;

(async() => {
    await db.sync();
})();