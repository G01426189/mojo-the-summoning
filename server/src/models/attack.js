// create your Attack model here
const { DataTypes} = require("sequelize");
const sequelize = require('../db/config');

const Attack = sequelize.define('Attack',{

id:{
    type: DataTypes.INTEGER,
    allowNuLL: false
},
title:{
    type: DataTypes.STRING,
    allowNuLL: false
},
mojoCost:{
    type: DataTypes.INTEGER,
    allowNuLL: false
},
staminaCost:{
    type: DataTypes.INTEGER,
    allowNuLL: false
},

});  
module.exports = Attack;