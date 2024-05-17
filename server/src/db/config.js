// add your database connection here
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage : path.join(__dirname, "config.sqlite"),

});
(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })(
)
module.exports = sequelize;