const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model { }

Movie.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        plot: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        trailer: {
            type: DataTypes.STRING,
            allowNull: fasle,
        },

        poster: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movie',
    }
);

module.exports = Movie; 
