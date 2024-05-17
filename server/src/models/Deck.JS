// create your Deck  model here
const { DataTypes} = require("sequelize");
const sequelize = require('../db/config');

const Deck  = sequelize.define('Deck',{
id:{
    type: DataTypes.INTEGER,
    allowNuLL: false
},
name:{
    type: DataTypes.STRING,
    allowNuLL: false
},
xp:{
    type: DataTypes.INTEGER,
    allowNuLL: false
}

});  
module.exports = Deck ;