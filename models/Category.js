const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.sequelize.define(
    'categories',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
        },
        imageSrc: {
            type: Sequelize.STRING
        }

    },
    {
        timestamps: false
    }
);