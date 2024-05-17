// create your User model here
const { DataTypes} = require("sequelize");
const sequelize = require('../db/config');

const User = sequelize.define('User',{
username:{
    type: DataTypes.STRING,
    allowNuLL: false
},
id:{
    type: DataTypes.INTEGER,
    allowNuLL: false
},

});  
module.exports = User;