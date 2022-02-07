const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.sequelize.define(
    'abouts',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.JSON
        }
    },
    {
        timestamps: false
    }
);