const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        trip_budget: {
            type: DataTypes.DECIMAL(10,2)
        },
        traveler_amount: {
            type: DataTypes.DECIMAL(10,2),
        },
        traveler_id: {
            type:DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'Traveler',
                key: 'id',
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'Location',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip',
    }
)

module.exports = Trip;