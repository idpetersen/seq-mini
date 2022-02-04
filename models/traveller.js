const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Traveler extends Model {}

Traveler.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Traveler',
    }
)

module.exports = Traveler;