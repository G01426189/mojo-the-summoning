// create your Card model here
const { DataTypes} = require("sequelize");
const sequelize = require('../db/config');

const Card = sequelize.define('Card',{
id:{
    type: DataTypes.INTEGER,
    allowNuLL: false
},
name:{
    type: DataTypes.STRING,
    allowNuLL: false
},
mojo:{
    type: DataTypes.INTEGER,
    allowNuLL: false
},
stamina:{
    type: DataTypes.INTEGER,
    allowNuLL: false
},
imgURL:{
    type: DataTypes.STRING,
    allowNuLL: false
},



});  
module.exports = Card;