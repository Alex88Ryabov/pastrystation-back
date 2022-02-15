const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.sequelize.define(
    'products',
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
            type: Sequelize.JSON
        },
        categoryId: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.TEXT
        },
        info: {
            type: Sequelize.JSON
        },
        unit: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
);