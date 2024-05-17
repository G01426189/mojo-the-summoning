// create your User model here


const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false 
    },
   
});

module.exports = User;